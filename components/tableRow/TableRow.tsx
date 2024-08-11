/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react';

import { Row } from '@/types/tableRow';

import styles from './TableRow.module.scss';

const TableRow = forwardRef<HTMLTableRowElement, { rowData: Row }>(({ rowData }, ref) => {
    const haversineDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
        const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

        const R = 6371; // Radius of the Earth in kilometers

        const dLat = toRadians(lat2 - lat1);
        const dLng = toRadians(lng2 - lng1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = R * c; // Distance in kilometers
        return distance.toFixed(2);
    };
    const distance = useMemo(() => {
        if (rowData.distance?.driverLoc.lat) {
            return haversineDistance(
                rowData.distance.driverLoc.lat,
                rowData.distance.driverLoc.lng,
                rowData.distance.warehouse.lat,
                rowData.distance.warehouse.lng,
            );
        }
        return 0;
    }, [rowData]);

    const statusStyle = {
        ready: { backgroundColor: 'rgba(0, 128, 0, 0.15)', color: 'green' },
        busy: { backgroundColor: 'rgba(128, 13, 0, 0.15)', color: 'red' },
        scanning: { backgroundColor: '#125b9a3e', color: '#125b9a' },
        created: { backgroundColor: '#125b9a3e', color: '#125b9a' },
    };

    return (
        <tr ref={ref}>
            {Object.keys(rowData).map((key) => {
                if (rowData[key] !== undefined && rowData[key] !== null) {
                    if (key === 'distance' && distance == 0) {
                        return null; // Skip rendering
                    }

                    return (
                        <td key={key}>
                            {key === 'icon' ? (
                                <img
                                    src={rowData[key] === 'car' ? '/icons/car.svg' : '/icons/motorcycle.svg'}
                                    alt={rowData[key]}
                                />
                            ) : key === 'driverStatus' || key === 'orderStatus' ? (
                                <p style={statusStyle[rowData[key]]} className={styles.status}>
                                    {rowData[key]}
                                </p>
                            ) : key === 'distance' ? (
                                `${distance} KM`
                            ) : (
                                rowData[key]
                            )}
                        </td>
                    );
                }
                return null; // Skip rendering if the value is undefined or null
            })}
        </tr>
    );
});
export default TableRow;
