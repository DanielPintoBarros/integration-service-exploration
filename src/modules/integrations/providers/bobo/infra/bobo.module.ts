import { Module } from '@nestjs/common';
import { VoceEhBoboAction } from '../actions/voce-eh-bobo.action';
import { BobaoAction } from '../actions/bobao.action';
import { BoboService } from '../bobo.service';

@Module({
  imports: [],
  providers: [
    VoceEhBoboAction,
    BobaoAction,
    {
      provide: BoboService,
      useFactory: (voceEhBobo: VoceEhBoboAction, bobao: BobaoAction) => {
        return new BoboService([voceEhBobo, bobao]);
      },
      inject: [VoceEhBoboAction, BobaoAction],
    },
  ],
  exports: [BoboService],
})
export class BoboModule {}
