import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class CepClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://viacep.com.br/ws/',
      timeout: 5000,
    });
  }

  async getAddressByCep(cep: string): Promise<any> {
    const response = await this.api.get(`${cep}/json/`);
    return response.data;
  }
}
