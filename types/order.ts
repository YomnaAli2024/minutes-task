// types/order.ts
export type DeliveryAddress = {
    lat: number;
    lng: number;
    city: string;
    address: string;
    version: number;
    contact_name: string;
    country_code: string;
    customer_code: string;
    contact_phone_number: string;
  }

  export type Order  = {
    order_nr: string;
    is_cancellation_requested: number;
    mp_code: string;
    order_status: string;
    awb_nr: string | null;
    delivery_address: DeliveryAddress;
    estimated_pickup_at: string;
    estimated_delivery_at: string | null;
    timezone: string;
    country_code: string;
    id_delivery_job: string | null;
    is_cancelled: number;
    delivery_job_line_status: string | null;
    dropoff_delivery_job_line_status: string | null;
    warehouse_code: string;
    is_batched: number;
    is_with_associate_driver: number;
    has_customization: number;
    is_gift_bag_required: number;
    is_heavy_order: number;
    is_delivery_code_required: number;
    is_id_capture_required: number;
    order_volume: number;
    order_weight: number;
    order_type: string | null;
    dropoff_zone_code: string | null;
    is_hll_delivery: number;
    delivery_tags: string[];
    recommended_mot_code: string;
    bikes_ratio: number;
    batch_group_name: string | null;
    batch_recommended_orders: string | null;
    batch_orders: string | null;
  }
