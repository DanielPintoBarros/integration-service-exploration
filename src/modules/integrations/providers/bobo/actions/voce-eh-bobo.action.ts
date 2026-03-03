import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { Injectable } from '@nestjs/common';

interface VoceEhBoboPayload {
  name: string;
}

@Injectable()
export class VoceEhBoboAction implements IntegrationAction {
  actionName = 'sendYouAreBobo';

  async execute(payload: VoceEhBoboPayload): Promise<any> {
    const { name } = payload;
    return `Oi ${name}, você é bobo!`;
  }
}
