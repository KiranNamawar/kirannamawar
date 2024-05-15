// Purpose: Layout for the skill pages.

// Importing External Dependencies

// Importing Internal Dependencies
import { Navbar, SkillList } from '@/app/util/components';

// Exporting the Skill Layout Component
export default async function SkillLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="">
            {/* <nav> */}
                {/* <SkillList /> */}
            {/* </nav> */}
            <div>{children}</div>
        </section>
    );
}
