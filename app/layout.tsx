import type { Metadata } from 'next';
import './globals.css';
import { Quicksand } from 'next/font/google';

const quickSand = Quicksand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300'],
    variable: '--font-quicksand',
});


export const metadata: Metadata = {
    title: 'Portfolio | Kiran Namawar',
    description: "Kiran Namawar's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${quickSand.variable}`}>{children}</body>
        </html>
    );
}
