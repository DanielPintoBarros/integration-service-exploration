import { IntegrationAction } from '@modules/integrations/core/domain/contracts/integration-action.interface';
import { Integration } from '@modules/integrations/core/infra/integration.decorator';
import { Injectable } from '@nestjs/common';
import { BaseIntegrationService } from '@modules/integrations/core/domain/base-integration.service';

const SERVICE_NAME = 'calvo';

@Injectable()
@Integration(SERVICE_NAME)
export class CalvoService extends BaseIntegrationService {
  serviceName = SERVICE_NAME;

  constructor(actions: IntegrationAction[]) {
    super();
    this.registerActions(actions);
  }
}
