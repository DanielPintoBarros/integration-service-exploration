export interface IntegrationAction {
  actionName: string;
  execute(payload: any): Promise<any>;
}
