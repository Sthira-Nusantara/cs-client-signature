import 'server-only'
import { SIGNATURE_API_URL } from '@/config/config'
import { toSignatureError } from '@/lib/fetch-error'
import { isUuid } from '@/lib/uuid'
import { Signature, SignatureView } from '@/types/signature'
import axios from 'axios'

export async function getSignature(id: unknown): Promise<SignatureView | 'invalid_signature' | 'server_error'> {
    if (!isUuid(id)) {
        return 'invalid_signature'
    }

    try {
        const res = await axios.get(`${SIGNATURE_API_URL}/${encodeURIComponent(id)}`, { timeout: 10000 })

        const signature: Signature | undefined = res.data?.data

        if (signature?.status !== 'approve') {
            return 'invalid_signature'
        }

        const approver = signature.approvers?.find(approver => approver.signature === id)

        if (!approver) {
            return 'invalid_signature'
        }

        return {
            usedBy: signature.usedBy,
            purpose: signature.purpose,
            date: signature.date,
            createdAt: signature.createdAt,
            signature: signature.signature,
            approver: {
                name: approver.employee.name,
                nip: approver.employee.nip,
                position: approver.employee.position.name,
            },
        }
    } catch (error) {
        return toSignatureError(error)
    }
}
