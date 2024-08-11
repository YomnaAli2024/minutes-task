import { DriversState, Action } from '@/types/driversState';

// const initialState: DriversState = {
//   drivers: [],
//   error: undefined,
// };

const DriversReducer = (state: DriversState, action: Action): DriversState => {
    switch (action.type) {
        case 'setDrivers':
            return { ...state, drivers: action.payload };
        case 'error':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default DriversReducer;
