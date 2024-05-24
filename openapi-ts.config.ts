import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  client: '@hey-api/client-fetch',
  input:
    'https://stoplight.io/api/v1/projects/spacetraders/spacetraders/nodes/reference/SpaceTraders.json?snapshotType=http_service&deref=optimizedBundle',
  output: 'pkgs/st-ts-client',
  schemas: false,
})
