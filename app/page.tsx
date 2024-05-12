// Desc: Home page of the application

// Importing External Dependencies
import Link from 'next/link';

// Importing Internal Dependencies
import { SkillBadges } from './util/components';

// Exporting the Home Page
export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className=" flex w-screen flex-col items-center justify-around gap-10 p-10">
                <div className="flex flex-col">
                    <p className={`self-center font-quickSand`}>
                        Hey, I&apos;m{' '}
                        <span className="text-4xl font-thin tracking-widest text-gray-500">
                            KIRAN NAMAWAR
                        </span>
                    </p>
                    <p className="font-quickSand text-7xl font-thin text-blue-300">
                        Web Developer
                    </p>
                </div>
                <SkillBadges />
                <div>
                    <Link
                        href="/skills"
                        className="rounded bg-slate-700 p-3 text-blue-300 hover:bg-slate-500"
                    >
                        {' '}
                        View All Skills
                    </Link>
                </div>
            </section>
        </main>
    );
}
