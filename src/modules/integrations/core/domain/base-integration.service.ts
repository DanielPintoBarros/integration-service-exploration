import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { IntegrationService } from '@modules/integrations/core/domain/contracts/integration-service.interface';
import { NotFoundException } from '@nestjs/common';

export abstract class BaseIntegrationService implements IntegrationService {
  abstract serviceName: string;

  protected actions = new Map<string, IntegrationAction>();

  protected registerActions(actions: IntegrationAction[]) {
    actions.forEach((action) => {
      this.actions.set(action.name, action);
    });
  }

  getActions(): { name: string; label: string; description: string }[] {
    return Array.from(this.actions.values());
  }

  async execute(action: string, payload: any): Promise<any> {
    if (!this.actions.has(action)) {
      throw new NotFoundException(
        `Action '${action}' not supported in '${this.serviceName}'`,
      );
    }

    const actionHandler = this.actions.get(action) as IntegrationAction;
    return actionHandler.execute(payload);
  }
}
