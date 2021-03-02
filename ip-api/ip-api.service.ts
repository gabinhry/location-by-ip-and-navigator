import { Injectable } from '@nestjs/common';
import * as fetch from "node-fetch";

@Injectable()
export class IpApiService {

    constructor() { }

    async getIpCoords(ip) {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        };
        const res = await fetch(`https://pro.ip-api.com/json/${ip}?key=[ENTER YOUR KEY HERE]`, {
            method: "get",
            headers
        });
        const json = await res.json();
        return {
            latitude: json.lat,
            longitude: json.lon
        }
    }
}
