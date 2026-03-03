import { Injectable, NotFoundException } from '@nestjs/common';
import { IntegrationRegistry } from '@modules/integrations/core/application/registry/integration.registry';

@Injectable()
export class IntegrationsInfoUseCase {
  constructor(private readonly registry: IntegrationRegistry) {}

  listIntegrations() {
    const services = this.registry.getAll();
    return services.map((service) => ({
      name: service.serviceName,
      actions: service.getActions().map((action) => ({
        name: action.name,
        label: action.label,
        description: action.description,
      })),
    }));
  }

  listServiceActions(serviceName: string) {
    if (!this.registry.has(serviceName)) {
      throw new NotFoundException(`Service not found: '${serviceName}'`);
    }

    const service = this.registry.get(serviceName);
    return {
      name: service.serviceName,
      actions: service.getActions().map((action) => ({
        name: action.name,
        label: action.label,
        description: action.description,
      })),
    };
  }
}
