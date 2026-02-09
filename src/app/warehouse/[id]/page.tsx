import { getWarehouseSignature } from './data'
import InvalidSignature from './invalid-signature'
import ServerError from './server-error'
import WarehouseSignatureLayout from './signature'

export default async function WarehouseSignature(props: { params: Promise<{ id: string }> }) {
    const id = (await props.params).id
    const data = await getWarehouseSignature(id)

    if (data === 'invalid_signature') {
        return <InvalidSignature />
    }

    if (data === 'server_error') {
        return <ServerError />
    }

    return <WarehouseSignatureLayout data={data} id={id} />
}
