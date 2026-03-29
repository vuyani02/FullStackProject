import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css }) => ({
  section: css`
    min-height: 100vh;
    padding-top: calc(80px + 64px);
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 48px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -200px;
      left: 50%;
      transform: translateX(-50%);
      width: 900px;
      height: 600px;
      background: radial-gradient(ellipse at center, rgba(79, 70, 229, 0.08) 0%, transparent 70%);
      pointer-events: none;
    }

    @media (max-width: 768px) {
      padding: 120px 20px 64px;
    }
  `,
  badge: css`
    background: #eef2ff;
    color: #4f46e5;
    border: 1px solid #c7d2fe;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 14px;
    margin-bottom: 24px;
    display: inline-block;
  `,
  headline: css`
    font-size: clamp(42px, 6vw, 72px) !important;
    font-weight: 900 !important;
    line-height: 1.1 !important;
    color: #111827 !important;
    letter-spacing: -2px !important;
    margin-bottom: 24px !important;
  `,
  accent: css`
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `,
  subtitle: css`
    font-size: 20px !important;
    color: #6b7280 !important;
    max-width: 600px;
    margin: 0 auto 40px !important;
    line-height: 1.7 !important;
  `,
  ctaSpace: css`
    justify-content: center;
  `,
  primaryBtn: css`
    background: #4f46e5 !important;
    border-color: #4f46e5 !important;
    height: 52px !important;
    padding: 0 32px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    border-radius: 10px !important;
  `,
  secondaryBtn: css`
    height: 52px !important;
    padding: 0 32px !important;
    font-size: 16px !important;
    border-radius: 10px !important;
    border-color: #e5e7eb !important;
    color: #374151 !important;
  `,
  statsRow: css`
    display: flex;
    justify-content: center;
    gap: 48px;
    margin-top: 64px;
    padding-top: 48px;
    border-top: 1px solid #f3f4f6;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  `,
  stat: css`
    text-align: center;
  `,
  statNumber: css`
    font-size: 32px;
    font-weight: 800;
    color: #4f46e5;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  `,
  statLabel: css`
    font-size: 14px;
    color: #9ca3af;
    margin-top: 4px;
  `,
}))
