export type Driver  = {
    id_user: number;
    full_name: string;
    da_user_code: string;
    driver_status: string;
    dropoff_zone_code: string | null;
    is_called_up: number;
    warehouse_latitude: number;
    warehouse_longitude: number;
    waiting_loc_latitude: number;
    waiting_loc_longitude: number;
    timezone: string;
    vehicle_code: string;
    vehicle_name: string;
    vehicle_type_code: string;
    vehicle_type_description: string;
    queue_position: number;
    orders: string[];
    shipments: string[];
    queue: {
      position: number;
      top_x_value: number;
      should_show_requeue_reason: number;
      requeue_reason: string | null;
      is_queue_enabled: boolean;
    };
    eta: number;
    eta2: string;
    sort_key: [number, number, string];
    can_callup: number;
    estimated_ready_at: number;
}
