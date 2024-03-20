import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import moment from 'moment'
import 'moment/locale/id'

moment.locale('id')

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '500'] })

export const metadata: Metadata = {
    title: 'Tanda Tangan Digital Rupira',
    description: 'Rupira signature website checker',
    robots: {
        index: false,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="id">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
