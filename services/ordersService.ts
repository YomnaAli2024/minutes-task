import { BaseURL } from "@/constants"

const fetchOrders = async ()=>{
    const response = await fetch(BaseURL+"/orders");

    if(!response.ok){
        console.error("cannot load orders")
    }

    const orders = await response.json();

    return orders;

}
export default fetchOrders;
