import { Injectable } from '@nestjs/common';

@Injectable()
export class VoceNaoEhAction {
  actionName = 'voce-nao-eh';
  async execute(payload: { name: string }): Promise<any> {
    return `${payload.name}, você não é calvo!`;
  }
}
