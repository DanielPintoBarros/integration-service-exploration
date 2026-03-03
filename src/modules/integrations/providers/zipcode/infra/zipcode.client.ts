import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ZipcodeClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://viacep.com.br/ws/',
      timeout: 5000,
    });
  }

  async getAddressByZipcode(zipcode: string): Promise<any> {
    const response = await this.api.get(`${zipcode}/json/`);
    return response.data;
  }
}
