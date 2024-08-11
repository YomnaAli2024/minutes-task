import { OrdersState, Action } from '@/types/ordersState';

const OrdersReducer = (state: OrdersState , action: Action): OrdersState => {
    switch (action.type) {
        case 'setOrders':
            return { ...state, orders: action.payload };
        case 'error':
            return { ...state, error: 'cannot load orders' };
        default:
            return state;
    }
};
export default OrdersReducer;
