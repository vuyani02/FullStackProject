'use client'

import { Typography } from "antd";
import Link from "next/link";
import { useStyles } from './styles/LandingFooter.style'

const { Text } = Typography;

const FooterShieldIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="footerShieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M16 3L5 7.5V15c0 6.075 4.667 11.742 11 13 6.333-1.258 11-6.925 11-13V7.5L16 3Z"
        fill="url(#footerShieldGrad)"
      />
      <path
        d="M11 16l3.5 3.5L21 12"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LandingFooter = () => {
  const { styles } = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.logo}>
              <FooterShieldIcon />
              <span className={styles.logoText}>RepoGuardian</span>
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

export default LandingFooter
