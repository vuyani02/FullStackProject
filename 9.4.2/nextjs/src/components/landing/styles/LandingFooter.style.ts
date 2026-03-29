import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  footer: css`
    background: #111827;
    padding: 56px 48px 32px;

    @media (max-width: 768px) {
      padding: 40px 20px 24px;
    }
  `,
  inner: css`
    max-width: 1100px;
    margin: 0 auto;
  `,
  top: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: 768px) {
      flex-direction: column;
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
    color: #ffffff;
  `,
  tagline: css`
    color: rgba(255, 255, 255, 0.45) !important;
    font-size: 14px !important;
    margin-top: 8px !important;
    display: block;
  `,
  linksGroup: css`
    display: flex;
    gap: 64px;
    flex-wrap: wrap;
  `,
  linkCol: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  colLabel: css`
    color: rgba(255, 255, 255, 0.3) !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 4px !important;
  `,
  footerLink: css`
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: #ffffff;
    }
  `,
  bottom: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 28px;
    flex-wrap: wrap;
    gap: 12px;
  `,
  copyright: css`
    color: rgba(255, 255, 255, 0.3) !important;
    font-size: 13px !important;
  `,
  builtWith: css`
    color: rgba(255, 255, 255, 0.3) !important;
    font-size: 13px !important;
  `,
}))
