'use server'
import { SIGNATURE_API_URL } from '@/config/config'
import { Signature } from '@/types/signature'
import axios, { AxiosError } from 'axios'

export async function getSignature(id: any): Promise<Signature | 'invalid_signature' | 'server_error'> {
    try {
        if (typeof id !== 'string') {
            return 'invalid_signature'
        }

        const res = await axios.get(`${SIGNATURE_API_URL}/${id}`)

        const signature: Signature = res.data?.data

        if (signature?.status !== 'approve') {
            return 'invalid_signature'
        }

        return signature
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.code === 'ENOTFOUND' || error.response?.status! >= 500) {
                return 'server_error'
            }
        }
        return 'invalid_signature'
    }
}
