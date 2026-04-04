export default function Contact() {
    return (
        <>
            <section className="font-sora text-text-inverse bg-seconday-subtle">
                <div className="mx-auto max-w-7xl flex flex-col gap-4 bg-primary-dark p-10 rounded-lg  h-[50vh] items-center justify-center">
                    <h1 className="text-4xl text-center">Let's Start a Conversation</h1>
                    <p className="text-center">Currently open to junior/associate roles in Full Stack Development, DevOps, and Backend Engineering.</p>
                    <div className="flex flex-wrap gap-5 items-center justify-center">
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