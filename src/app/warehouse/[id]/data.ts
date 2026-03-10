import { SIGNATURE_WAREHOUSE_API_URL } from '@/config/config'
import { SignatureWarehouse } from '@/types/signature-warehouse'
import axios, { AxiosError } from 'axios'

export async function getWarehouseSignature(
    id: any
): Promise<SignatureWarehouse | 'invalid_signature' | 'server_error'> {
    try {
        if (typeof id !== 'string') {
            return 'invalid_signature'
        }

        const res = await axios.get(`${SIGNATURE_WAREHOUSE_API_URL}/${id}`)

        const signature: SignatureWarehouse = res.data?.data

        if (!signature) {
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

export function translateStatus(status: string) {
    switch (status.toLowerCase()) {
        case 'approved':
            return 'Disetujui'
        case 'rejected':
            return 'Ditolak'
        case 'pending':
            return 'Menunggu Persetujuan'
    }
}

export function documentTranslateStatus(status: string) {
    switch (status.toUpperCase()) {
        case 'NEW':
            return 'Baru'
        case 'WAITING_APPROVAL':
            return 'Menunggu Persetujuan'
        case 'APPROVED':
            return 'Disetujui'
        case 'REJECTED':
            return 'Ditolak'
        case 'CANCELLED':
            return 'Dibatalkan'
        case 'ON_PROGRESS':
            return 'Dalam Proses'
        case 'FINISH':
            return 'Selesai'
    }
}
