'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { StyleProvider } from 'antd-style'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <StyleProvider>{children}</StyleProvider>
    </AntdRegistry>
  )
}
