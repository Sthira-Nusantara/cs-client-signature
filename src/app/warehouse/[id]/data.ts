'use server'
import { SIGNATURE_WAREHOUSE_API_URL } from '@/config/config'
import { SignatureWarehouse } from '@/types/signature-warehouse'
import axios, { AxiosError } from 'axios'

export async function getWarehouseSignature(id: any): Promise<SignatureWarehouse | 'invalid_signature' | 'server_error'> {
    try {
        if (typeof id !== 'string') {
            return 'invalid_signature'
        }

        const res = await axios.get(`${SIGNATURE_WAREHOUSE_API_URL}/${id}`)

        const signature: SignatureWarehouse = res.data?.data

        if (!signature || signature.status !== 'APPROVED') {
            return 'invalid_signature'
        }

        return signature
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.code === 'ENOTFOUND' || (error.response?.status && error.response?.status >= 500)) {
                return 'server_error'
            }
        }
        return 'invalid_signature'
    }
}
