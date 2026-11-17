import 'server-only'

const clean = (value: string | undefined) => (value ?? '').replace(/\/+$/, '')

export const SIGNATURE_API_URL = clean(process.env.SIGNATURE_API_URL ?? process.env.NEXT_PUBLIC_SIGNATURE_API_URL)
export const SIGNATURE_WAREHOUSE_API_URL = clean(
    process.env.SIGNATURE_WAREHOUSE_API_URL ?? process.env.NEXT_PUBLIC_SIGNATURE_WAREHOUSE_API_URL
)
