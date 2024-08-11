/* eslint-disable css-modules/no-undef-class */
import { MutableRefObject } from 'react';

import { Driver as DriverType } from '@/types/driver';
import { Order as OrderType } from '@/types/order';

import styles from './Table.module.scss';
import TableRow from '../tableRow/TableRow';

const Table = ({
    headerName,
    columnNames,
    tableData,
    refs,
    ordersCalc = 0,
}: {
    headerName: string;
    columnNames: string[];
    tableData: DriverType[] | OrderType[];
    refs: MutableRefObject<(HTMLTableRowElement | null)[]>;
    ordersCalc: number;
}) => {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.label}>
                <div className={styles.side}>
                    <h4>{headerName}</h4>
                    <p>total number : {tableData.length}</p>
                </div>

                {ordersCalc ? (
                    <div className={styles.side}>
                        <p> {ordersCalc} order[s] per driver</p>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>

            {tableData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            {columnNames.map((name) => (
                                <td key={name}>{name}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData: DriverType | OrderType, index) => (
                            <TableRow
                                ref={(ele) => (refs.current[index] = ele)}
                                rowData={{
                                    icon: rowData.vehicle_type_code,
                                    name: rowData.full_name,
                                    driverStatus: rowData.driver_status,
                                    vehicle: rowData.vehicle_name,
                                    distance: {
                                        driverLoc: {
                                            lat: rowData.waiting_loc_latitude,
                                            lng: rowData.waiting_loc_longitude,
                                        },
                                        warehouse: {
                                            lat: rowData.warehouse_latitude,
                                            lng: rowData.warehouse_longitude,
                                        },
                                    },
                                    orderNum: rowData.order_nr,
                                    orderStatus: rowData.order_status,
                                    contact: rowData.delivery_address?.contact_name,
                                    estimatedPickup: rowData.estimated_pickup_at,
                                }}
                                key={index}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className={styles.noDrivers}>No Data available</p>
            )}
        </div>
    );
};
export default Table;
