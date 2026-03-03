export interface IntegrationService {
  serviceName: string;
  execute(action: string, payload: any): Promise<any>;
}
