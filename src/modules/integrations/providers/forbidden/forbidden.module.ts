import { Module } from '@nestjs/common';
import { ForbiddenAction } from '@modules/integrations/providers/forbidden/actions/forbidden.action';
import { ForbiddenService } from '@modules/integrations/providers/forbidden/forbidden.service';

@Module({
  imports: [],
  providers: [
    ForbiddenAction,
    {
      provide: ForbiddenService,
      useFactory: (forbidden: ForbiddenAction) => {
        return new ForbiddenService([forbidden]);
      },
      inject: [ForbiddenAction],
    },
  ],
  exports: [ForbiddenService],
})
export class ForbiddenModule {}
