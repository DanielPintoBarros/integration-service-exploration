import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { IntegrationService } from '@modules/integrations/core/domain/contracts/integration-service.interface';

export abstract class BaseIntegrationService implements IntegrationService {
  abstract serviceName: string;

  protected actions = new Map<string, IntegrationAction>();

  protected registerActions(actions: IntegrationAction[]) {
    actions.forEach((action) => {
      this.actions.set(action.actionName, action);
    });
  }

  async execute(action: string, payload: any): Promise<any> {
    if (!this.actions.has(action)) {
      return `Action '${action}' not supported in '${this.serviceName}'`;
    }

    const actionHandler = this.actions.get(action) as IntegrationAction;
    return actionHandler.execute(payload);
  }
}
