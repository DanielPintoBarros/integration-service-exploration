import { SetMetadata } from '@nestjs/common';

export const INTEGRATION_SERVICE_METADATA = 'INTEGRATION_SERVICE_METADATA';

export function Integration(name: string) {
  return SetMetadata(INTEGRATION_SERVICE_METADATA, name);
}
