export function translateStatus(status: string) {
    switch (status.toLowerCase()) {
        case 'approved':
            return 'Disetujui'
        case 'rejected':
            return 'Ditolak'
        case 'pending':
            return 'Menunggu Persetujuan'
    }
}

export function documentTranslateStatus(status: string) {
    switch (status.toUpperCase()) {
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
    }
}
