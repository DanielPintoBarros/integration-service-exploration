import { SetMetadata } from '@nestjs/common';

export const INTEGRATION_METADATA = 'INTEGRATION_METADATA';

export function Integration(name: string) {
  return SetMetadata(INTEGRATION_METADATA, name);
}
