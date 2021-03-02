import { Module } from '@nestjs/common';
import { IpApiModule } from '../../shared/ip-api/ip-api.module';
import { GeolocationController } from './geolocation.controller';

@Module({
  imports: [
    IpApiModule
  ],
  controllers: [
    GeolocationController
  ]
})
export class GeolocationModule { }
