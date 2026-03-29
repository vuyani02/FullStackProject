import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  navbar: css`
    height: 60px;
    background: #ffffff;
    border-bottom: 1px solid #f3f4f6;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  `,
  logo: css`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  `,
  logoText: css`
    font-size: 17px;
    font-weight: 800;
    letter-spacing: -0.5px;

    .repo { color: #4f46e5; }
    .guardian { color: #111827; }
  `,
  nav: css`
    display: flex;
    align-items: center;
    gap: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  navLink: css`
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
    text-decoration: none;
    transition: background 0.15s, color 0.15s;

    &:hover {
      background: #f9fafb;
      color: #111827;
    }

    &.active {
      background: #eef2ff;
      color: #4f46e5;
    }
  `,
  right: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  logoutBtn: css`
    color: #9ca3af !important;
    font-size: 14px !important;
  `,
}))
