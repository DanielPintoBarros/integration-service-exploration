import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { Injectable } from '@nestjs/common';

interface YouAreSillyActionPayload {
  name: string;
}

@Injectable()
export class YouAreSillyAction implements IntegrationAction {
  name = 'send-you-are-silly';
  label = 'You are silly';
  description = 'Returns a funny message saying which person is silly';

  async execute(payload: YouAreSillyActionPayload): Promise<any> {
    const { name } = payload;
    return `Hi ${name}, you are silly!`;
  }
}
