import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  label: css`
    display: block;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.85);
  `,
  errorText: css`
    display: block;
    margin-top: 8px;
    color: #ff4d4f;
    font-size: 13px;
  `,
  cancelBtn: css`
    min-width: 80px;
  `,
  scanBtn: css`
    min-width: 80px;
  `,
}))
