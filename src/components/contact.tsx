export default function Contact() {
    return (
        <>
            <section
                id="contact"
                className="font-sora scroll-mt-24 text-text-inverse bg-seconday-subtle px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
            >
                <div className="mx-auto flex min-h-[min(50vh,28rem)] max-w-7xl flex-col items-center justify-center gap-5 rounded-2xl bg-primary-dark p-6 sm:gap-6 sm:p-8 md:p-10 lg:min-h-[min(52vh,32rem)]">
                    <h1 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Let&apos;s Start a Conversation
                    </h1>
                    <p className="max-w-2xl text-center text-sm leading-relaxed text-text-inverse/90 sm:text-base">
                        Currently open to junior/associate roles in Full Stack Development, DevOps, and Backend Engineering.
                    </p>
                    <div className="flex w-full max-w-xl flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                        <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'tel:+919392764775'}>PHONE CALL</button>
                        <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'mailto:shaiksohail0726@gmail.com'}>EMAIL ME</button>
                        <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'https://www.linkedin.com/in/sksohail19/'}>LINKEDIN</button>
                        <button className="rounded-lg bg-surface-lowest px-7 py-3  font-semibold text-primary-main hover:bg-primary-main hover:text-text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main" onClick={() => window.location.href = 'https://github.com/sksohail19'}>GITHUB</button>
                    </div>
                </div>

            </section>
        </>
    )
}