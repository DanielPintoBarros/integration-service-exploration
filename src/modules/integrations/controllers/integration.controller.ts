import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExecuteIntegrationUseCase } from '@modules/integrations/core/application/usecases/execute-integration.usecase';
import { IntegrationsInfoUseCase } from '@modules/integrations/core/application/usecases/integrations-info.usecase';

@Controller('integrations')
export class IntegrationController {
  constructor(
    private readonly executeIntegrationUseCase: ExecuteIntegrationUseCase,
    private readonly integrationsInfoUseCase: IntegrationsInfoUseCase,
  ) {}

  @Get('services')
  async listServices() {
    return this.integrationsInfoUseCase.listIntegrations();
  }

  @Get(':service/actions')
  async listServiceActions(@Param('service') service: string) {
    return this.integrationsInfoUseCase.listServiceActions(service);
  }

  @Post(':service/:action')
  async execute(
    @Param('service') service: string,
    @Param('action') action: string,
    @Body() payload: any,
  ) {
    return this.executeIntegrationUseCase.execute({
      serviceName: service,
      action,
      payload,
    });
  }
}
