import { GridProps, GridItemProps } from '@/models/hanabiTypes';
import styles from '@/styles/page.module.css';

// Grid Item Component.
const GridItem: React.FC<GridItemProps> = ({ x, y }) => (
    <div className={styles.item} data-x={x} data-y={y}>
        {`＊`}
    </div>
);

// Function to create grid items.
const createGridItems = (size: number): GridItemProps[] => {
    const items: GridItemProps[] = [];
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            items.push({ x, y });
        }
    }
    return items;
};

// Grid Component.
const Grid: React.FC<GridProps> = ({ gridSize }) => {
    const gridItems: GridItemProps[] = createGridItems(gridSize);

    return (
        <div className={styles.container}>
            {gridItems.map((item) => (
                <GridItem key={`item-${item.x}-${item.y}`} {...item} />
            ))}
        </div>
    );
};

export default Grid;