import axios from "axios";
import { APIData } from "./Config";

export const GetData = async (topic: string): Promise<any> => {
    try {
        const headers = {'X-API-KEY': `${APIData.API_KEY}`}
        const URL = `${APIData.BASE_URL}/latest_headlines?topic=${topic}&countries=US`;
        const res = await axios.get(URL, {
            headers
        });

        if (res.status !== 200) {
            throw new Error('Something Went Wrong')
        }
        const data = res.data
        return data;
    } catch (error) {
        throw error
    }
}