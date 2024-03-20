'use client'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function ServerError() {
    return (
        <div className="bg-white px-3 py-6 md:px-12 md:py-16 rounded" style={{ minHeight: '50%' }}>
            <FaExclamationTriangle className="text-yellow-300 text-9xl text-center mx-auto mb-6" />
            <p className="text-center text-black text-xl">Sedang ada kendala di server, coba lagi nanti</p>
        </div>
    )
}
