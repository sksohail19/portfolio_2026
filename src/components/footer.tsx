export default function Footer() {
    return (
        <>
            <footer className="font-sora mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl bg-surface-base p-6 text-text-primary sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-8 lg:p-10">
                <section className="flex flex-col gap-2 text-center sm:text-left">
                    <h5 className="text-xl font-bold sm:text-2xl">Sohail Shaik</h5>
                    <p className="text-sm text-text-secondary">{new Date().getFullYear()} All rights reserved.</p>
                </section>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 md:gap-4">
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'tel:+919392764775'}>PHONE CALL</button>
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'mailto:shaiksohail0726@gmail.com'}>EMAIL ME</button>
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'https://www.linkedin.com/in/sksohail19/'}>LINKEDIN</button>
                    <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'https://github.com/sksohail19'}>GITHUB</button>
                </div>
            </footer>
        </>
    )
}