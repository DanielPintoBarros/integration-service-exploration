import { Module } from '@nestjs/common';
import { GetAddressAction } from '@modules/integrations/providers/zipcode/actions/get-address.action';
import { ZipcodeService } from '@modules/integrations/providers/zipcode/zipcode.service';
import { ZipcodeClient } from '@modules/integrations/providers/zipcode/infra/zipcode.client';

@Module({
  imports: [],
  providers: [
    GetAddressAction,
    ZipcodeClient,
    {
      provide: ZipcodeService,
      useFactory: (getAddressAction: GetAddressAction) => {
        return new ZipcodeService([getAddressAction]);
      },
      inject: [GetAddressAction],
    },
  ],
  exports: [ZipcodeService],
})
export class ZipcodeModule {}
