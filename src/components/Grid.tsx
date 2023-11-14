'use client'

import React from 'react';
import { GridItemProps } from '@/models/hanabiTypes';
import styles from '@/styles/grid.module.css';
import useKeyboardMovement from "@/hooks/useKeyboardMovement";

// Grid Item Component.
const GridItem: React.FC<GridItemProps> = ({ x, y, isCursor }) => (
    <div
        className={`${styles.item} ${isCursor ? styles.cursor : ''}`}
        data-x={x}
        data-y={y}
    >
        {isCursor ? '✚' : '・'}
    </div>
);

// Grid Component.
const Grid = () => {
    const { x, y } = useKeyboardMovement();
    const rows = 50;
    const columns = 80;
    const gridItems = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            // Check if the current GridItem should be the cursor.
            const isCursor = x === col && y === row;
            gridItems.push(
                <GridItem
                    key={`item-${col}-${row}`}
                    x={col}
                    y={row}
                    isCursor={isCursor}
                />
            );
        }
    }

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>{gridItems}</div>
        </div>
    );
};

export default Grid;
