'use client';
import { useEffect } from 'react';
import './form.css';

export default function ContactForm() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s.pageclip.co/v1/pageclip.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className=''>
            <form
                action="https://send.pageclip.co/FC14h9qbpmJie0GwAkMblkGsOT9MomxM"
                className="pageclip-form flex flex-col gap-4 m-auto max-w-screen-sm p-5 rounded-xl"
                method="post"
            >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required className="rounded-xl h-10 active:cursor-text text-black p-2" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" required className="rounded-xl h-10 active:cursor-text text-black p-2" />

                <label htmlFor="message">Message</label>
                <textarea name="message" className="rounded-xl h-20 active:cursor-text text-black p-2"></textarea>
                <button type="submit" className="pageclip-form__submit">
                    <span>Submit</span>
                </button>
            </form>
        </div>
    );
}
