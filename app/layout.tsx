// Purpose: RootLayout component to wrap all pages with common layout

// Importing External Dependencies
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

// Importing Internal Dependencies
import './globals.css';
import { Navbar } from './util/components';

// Instantiating the Quicksand Font
const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
});

// Exporting the Metadata for the Page
export const metadata: Metadata = {
    title: 'Portfolio | Kiran Namawar',
    description: "Kiran Namawar's portfolio",
};

// Exporting the Root Layout Component
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${nunito.variable}`}>
                <Navbar />
                <div className="mt-16">{children}</div>
            </body>
        </html>
    );
}
