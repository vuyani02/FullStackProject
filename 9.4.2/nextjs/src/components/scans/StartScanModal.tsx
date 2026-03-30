'use client'

import { useState } from 'react'
import { Divider, Input, Modal, Select, Typography } from 'antd'
import axios from 'axios'
import { IScanResult } from '@/lib/definitions'
import { useRepositoryActions, useRepositoryState } from '@/providers/repositories'
import { useStyles } from './styles/StartScanModal.style'

const { Text } = Typography

interface StartScanModalProps {
  open: boolean
  onClose: () => void
  onScanComplete: (result: IScanResult) => void
}

const StartScanModal = ({ open, onClose, onScanComplete }: StartScanModalProps) => {
  const { styles } = useStyles()
  const { repositories } = useRepositoryState()
  const { getRepositories } = useRepositoryActions()

  const [selectedRepoId, setSelectedRepoId] = useState<string | undefined>(undefined)
  const [newUrl, setNewUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOpen = () => {
    if (!repositories) getRepositories()
  }

  const handleClose = () => {
    setSelectedRepoId(undefined)
    setNewUrl('')
    setError(null)
    onClose()
  }

  const handleScan = async () => {
    setError(null)
    setIsScanning(true)

    try {
      let repositoryId = selectedRepoId

      if (!repositoryId) {
        if (!newUrl.trim()) {
          setError('Select an existing repository or enter a GitHub URL.')
          setIsScanning(false)
          return
        }
        const addRes = await axios.post('/api/repositories', { githubUrl: newUrl.trim() })
        repositoryId = addRes.data.id
      }

      const scanRes = await axios.post('/api/repositories/scan', { repositoryId })
      handleClose()
      onScanComplete(scanRes.data)
    } catch {
      setError('Scan failed. Please check the URL and try again.')
    } finally {
      setIsScanning(false)
    }
  }

  const repoOptions = (repositories ?? []).map((r) => ({
    label: `${r.owner}/${r.name}`,
    value: r.id,
  }))

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      onOk={handleScan}
      okText="Scan"
      confirmLoading={isScanning}
      title="Start a Scan"
      afterOpenChange={(visible) => { if (visible) handleOpen() }}
      okButtonProps={{ disabled: isScanning }}
    >
      <label className={styles.label}>Select an existing repository</label>
      <Select
        placeholder="Choose a repository…"
        options={repoOptions}
        value={selectedRepoId}
        onChange={(val) => { setSelectedRepoId(val); setNewUrl('') }}
        style={{ width: '100%' }}
        allowClear
        disabled={isScanning}
      />

      <Divider className={styles.divider}>or</Divider>

      <label className={styles.label}>Enter a new GitHub URL</label>
      <Input
        placeholder="https://github.com/owner/repo"
        value={newUrl}
        onChange={(e) => { setNewUrl(e.target.value); setSelectedRepoId(undefined) }}
        disabled={isScanning}
      />

      {error && <Text className={styles.errorText}>{error}</Text>}
    </Modal>
  )
}

export default StartScanModal
