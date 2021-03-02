import { get } from "./utils.service";

export const getIpGeolocation = async () => {
    const res = await get(`/geolocation`);
    return await res.json();
};