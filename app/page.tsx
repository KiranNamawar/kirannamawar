// Desc: Home page of the application

// Importing External Dependencies
import Link from 'next/link';

// Importing Internal Dependencies
import { SkillBadges } from './util/components';
import Image from 'next/image';

// Exporting the Home Page
export default async function Home() {
    return (
        <main className="">
            <section className="mx-auto max-w-screen-lg">
                <div className="flex flex-col items-center justify-center">
                    <p className={` font-nunito`}>
                        Hey, I&apos;m{' '}
                        <span className="text-2xl font-thin tracking-widest text-green-500 md:text-4xl">
                            KIRAN NAMAWAR
                        </span>
                    </p>
                    <p className="font-nunito text-4xl font-thin text-blue-300 md:text-7xl">
                        Web Developer
                    </p>
                </div>
                <div className="m-10 md:mx-44 md:my-20">
                    <SkillBadges />
                    <div className="m-10 mx-auto flex w-fit justify-center rounded-xl bg-button-primary-default p-5 hover:bg-button-primary-hover">
                        <Link href="/skills" className="md:text-2xl">
                            View All Skills
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center md:border-t">
                    <h3 className="mt-10 text-2xl font-thin text-blue-300 md:text-4xl">
                        About Me
                    </h3>
                    <p className="mt-5 max-w-screen-sm p-2 text-center text-lg md:mt-10">
                        I&apos;m a passionate web developer with 1 years of
                        experience. I love crafting user-friendly interfaces and
                        bringing ideas to life through code. I&apos;m proficient
                        in HTML, CSS, Tailwind CSS, JavaScript, TypeScript,
                        React, Next.js, and MongoDB.
                    </p>
                    <div className="m-10 flex gap-4">
                        <Link href="https://www.linkedin.com/in/kirannamawardev/">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                                alt="linkedin"
                                width="50"
                                height="50"
                                className="hover:scale-110"
                            ></Image>
                        </Link>
                        <Link href="https://github.com/KiranNamawar">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="github"
                                width="50"
                                height="50"
                                className="hover:scale-110"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="/contact">
                            <button className="bg-button-primary-default hover:bg-button-primary-hover p-2 rounded-xl mb-10">
                                Let&apos;s Connect
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
