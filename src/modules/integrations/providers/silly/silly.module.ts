import { Module } from '@nestjs/common';
import { YouAreSillyAction } from '@modules/integrations/providers/silly/actions/you-are-silly.action';
import { GreatestSillyAction } from '@modules/integrations/providers/silly/actions/greatest-silly.action';
import { SillyService } from '@modules/integrations/providers/silly/silly.service';

@Module({
  imports: [],
  providers: [
    YouAreSillyAction,
    GreatestSillyAction,
    {
      provide: SillyService,
      useFactory: (
        youAreSilly: YouAreSillyAction,
        greatestSilly: GreatestSillyAction,
      ) => {
        return new SillyService([youAreSilly, greatestSilly]);
      },
      inject: [YouAreSillyAction, GreatestSillyAction],
    },
  ],
  exports: [SillyService],
})
export class SillyModule {}
