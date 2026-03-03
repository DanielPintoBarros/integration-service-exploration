import { Body, Controller, Param, Post } from '@nestjs/common';
import { ExecuteIntegrationUseCase } from '../core/application/usecases/execute-integration.usecase';

@Controller('integrations')
export class IntegrationController {
  constructor(private readonly useCase: ExecuteIntegrationUseCase) {}

  @Post(':service/:action')
  async execute(
    @Param('service') service: string,
    @Param('action') action: string,
    @Body() payload: any,
  ) {
    return this.useCase.execute({
      serviceName: service,
      action,
      payload,
    });
  }
}
