import { BaseURL } from "@/constants";

const fetchDrivers = async () => {

    const response = await fetch(BaseURL+ "/drivers");

    if(!response.ok){
        console.error("Cannot fetch the drivers data");
    }

    const drivers = await response.json();

    return drivers;
}
export default fetchDrivers;
