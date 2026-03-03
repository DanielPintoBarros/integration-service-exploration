import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { IntegrationService } from '@modules/integrations/core/domain/contracts/integration-service.interface';
import { DiscoveryService, Reflector } from '@nestjs/core';
import { INTEGRATION_SERVICE_METADATA } from '@modules/integrations/core/infra/integration.decorator';

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
        INTEGRATION_SERVICE_METADATA,
        instance.constructor,
      );

      if (!metadata) continue;

      this.register(metadata, instance);
    }
  }

  register(serviceName: string, service: IntegrationService) {
    this.services.set(serviceName, service);
  }

  has(serviceName: string): boolean {
    return this.services.has(serviceName);
  }

  get(serviceName: string): IntegrationService {
    if (!this.services.has(serviceName)) {
      throw new NotFoundException(`Integration ${serviceName} not registered`);
    }
    const service = this.services.get(serviceName) as IntegrationService;
    return service;
  }

  getAll(): IntegrationService[] {
    return Array.from(this.services.values());
  }
}
