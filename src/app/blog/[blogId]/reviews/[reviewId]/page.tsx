'use client';
import { useParams } from 'next/navigation';
import styles from '../../../../page.module.css';

export default function Index() {
  const params = useParams();
  console.log('🚀CHECK  params =', params);

  return (
    <main className={styles.main}>
      <h1>Review Page Detail ID = {params.reviewId}</h1>
    </main>
  );
}
