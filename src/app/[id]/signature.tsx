'use client'
import { Approver, Signature } from '@/types/signature'
import moment from 'moment'
import { FaCheckCircle } from 'react-icons/fa'

export default function SignatureLayout({ data, id }: { data: Signature; id: string }) {
    const approver = data.approvers.find(approver => approver.signature === id) as Approver

    return (
        <>
            <div className="bg-white px-3 py-6 md:px-12 md:py-16 rounded" style={{ minHeight: '50%' }}>
                <div>
                    <FaCheckCircle className="text-green-600 text-8xl text-center mx-auto mb-2" />
                    <hr />
                </div>

                <div className="my-3">
                    <div className="flex justify-between flex-wrap gap-y-3">
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Status Dokumen</h5>
                            <p>Aktif</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Nomor Dokumen</h5>
                            <p>{data.usedBy}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Nama Dokumen</h5>
                            <p>{data.purpose}</p>
                        </div>
                    </div>
                </div>

                <div className="my-3">
                    <h3 className="text-green-300">Info Penandatangan</h3>
                    <hr className="mb-3" />
                    <div className="flex justify-between flex-wrap gap-y-3">
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Nama</h5>
                            <p>{approver.employee.name}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">NIP</h5>
                            <p>{approver.employee.nip}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Jabatan</h5>
                            <p>{approver.employee.position.name}</p>
                        </div>
                    </div>
                </div>

                <div className="my-3">
                    <h3 className="text-green-300">Informasi</h3>
                    <hr className="mb-3" />
                    <div className="flex justify-between flex-wrap gap-y-3">
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Tanggal Dibuat</h5>
                            <p>{moment(data.date || data.createdAt).format('DD MMM YYYY')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Waktu Pindai</h5>
                            <p>{moment().format('DD MMM YYYY HH:mm')}</p>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <h5 className="font-bold text-base">Signature</h5>
                            <p>{data.signature}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <p className="text-lg text-white">
                    Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang
                    diterbitkan Rupira.
                </p>
            </div>
        </>
    )
}
