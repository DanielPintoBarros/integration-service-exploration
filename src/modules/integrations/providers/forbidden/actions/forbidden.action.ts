import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ForbiddenAction implements IntegrationAction {
  name = 'forbidden';
  label = 'A forbidden action';
  description = 'This is a forbidden action';
  async execute(): Promise<any> {
    return `You should not access this integration service!`;
  }
}
