export type Row = {
    icon?: string,
    name?: string,
    status?: string,
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
