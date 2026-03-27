import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ token }) => ({
  page: {
    padding: token.paddingLG,
  },
  actions: {
    marginTop: token.marginLG,
  },
}))
