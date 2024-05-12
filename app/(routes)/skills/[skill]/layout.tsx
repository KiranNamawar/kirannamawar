// Purpose: Layout for the skill pages.

// Importing External Dependencies


// Importing Internal Dependencies


// Exporting the Skill Layout Component
export default async function SkillLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="flex">
                <div>{children}</div>
            </body>
        </html>
    );
}
