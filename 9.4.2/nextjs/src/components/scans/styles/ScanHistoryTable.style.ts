import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  repoName: css`
    font-weight: 600;
    font-size: 13px;
    color: #111827;
  `,
  owner: css`
    font-size: 12px;
    color: #9ca3af;
  `,
  scoreGreen: css`color: #10b981; font-weight: 700;`,
  scoreAmber: css`color: #f59e0b; font-weight: 700;`,
  scoreRed:   css`color: #ef4444; font-weight: 700;`,
  scorePending: css`color: #9ca3af;`,
  viewBtn: css`
    border-radius: 8px;
  `,
  toolbar: css`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 16px 12px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  `,
  searchInput: css`
    flex: 1;
    min-width: 200px;
  `,
  filterSelect: css`
    width: 160px;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
}))
