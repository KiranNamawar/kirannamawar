import type { Metadata } from 'next';
import './globals.css';
import { nunito } from './util/fonts';


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
            <body className={nunito.className}>{children}</body>
        </html>
    );
}
