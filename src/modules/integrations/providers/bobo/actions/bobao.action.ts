import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BobaoAction implements IntegrationAction {
  actionName = 'bobao';

  async execute(): Promise<any> {
    return `Bobão!`;
  }
}
