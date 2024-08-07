import styles from '../page.module.css';

export default function Index({ params }: { param: any }) {
  console.log('🚀CHECK  params =', params);

  return (
    <main className={styles.main}>
      <h1>Documents Page</h1>
    </main>
  );
}
