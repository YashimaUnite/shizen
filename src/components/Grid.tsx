import { GridItemProps } from '@/models/hanabiTypes';
import styles from '@/styles/grid.module.css';

// Grid Item Component.
const GridItem: React.FC<GridItemProps> = ({ x, y }) => (
    <div className={styles.item} data-x={x} data-y={y}>
        {`・`}
    </div>
);

// Grid Component.
const Grid = () => {
    const rows = 50;
    const columns = 80;
    const gridItems = [];

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            gridItems.push(<GridItem key={`item-${x}-${y}`} x={x} y={y} />);
        }
    }

    return <div className={styles.containerWrapper}>
                <div className={styles.container}>{gridItems}</div>
        </div>
};

export default Grid;
