'use client'
import { SignatureWarehouse } from '@/types/signature-warehouse'
import moment from 'moment'
import { FaCheckCircle } from 'react-icons/fa'

export default function WarehouseSignatureLayout({ data, id }: { data: SignatureWarehouse; id: string }) {
    const getModelTypeLabel = (modelType: string) => {
        const labels: Record<string, string> = {
            DO: 'Surat Jalan (DO)',
            PR: 'Permintaan Barang (PR)',
            PO: 'Pembelian Barang (PO)',
            RI: 'Penerimaan Barang (RI)',
            RAB: 'Rencana Anggaran Biaya (RAB)',
        }
        return labels[modelType] || modelType
    }

    const getModelNumber = () => {
        switch (data.modelType) {
            case 'DO':
                return data.model.deliveryOrderNumber
            case 'PR':
                return data.model.purchaseRequestNumber
            case 'PO':
                return data.model.purchaseOrderNumber
            case 'RI':
                return data.model.receivedItemNumber
            case 'RAB':
                return data.model.billQuantityNumber
            default:
                return '-'
        }
    }

    const renderModelSpecificInfo = () => {
        switch (data.modelType) {
            case 'DO':
                return (
                    <>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Tanggal Pengiriman</h5>
                            <p className="text-gray-900">{moment(data.model.deliveryDate).format('DD MMM YYYY')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Tanggal Diterima</h5>
                            <p className="text-gray-900">{data.model.deliveredDate ? moment(data.model.deliveredDate).format('DD MMM YYYY') : '-'}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Status</h5>
                            <p className="text-gray-900">{data.model.currentStatus}</p>
                        </div>
                        {data.model.description && (
                            <div className="w-full">
                                <h5 className="font-bold text-base text-gray-700">Deskripsi</h5>
                                <p className="text-gray-900">{data.model.description}</p>
                            </div>
                        )}
                    </>
                )
            case 'PR':
                return (
                    <>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Tanggal Kebutuhan</h5>
                            <p className="text-gray-900">{moment(data.model.requirementDate).format('DD MMM YYYY')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Nama Proyek</h5>
                            <p className="text-gray-900">{data.model.projectName || '-'}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Alamat Proyek</h5>
                            <p className="text-gray-900">{data.model.projectAddress || '-'}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Status</h5>
                            <p className="text-gray-900">{data.model.currentStatus}</p>
                        </div>
                        {data.model.description && (
                            <div className="w-full">
                                <h5 className="font-bold text-base text-gray-700">Deskripsi</h5>
                                <p className="text-gray-900">{data.model.description}</p>
                            </div>
                        )}
                    </>
                )
            case 'PO':
                return (
                    <>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Nama Proyek</h5>
                            <p className="text-gray-900">{data.model.projectName}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Tanggal Pemesanan</h5>
                            <p className="text-gray-900">{moment(data.model.orderedAt).format('DD MMM YYYY HH:mm')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Tanggal Pengiriman Diharapkan</h5>
                            <p className="text-gray-900">{moment(data.model.expectedDeliveryDate).format('DD MMM YYYY')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Total Harga</h5>
                            <p className="text-gray-900 font-semibold">
                                {new Intl.NumberFormat('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                }).format(data.model.totalPrice)}
                            </p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Status</h5>
                            <p className="text-gray-900">{data.model.currentStatus}</p>
                        </div>
                        {data.model.term && (
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">Term</h5>
                                <p className="text-gray-900">{data.model.term}</p>
                            </div>
                        )}
                    </>
                )
            case 'RI':
                return (
                    <>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Tanggal Diterima</h5>
                            <p className="text-gray-900">{moment(data.model.receivedDate).format('DD MMM YYYY HH:mm')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Status</h5>
                            <p className="text-gray-900">{data.model.status}</p>
                        </div>
                        {data.model.description && (
                            <div className="w-full">
                                <h5 className="font-bold text-base text-gray-700">Deskripsi</h5>
                                <p className="text-gray-900">{data.model.description}</p>
                            </div>
                        )}
                    </>
                )
            case 'RAB':
                return (
                    <>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Status</h5>
                            <p className="text-gray-900">{data.model.currentStatus}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base text-gray-700">Versi</h5>
                            <p className="text-gray-900">{data.model.version}</p>
                        </div>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className="bg-white px-3 py-6 md:px-12 md:py-16 rounded relative overflow-hidden" style={{ minHeight: '50%' }}>
                {/* Watermark */}
                <div className="absolute inset-0 pointer-events-none opacity-10 z-0 flex items-center justify-center" style={{ transform: 'rotate(-45deg)' }}>
                    <p className="text-green-600 text-6xl md:text-8xl lg:text-9xl font-bold">Approved</p>
                </div>

                <div className="relative z-10">
                    <div className="my-4">
                        <div className="flex justify-between flex-wrap gap-y-3">
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">Status Dokumen</h5>
                                <p className="text-gray-900">{data.status}</p>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">Nomor Dokumen</h5>
                                <p className="text-gray-900">{getModelNumber()}</p>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">Jenis Dokumen</h5>
                                <p className="text-gray-900">{getModelTypeLabel(data.modelType)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-4">
                        <h3 className="text-green-600 font-semibold text-lg mb-2">Info Penandatangan</h3>
                        <hr className="mb-4 border-gray-300 w-full" />
                        {data.approvers.map((approver, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <div className="shadow-md p-4 rounded-lg mb-3">
                                    <div className="flex justify-between flex-wrap gap-y-3">
                                        <div className="md:w-1/3 w-full">
                                            <h5 className="font-bold text-base text-gray-700">Nama</h5>
                                            <p className="text-gray-900">{approver.user.name}</p>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <h5 className="font-bold text-base text-gray-700">NIP</h5>
                                            <p className="text-gray-900">{approver.user.nip}</p>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <h5 className="font-bold text-base text-gray-700">Jabatan</h5>
                                            <p className="text-gray-900">{approver.user.position.name}</p>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <h5 className="font-bold text-base text-gray-700">Divisi</h5>
                                            <p className="text-gray-900">{approver.user.division.name}</p>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <h5 className="font-bold text-base text-gray-700">Level</h5>
                                            <p className="text-gray-900">{approver.level}</p>
                                        </div>
                                        <div className="md:w-1/3 w-full">
                                            <h5 className="font-bold text-base text-gray-700">Status Persetujuan</h5>
                                            <p className="text-gray-900">{approver.status}</p>
                                        </div>
                                    </div>
                                </div>
                                {index < data.approvers.length - 1 && <hr className="my-3 border-gray-300" />}
                            </div>
                        ))}
                    </div>

                    <div className="my-4">
                        <h3 className="text-green-600 font-semibold text-lg mb-2">Informasi Dokumen</h3>
                        <hr className="mb-4 border-gray-300" />
                        <div className="flex justify-between flex-wrap gap-y-3">
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">Tanggal Dibuat</h5>
                                <p className="text-gray-900">{moment(data.model.createdAt).format('DD MMM YYYY HH:mm')}</p>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">Waktu Pindai</h5>
                                <p className="text-gray-900">{moment().format('DD MMM YYYY HH:mm')}</p>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <h5 className="font-bold text-base text-gray-700">ID Signature</h5>
                                <p className="text-gray-900 break-all text-sm">{id}</p>
                            </div>
                            {renderModelSpecificInfo()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <p className="text-lg text-gray-600">
                    Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang
                    diterbitkan Rupira.
                </p>
            </div>
        </>
    )
}
