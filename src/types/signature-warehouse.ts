export type SignatureWarehouse = {
    id: string;
    status: string;
    approvers: Approver[];
    modelId: string;
} & (DOModel | PRModel | POModel | RIModel | RABModel)

export interface Approver {
    level: number;
    status: string;
    user: User;
}

export interface User {
    id: string;
    name: string;
    nip: string;
    position: Position;
    division: Division;
}

export interface Position {
    name: string;
}

export interface Division {
    name: string;
}


interface DOModel {
    modelType: "DO"
    model: {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        deliveryOrderNumber: string;
        purchaseRequestId: string;
        description: string | null;
        currentStatus: string;
        deliveryDate: string;
        deliveredDate: string | null;
        creatorId: string;
        warehouseId: string;
    }
}

interface PRModel {
    modelType: "PR"
    model: {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        purchaseRequestNumber: string;
        requesterId: string;
        requirementDate: string;
        projectName: string | null;
        projectAddress: string | null;
        currentStatus: string;
        billQuantityId: string | null;
        description: string | null;
    }
}

interface POModel {
    modelType: "PO"
    model: {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        purchaseOrderNumber: string;
        purchaseRequestId: string | null;
        projectName: string;
        supplierId: string;
        term: string | null;
        orderedById: string;
        orderedAt: string;
        expectedDeliveryDate: string;
        totalPrice: number;
        currentStatus: string;
    }
}

interface RIModel {
    modelType: "RI"
    model: {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        receivedItemNumber: string;
        purchaseOrderId: string | null;
        purchaseRequestId: string | null;
        description: string | null;
        receivedDate: string;
        receivedBy: string;
        creatorId: string;
        warehouseId: string;
        status: string;
    }
}

interface RABModel {
    modelType: "RAB"
    model: {
        id: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        billQuantityNumber: string;
        createdBy: string;
        projectId: string;
        currentStatus: string;
        version: number;
    }
}