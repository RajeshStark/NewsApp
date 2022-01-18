import axios from "axios";
import { APIData } from "./Config";

export const GetData = async (): Promise<any> => {
    try {
        const URL = `${APIData.BASE_URL}top-headlines?country=us&${APIData.API_KEY}`;
        const res = await axios.get(URL);

        if (res.status !== 200) {
            throw new Error('Something Went Wrong')
        }
        const data = res.data
        return data;
    } catch (error) {
        throw error
    }
}