import Grid from './Components/Grid';
import styles from '@/styles/page.module.css';

// Define Grid size.
const gridSize = 100;

// Main Page Component.
const Page = () => {
  return (
      <div className={styles.page}>
        <Grid gridSize={gridSize} />
      </div>
  );
};

export default Page;