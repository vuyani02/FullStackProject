'use client'

import { Typography } from "antd";
import { createStyles } from "antd-style";
import Link from "next/link";

const { Text } = Typography;

const useStyles = createStyles(({ css }) => ({
  footer: css`
    background: #111827;
    padding: 56px 48px 32px;
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
  `,
  logo: css`
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  dot: css`
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    display: inline-block;
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
}));

export default function LandingFooter() {
  const { styles } = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.logo}>
              <span className={styles.dot} />
              RepoGuardian
            </Link>
            <Text className={styles.tagline}>AI-powered repository compliance</Text>
          </div>

          <div className={styles.linksGroup}>
            <div className={styles.linkCol}>
              <Text className={styles.colLabel}>Product</Text>
              <Link href="/register" className={styles.footerLink}>Get Started</Link>
              <Link href="/login" className={styles.footerLink}>Log In</Link>
            </div>
            <div className={styles.linkCol}>
              <Text className={styles.colLabel}>Compliance</Text>
              <span className={styles.footerLink}>Documentation Rules</span>
              <span className={styles.footerLink}>Security Rules</span>
              <span className={styles.footerLink}>CI/CD Rules</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <Text className={styles.copyright}>
            © {new Date().getFullYear()} RepoGuardian. All rights reserved.
          </Text>
          <Text className={styles.builtWith}>
            Built with Next.js · Powered by Gemini AI
          </Text>
        </div>
      </div>
    </footer>
  );
}
