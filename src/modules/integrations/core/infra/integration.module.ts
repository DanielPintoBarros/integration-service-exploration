import { Module } from '@nestjs/common';
import { IntegrationRegistry } from '@modules/integrations/core/application/registry/integration.registry';
import { IntegrationController } from '@modules/integrations/controllers/integration.controller';
import { DiscoveryModule } from '@nestjs/core';
import { ExecuteIntegrationUseCase } from '../application/usecases/execute-integration.usecase';
import { BoboModule } from '@modules/integrations/providers/bobo/infra/bobo.module';
import { CalvoModule } from '@modules/integrations/providers/calvo/infra/calvo.module';
import { CepModule } from '@modules/integrations/providers/cep/infra/cep.module';
import { ProibidoModule } from '@modules/integrations/providers/proibido/infra/proibido.module';

@Module({
  imports: [
    DiscoveryModule,
    BoboModule,
    CalvoModule,
    CepModule,
    ProibidoModule,
  ],
  providers: [IntegrationRegistry, ExecuteIntegrationUseCase],
  exports: [IntegrationRegistry],
  controllers: [IntegrationController],
})
export class IntegrationModule {}
