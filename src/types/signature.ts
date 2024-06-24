export interface Signature {
    purpose: string
    signature: string
    approvers: Approver[]
    status: 'approve' | 'pending' | 'reject'
    createdAt: string
    updatedAt: string
    usedBy: string
    id: string
    date: string
}

export interface Approver {
    employee: Employee
    status: 'approve' | 'pending' | 'reject'
    signature: string
    _id: string
}

export interface Employee {
    nip: string
    name: string
    position: Position
    id: string
}

export interface Position {
    id: string
    name: string
}
