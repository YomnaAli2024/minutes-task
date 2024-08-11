export type Row = {
    [key: string]: any;
    icon?: string,
    name?: string,
    driverStatus?: string,
    orderStatus?: string,
    vehicle?: string,
    orderNum?: string,
    estimatedPickup?: string,
    contact?:string,
    distance?: {
        driverLoc: {
            lat: number,
            lng: number,
        },
        warehouse: {
            lat: number,
            lng: number,
        },
    },
}
export default Row;
