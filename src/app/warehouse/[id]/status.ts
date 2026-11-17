export function translateStatus(status: string | null | undefined) {
    if (!status) return '-'
    switch (status.toLowerCase()) {
        case 'approved':
            return 'Disetujui'
        case 'rejected':
            return 'Ditolak'
        case 'pending':
            return 'Menunggu Persetujuan'
        default:
            return '-'
    }
}

export function documentTranslateStatus(status: string | null | undefined) {
    if (!status) return '-'
    switch (status.toUpperCase()) {
        case 'DRAFT':
            return 'Draf'
        case 'NEW':
            return 'Baru'
        case 'WAITING_APPROVAL':
            return 'Menunggu Persetujuan'
        case 'APPROVED':
            return 'Disetujui'
        case 'REJECTED':
            return 'Ditolak'
        case 'CANCELLED':
            return 'Dibatalkan'
        case 'ON_PROGRESS':
            return 'Dalam Proses'
        case 'FINISH':
            return 'Selesai'
        default:
            return '-'
    }
}
