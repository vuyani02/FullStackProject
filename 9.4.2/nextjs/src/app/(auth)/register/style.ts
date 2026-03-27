import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ token }) => ({
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: token.colorBgLayout,
    padding: `${token.paddingLG}px 0`,
  },
  card: {
    width: 480,
  },
  cardTitle: {
    margin: 0,
  },
  alert: {
    marginBottom: token.marginMD,
  },
  submitItem: {
    marginBottom: 0,
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: token.marginSM,
    fontSize: token.fontSizeSM,
    color: token.colorTextSecondary,
  },
}))
