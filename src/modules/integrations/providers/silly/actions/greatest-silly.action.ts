import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GreatestSillyAction implements IntegrationAction {
  name = 'greatest-silly';
  label = 'Greatest Silly';
  description = 'Returns a fun message';

  async execute(): Promise<any> {
    return `You are the greatest silly person!`;
  }
}
