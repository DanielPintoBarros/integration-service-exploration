import { Injectable } from '@nestjs/common';
import { CepClient } from '../infra/cep.client';

@Injectable()
export class GetAddressAction {
  actionName = 'getAddress';

  constructor(private readonly cepClient: CepClient) {}

  async execute(payload: { cep: string }): Promise<any> {
    const { cep } = payload;
    return this.cepClient.getAddressByCep(cep);
  }
}
