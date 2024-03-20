'use client'
import { FaTimesCircle } from 'react-icons/fa'

export default function InvalidSignature() {
    return (
        <div className="bg-white px-3 py-6 md:px-12 md:py-16 rounded" style={{ minHeight: '50%' }}>
            <FaTimesCircle className="text-red-700 text-9xl text-center mx-auto mb-6" />
            <p className="text-center text-black text-xl">Dokumen Tidak Valid</p>
        </div>
    )
}
