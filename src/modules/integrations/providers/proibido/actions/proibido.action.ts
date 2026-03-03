import { Injectable } from '@nestjs/common';

@Injectable()
export class ProibidoAction {
  actionName = 'proibido';
  async execute(): Promise<any> {
    return `Você não deveria ver isso!`;
  }
}
