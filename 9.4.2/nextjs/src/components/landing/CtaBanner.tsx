'use client'

import { Button, Space, Typography } from "antd";
import Link from "next/link";
import { useStyles } from './styles/CtaBanner.style'

const { Title, Paragraph } = Typography;

const CtaBanner = () => {
  const { styles } = useStyles();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Title className={styles.heading}>
          Start scanning your repos today
        </Title>
        <Paragraph className={styles.subheading}>
          Free to use. No credit card required. Get your first compliance report in under a minute.
        </Paragraph>
        <Space size="middle" wrap className={styles.ctaSpace}>
          <Link href="/register">
            <Button size="large" className={styles.primaryBtn}>
              Get Started Free →
            </Button>
          </Link>
          <Link href="/login">
            <Button size="large" className={styles.secondaryBtn}>
              Log in
            </Button>
          </Link>
        </Space>
      </div>
    </section>
  );
}

export default CtaBanner
