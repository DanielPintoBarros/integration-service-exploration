import { Injectable } from '@nestjs/common';
import { ZipcodeClient } from '@modules/integrations/providers/zipcode/infra/zipcode.client';
import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';

@Injectable()
export class GetAddressAction implements IntegrationAction {
  name = 'get-address';
  label = 'Resolve Address';
  description = 'Returns address by zipcode';

  constructor(private readonly zipcodeClient: ZipcodeClient) {}

  async execute(payload: { zipcode: string }): Promise<any> {
    const { zipcode } = payload;
    return this.zipcodeClient.getAddressByZipcode(zipcode);
  }
}
