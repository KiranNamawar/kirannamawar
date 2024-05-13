// Desc: Home page of the application

// Importing External Dependencies
import Link from 'next/link';

// Importing Internal Dependencies
import { SkillBadges } from './util/components';

// Exporting the Home Page
export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className=" flex w-screen flex-col items-center justify-around gap-10">
                <div className="flex flex-col">
                    <p className={`self-center font-nunito`}>
                        Hey, I&apos;m{' '}
                        <span className="text-4xl font-thin tracking-widest text-green-500">
                            KIRAN NAMAWAR
                        </span>
                    </p>
                    <p className="font-nunito text-7xl font-thin text-blue-300">
                        Web Developer
                    </p>
                </div>
                <SkillBadges />
                <div>
                    <Link
                        href="/skills"
                        className="rounded-xl bg-button-primary-default p-3 hover:bg-button-primary-hover"
                    >
                        View All Skills
                    </Link>
                </div>
            </section>
        </main>
    );
}
