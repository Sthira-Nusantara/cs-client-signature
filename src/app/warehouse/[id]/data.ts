import 'server-only'
import { SIGNATURE_WAREHOUSE_API_URL } from '@/config/config'
import { toSignatureError } from '@/lib/fetch-error'
import { isUuid } from '@/lib/uuid'
import { SignatureWarehouse } from '@/types/signature-warehouse'
import axios from 'axios'

export async function getWarehouseSignature(
    id: unknown
): Promise<SignatureWarehouse | 'invalid_signature' | 'server_error'> {
    if (!isUuid(id)) {
        return 'invalid_signature'
    }

    try {
        const res = await axios.get(`${SIGNATURE_WAREHOUSE_API_URL}/${encodeURIComponent(id)}`, { timeout: 10000 })

        const signature: SignatureWarehouse | undefined = res.data?.data

        if (!signature) {
            return 'invalid_signature'
        }

        return signature
    } catch (error) {
        return toSignatureError(error)
    }
}
