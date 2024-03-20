export interface Signature {
    purpose: string
    signature: string
    approvers: Approver[]
    status: 'approve' | 'pending' | 'reject'
    createdAt: string
    updatedAt: string
    usedBy: string
    id: string
}

export interface Approver {
    employee: Employee
    status: 'approve' | 'pending' | 'reject'
    signature: string
    _id: string
}

export interface Employee {
    workgroup: string
    cuti: number
    deleted: boolean
    nip: string
    email: string
    password: string
    name: string
    nickName: string
    gender: string
    avatar: string
    division: string
    position: Position
    status: string
    relations: any[]
    createdAt: string
    updatedAt: string
    joinedAt: string
    nameTagPhoto: string
    technicianId: string
    order: string
    prefix: string
    lastCuti: number
    lastCutiBefore: number
    type: string
    id: string
}

export interface Position {
    id: string
    name: string
}
