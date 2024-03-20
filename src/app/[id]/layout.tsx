import { LogoIcon } from '@/assets'
import { headers } from 'next/headers'
import './styles.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const header = headers()
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    return (
        <div className="w-screen h-screen overflow-hidden overflow-y-auto p-4 pb-0 md:px-16 md:py-12 bg-img">
            <div className="flex flex-col h-full w-full">
                <div className="flex items-center gap-2">
                    <div className="w-14 overflow-hidden rounded-full">
                        <LogoIcon />
                    </div>
                    <p className="font-bold">Rupira</p>
                </div>
                <div className="flex-1 bg-gray-300 bg-opacity-30 text-black rounded-lg my-6 p-4">{children}</div>
                <div className="flex justify-between text-gray-300 mb-4">
                    <p>Rupira Signature</p>
                    <p>Alamat IP {ip}</p>
                </div>
            </div>
        </div>
    )
}
