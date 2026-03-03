import { Module } from '@nestjs/common';
import { VoceEhAction } from '../actions/voce-eh.action';
import { CalvoService } from '../calvo.service';

@Module({
  imports: [],
  providers: [
    VoceEhAction,
    {
      provide: CalvoService,
      useFactory: (voceEh: VoceEhAction) => {
        return new CalvoService([voceEh]);
      },
      inject: [VoceEhAction],
    },
  ],
  exports: [CalvoService],
})
export class CalvoModule {}
