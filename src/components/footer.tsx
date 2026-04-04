export default function Footer() {
    return (
        <>
            <footer className="font-sora bg-surface-base text-text-primary mx-auto max-w-7xl flex justify-between gap-4 p-10 rounded-lg">
                <section className="gap-2 items-center justify-center">
                    <h5 className="text-2xl font-bold">Sohail Shaik</h5>
                    <p className="text-sm">{new Date().getFullYear()} All rights reserved.</p>
                </section>

                <div className="flex flex-wrap gap-5 items-center justify-center">
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'tel:+919392764775'}>PHONE CALL</button>
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'mailto:shaiksohail0726@gmail.com'}>EMAIL ME</button>
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'https://www.linkedin.com/in/sksohail19/'}>LINKEDIN</button>
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'https://github.com/sksohail19'}>GITHUB</button>
                </div>
            </footer>
        </>
    )
}