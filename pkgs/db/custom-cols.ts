import { customType } from 'drizzle-orm/pg-core'

export const customJsonb = <TData>(name: string) =>
  customType<{ data: TData; driverData: string }>({
    dataType() {
      return 'jsonb'
    },
    // @ts-expect-error
    toDriver(value: TData) {
      return value
    },
  })(name)
