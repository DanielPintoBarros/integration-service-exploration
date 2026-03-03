import { Module } from '@nestjs/common';
import { IntegrationModule } from '@modules/integrations/core/infra/integration.module';
@Module({
  imports: [IntegrationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
