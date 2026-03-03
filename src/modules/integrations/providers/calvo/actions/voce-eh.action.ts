import { Injectable } from '@nestjs/common';

@Injectable()
export class VoceEhAction {
  actionName = 'voce-eh';
  async execute(): Promise<any> {
    return `Você é calvo!`;
  }
}
