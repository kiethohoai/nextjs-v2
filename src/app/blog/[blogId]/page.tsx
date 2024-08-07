'use client';
import { useParams } from 'next/navigation';
import styles from '../../page.module.css';

export default function Index() {
  const param = useParams();

  return (
    <main className={styles.main}>
      <h1>Blog Page Detail {param.blogId}</h1>
    </main>
  );
}
