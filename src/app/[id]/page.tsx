import { getSignature } from './data'
import InvalidSignature from './invalid-signature'
import ServerError from './server-error'
import SignatureLayout from './signature'

export default async function Signature(props: { params: Record<string, string[] | string> }) {
    const data = await getSignature(props.params.id)

    if (data === 'invalid_signature') {
        return <InvalidSignature />
    }

    if (data === 'server_error') {
        return <ServerError />
    }

    return <SignatureLayout data={data} id={props.params.id as string} />
}
