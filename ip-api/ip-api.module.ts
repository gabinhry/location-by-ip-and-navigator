import { Module } from '@nestjs/common';
import { IpApiService } from './ip-api.service';

@Module({
  providers: [
    IpApiService
  ],
  exports: [
    IpApiService
  ]
})
export class IpApiModule { }
