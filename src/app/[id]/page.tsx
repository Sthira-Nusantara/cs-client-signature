import { NextPageContext } from 'next'
import { getSignature } from './data'
import InvalidSignature from './invalid-signature'
import ServerError from './server-error'
import SignatureLayout from './signature'

export default async function Signature(props: { params: Promise<{ id: string }> }) {
    const id = (await props.params).id
    const data = await getSignature(id)

    if (data === 'invalid_signature') {
        return <InvalidSignature />
    }

    if (data === 'server_error') {
        return <ServerError />
    }

    return <SignatureLayout data={data} id={id} />
}
