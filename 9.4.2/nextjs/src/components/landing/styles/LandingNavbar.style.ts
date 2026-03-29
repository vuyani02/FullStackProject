import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  navbar: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #f0f0f0;
    padding: 0 48px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 0 20px;
    }
  `,
  logo: css`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  logoText: css`
    font-size: 19px;
    font-weight: 800;
    letter-spacing: -0.5px;
    line-height: 1;

    .repo {
      color: #4f46e5;
    }

    .guardian {
      color: #111827;
    }
  `,
  getStartedBtn: css`
    background: #4f46e5 !important;
    border-color: #4f46e5 !important;
  `,
}))
