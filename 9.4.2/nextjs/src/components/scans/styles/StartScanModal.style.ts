import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  label: css`
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
  `,
  divider: css`
    color: #9ca3af;
    font-size: 12px;
    margin: 16px 0;
  `,
  errorText: css`
    color: #ef4444;
    font-size: 13px;
    margin-top: 8px;
  `,
}))
