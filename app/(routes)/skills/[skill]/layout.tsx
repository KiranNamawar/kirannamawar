import { SkillList } from '@/app/components/skill-list';
import { getSkillNames } from './data';

export default async function SkillLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const skillNames = await getSkillNames();
    return (
        <html lang="en">
            <body className='flex'>
                <div>
                    <SkillList skillList={skillNames} />
                </div>
                <div>{children}</div>
            </body>
        </html>
    );
}
