'use client';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import fetchOrders from '@/services/ordersService';
import OrdersReducer from '@/reducers/ordersReducer';
import DriversReducer from '@/reducers/driversReducer';
import fetchDrivers from '@/services/driversService';
import { Order } from '@/types/order';

import GoogleMapComponent from '../googleMap/GoogleMap';
import styles from './Main.module.scss';
import SideNav from '../sidenav/SideNav';
import Table from '../table/Table';

const Main = () => {
    const [ordersState, ordersDispatch] = useReducer(OrdersReducer, { orders: [], error: undefined });
    const [driversState, driversDispatch] = useReducer(DriversReducer, { drivers: [], error: undefined });

    const ordersRefs = useRef<(HTMLTableRowElement | null)[]>([]);
    const driversRefs = useRef<(HTMLTableRowElement | null)[]>([]);

    const icons = ['orders', 'drivers', 'returns', 'warehouses', 'reports', 'inboundPutway', 'RTV', 'stockTake'];

    const scrollTo = (index: number, position: { lat: number; lng: number }) => {
        let ref;
        let elemFound = ordersState.orders.find(
            (order: Order) => order.delivery_address.lat == position.lat && order.delivery_address.lng == position.lng,
        );

        ref = elemFound ? ordersRefs.current : driversRefs.current;
        console.log(ref);

        ref[index]?.scrollIntoView({ behavior: 'smooth' });
        ref.forEach((element) => {
            element!.style.backgroundColor = '';
        });
        ref[index]!.style.backgroundColor = '#e9e9e9';
    };

    const loadOrders = useCallback(async () => {
        try {
            const orders = await fetchOrders();
            if (orders.length > 0) {
                ordersDispatch({ type: 'setOrders', payload: orders });
            } else {
                ordersDispatch({ type: 'error', payload: 'Cannot get orders' });
            }
        } catch {
            ordersDispatch({ type: 'error', payload: 'Cannot get orders' });
        }
    }, []);

    const loadDrivers = useCallback(async () => {
        try {
            const drivers = await fetchDrivers();
            if (drivers.length > 0) {
                driversDispatch({ type: 'setDrivers', payload: drivers });
            } else {
                driversDispatch({ type: 'error', payload: 'Cannot get drivers' });
            }
        } catch {
            driversDispatch({ type: 'error', payload: 'Cannot get drivers' });
        }
    }, []);

    const ordersCalc = useMemo(() => {
        const ordersNum = ordersState.orders.length;
        const driverssNum = driversState.drivers.length;
        return ordersNum / driverssNum;
    }, [ordersState, driversState]);

    useEffect(() => {
        loadDrivers();
        loadOrders();

        const interval = setInterval(() => {
            console.log('calling apis again');
            loadDrivers();
            loadOrders();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.sideNav}>
                <SideNav iconsNames={icons} />
            </div>
            <div className={styles.core}>
                <p className={styles.header}>Orders</p>

                <h3 className={styles.header}>Live Orders/Drivers</h3>

                {ordersState.orders.length ? (
                    <GoogleMapComponent
                        orders={ordersState.orders}
                        drivers={driversState.drivers}
                        scrollTo={scrollTo}
                    />
                ) : (
                    <div>Google map is loading</div>
                )}
                <div className={styles.ordersDriversContainer}>
                    <Table
                        headerName={'Orders'}
                        columnNames={['Order Number', 'Status', 'Contact', 'Estimated Pickup']}
                        tableData={ordersState.orders}
                        refs={ordersRefs}
                        ordersCalc={0}
                        
                    />
                    <Table
                        headerName={'Drivers'}
                        columnNames={['', 'Driver Name', 'Status', 'Vehicle', 'Distance']}
                        tableData={driversState.drivers}
                        refs={driversRefs}
                        ordersCalc={ordersCalc}
                    />
                </div>
            </div>
        </main>
    );
};
export default Main;
