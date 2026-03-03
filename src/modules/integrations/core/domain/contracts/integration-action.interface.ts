export interface IntegrationAction {
  name: string;
  label: string;
  description: string;
  execute(payload: any): Promise<any>;
}
