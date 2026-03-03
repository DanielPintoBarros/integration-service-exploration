import { Injectable } from '@nestjs/common';
import { IntegrationRegistry } from '@modules/integrations/core/application/registry/integration.registry';

interface ExecuteIntegrationInput {
  serviceName: string;
  action: string;
  payload: any;
}

@Injectable()
export class ExecuteIntegrationUseCase {
  constructor(private readonly registry: IntegrationRegistry) {}

  async execute(input: ExecuteIntegrationInput) {
    if (!this.registry.has(input.serviceName)) {
      return `Integration service '${input.serviceName}' not found`;
    }

    const service = this.registry.get(input.serviceName);
    return service.execute(input.action, input.payload);
  }
}
