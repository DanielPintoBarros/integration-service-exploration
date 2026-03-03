import { Injectable, OnModuleInit } from '@nestjs/common';
import { IntegrationService } from '@modules/integrations/core/domain/contracts/integration-service.interface';
import { IntegrationError } from '@modules/integrations/core/domain/errors/integration-error';
import { DiscoveryService, Reflector } from '@nestjs/core';
import { INTEGRATION_METADATA } from '@modules/integrations/core/infra/integration.decorator';

@Injectable()
export class IntegrationRegistry implements OnModuleInit {
  private readonly services = new Map<string, IntegrationService>();

  constructor(
    private readonly discovery: DiscoveryService,
    private readonly reflector: Reflector,
  ) {}

  onModuleInit() {
    const providers = this.discovery.getProviders();

    for (const wrapper of providers) {
      const { instance } = wrapper;

      if (!instance) continue;

      const metadata = this.reflector.get<string>(
        INTEGRATION_METADATA,
        instance.constructor,
      );

      if (!metadata) continue;

      this.register(instance);
    }
  }

  register(service: IntegrationService) {
    this.services.set(service.serviceName, service);
  }

  has(serviceName: string): boolean {
    return this.services.has(serviceName);
  }

  get(serviceName: string): IntegrationService {
    const service = this.services.get(serviceName);

    if (!service) {
      throw new IntegrationError(`Integration ${serviceName} not registered`);
    }

    return service;
  }
}
