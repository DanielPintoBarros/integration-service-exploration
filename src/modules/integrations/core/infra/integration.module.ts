import { Module } from '@nestjs/common';
import { IntegrationRegistry } from '@modules/integrations/core/application/registry/integration.registry';
import { IntegrationController } from '@modules/integrations/controllers/integration.controller';
import { DiscoveryModule } from '@nestjs/core';
import { ExecuteIntegrationUseCase } from '@modules/integrations/core/application/usecases/execute-integration.usecase';
import { SillyModule } from '@modules/integrations/providers/silly/silly.module';
import { ZipcodeModule } from '@modules/integrations/providers/zipcode/zipcode.module';
import { ForbiddenModule } from '@modules/integrations/providers/forbidden/forbidden.module';
import { IntegrationsInfoUseCase } from '@modules/integrations/core/application/usecases/integrations-info.usecase';

@Module({
  imports: [DiscoveryModule, SillyModule, ZipcodeModule, ForbiddenModule],
  providers: [
    IntegrationRegistry,
    ExecuteIntegrationUseCase,
    IntegrationsInfoUseCase,
  ],
  exports: [IntegrationRegistry],
  controllers: [IntegrationController],
})
export class IntegrationModule {}
