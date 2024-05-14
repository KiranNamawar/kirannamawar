// Desc: Home page of the application

// Importing External Dependencies
import Link from 'next/link';

// Importing Internal Dependencies
import { SkillBadges } from './util/components';
import Image from 'next/image';

// Exporting the Home Page
export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className=" grid grid-cols-3 gap-10">
                <div className="col-span-2 flex flex-col">
                    <p className={` font-nunito`}>
                        Hey, I&apos;m{' '}
                        <span className="text-4xl font-thin tracking-widest text-green-500">
                            KIRAN NAMAWAR
                        </span>
                    </p>
                    <p className="font-nunito text-7xl font-thin text-blue-300">
                        Web Developer
                    </p>
                    <p className="mt-10 max-w-md font-nunito text-lg">
                        I&apos;m a passionate web developer with 1 years of
                        experience. I love crafting user-friendly interfaces and
                        bringing ideas to life through code. I&apos;m proficient
                        in HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
                        React, Next.js, and MongoDB.
                    </p>
                    <div className="flex m-5 gap-5">
                        <Link href="https://www.linkedin.com/in/kirannamawar/">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                                alt="linkedin"
                                width="50"
                                height="50"
                                className='hover:scale-110'
                            ></Image>
                        </Link>
                        <Link href="https://github.com/KiranNamawar">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="github"
                                width="50"
                                height="50"
                                className='hover:scale-110'
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col">
                    <SkillBadges />
                    <Link
                        href="/skills"
                        className="rounded-xl w-fit self-center m-5 bg-button-primary-default p-3 hover:bg-button-primary-hover"
                    >
                        View All Skills
                    </Link>
                </div>
            </section>
        </main>
    );
}
