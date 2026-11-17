// Kontrak GET .../signatures/public/:id. `model` bisa null dari API, tetapi
// getWarehouseSignature menolaknya (server_error), jadi di sini bertipe non-null.
export type SignatureWarehouse = {
    id: string
    status: string
    modelId: string
    approvers: Approver[]
} & (DOModel | PRModel | POModel | RIModel | RABModel | DUModel | SOModel | TFModel)

export interface Approver {
    level: number
    status: string
    user: User
}

export interface User {
    name: string
    nip: string
    position: Position | null
    division: Division | null
}

export interface Position {
    name: string
}

export interface Division {
    name: string
}

interface DOModel {
    modelType: 'DO'
    model: {
        createdAt: string
        deliveryOrderNumber: string
        deliveryDate: string
        receivedAt: string | null
        currentStatus: string
        description: string | null
    }
}

interface PRModel {
    modelType: 'PR'
    model: {
        createdAt: string
        purchaseRequestNumber: string
        requirementDate: string
        projectName: string | null
        projectAddress: string | null
        currentStatus: string
        description: string | null
    }
}

interface POModel {
    modelType: 'PO'
    model: {
        createdAt: string
        purchaseOrderNumber: string
        projectName: string
        orderedAt: string
        expectedDeliveryDate: string
        totalPrice: number
        term: string | null
        currentStatus: string
    }
}

interface RIModel {
    modelType: 'RI'
    model: {
        createdAt: string
        receivedItemNumber: string
        receivedDate: string
        currentStatus: string
        description: string | null
    }
}

interface RABModel {
    modelType: 'RAB'
    model: {
        createdAt: string
        billQuantityNumber: string
        currentStatus: string
        version: number
    }
}

interface DUModel {
    modelType: 'DU'
    model: {
        createdAt: string
        dailyUsageNumber: string
    }
}

interface SOModel {
    modelType: 'SO'
    model: {
        createdAt: string
        auditNumber: string
    }
}

interface TFModel {
    modelType: 'TF'
    model: {
        createdAt: string
        transferNumber: string
    }
}
