import React from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { Order } from '@/types/order';
import { APIKey } from '@/constants';
import { Driver } from '@/types/driver';

import GoogleMapMarker from '../googleMapMarker/GoogleMapMarker';

const containerStyle = {
    width: '100%',
    height: '400px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '1%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
};

const GoogleMapComponent = ({
    orders,
    drivers,
    scrollTo,
}: {
    orders: Order[];
    drivers: Driver[];
    scrollTo: (index: number, position: { lat: number; lng: number }) => void;
}) => {
    return (
        <LoadScript googleMapsApiKey={APIKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={orders[0].delivery_address} zoom={14}>
                {orders.map((order, index) => (
                    <GoogleMapMarker
                        key={index + 'order2'}
                        index={index}
                        markerType="order"
                        scrollTo={scrollTo}
                        position={{ lat: order.delivery_address.lat, lng: order.delivery_address.lng }}
                    />
                ))}

                {drivers.map((driver, index) => (
                    <GoogleMapMarker
                        key={index + 'warehouse2'}
                        index={index}
                        markerType="warehouse"
                        scrollTo={() => {}}
                        position={{ lat: driver.warehouse_latitude, lng: driver.warehouse_longitude }}
                    />
                ))}

                {drivers.map((driver, index) => (
                    <GoogleMapMarker
                        key={index + 'driver2'}
                        index={index}
                        markerType={driver.vehicle_type_code}
                        scrollTo={scrollTo}
                        position={{ lat: driver.waiting_loc_latitude, lng: driver.waiting_loc_longitude }}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};
export default GoogleMapComponent;
