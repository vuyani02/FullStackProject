import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  section: css`
    padding: 100px 48px;
    background: #ffffff;
  `,
  inner: css`
    max-width: 800px;
    margin: 0 auto;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    border-radius: 24px;
    padding: 72px 64px;
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -80px;
      right: -80px;
      width: 300px;
      height: 300px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -60px;
      left: -60px;
      width: 240px;
      height: 240px;
      background: rgba(255, 255, 255, 0.04);
      border-radius: 50%;
    }

    @media (max-width: 768px) {
      padding: 48px 32px;
    }
  `,
  heading: css`
    font-size: clamp(28px, 4vw, 44px) !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    letter-spacing: -1px !important;
    margin-bottom: 16px !important;

    @media (max-width: 768px) {
      font-size: 26px !important;
    }
  `,
  subheading: css`
    font-size: 18px !important;
    color: rgba(255, 255, 255, 0.8) !important;
    margin-bottom: 40px !important;
    line-height: 1.7 !important;
  `,
  ctaSpace: css`
    justify-content: center;
  `,
  primaryBtn: css`
    background: #ffffff !important;
    color: #4f46e5 !important;
    border-color: #ffffff !important;
    height: 52px !important;
    padding: 0 32px !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    border-radius: 10px !important;

    &:hover {
      opacity: 0.92 !important;
    }
  `,
  secondaryBtn: css`
    background: transparent !important;
    color: #ffffff !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
    height: 52px !important;
    padding: 0 32px !important;
    font-size: 16px !important;
    border-radius: 10px !important;

    &:hover {
      border-color: #ffffff !important;
      background: rgba(255, 255, 255, 0.08) !important;
    }
  `,
}))
