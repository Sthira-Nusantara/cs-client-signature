import { isAxiosError } from 'axios'

export function toSignatureError(error: unknown): 'invalid_signature' | 'server_error' {
    if (isAxiosError(error)) {
        const status = error.response?.status
        if (status && status >= 400 && status < 500) {
            return 'invalid_signature'
        }
    }
    return 'server_error'
}
