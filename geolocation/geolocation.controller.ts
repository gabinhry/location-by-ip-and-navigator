import { Controller, Get } from '@nestjs/common';
import { IpAddress } from '../../shared/decorators/ip-adresse.decorator';
import { IpApiService } from '../../shared/ip-api/ip-api.service';

@Controller('geolocation')
export class GeolocationController {

    constructor(private ipApiService: IpApiService) { }

    @Get()
    async getNearby(@IpAddress() ipAddress) {
        let latitude = 0;
        let longitude = 0;
        if (ipAddress) {
            const coords = await this.ipApiService.getIpCoords(ipAddress);
            if (coords.latitude && coords.longitude) {
                latitude = coords.latitude;
                longitude = coords.longitude;
            }
        }
        return {
            ip: ipAddress,
            latitude,
            longitude
        }
    }
}
