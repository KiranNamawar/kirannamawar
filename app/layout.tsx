// Purpose: RootLayout component to wrap all pages with common layout

// Importing External Dependencies
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

// Importing Internal Dependencies
import './globals.css';
import { AppIcon, Navbar } from './util/components';

// Instantiating the Quicksand Font
const quickSand = Quicksand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300'],
    variable: '--font-quicksand',
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
            <body className={`${quickSand.variable}`}>
                <AppIcon />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
