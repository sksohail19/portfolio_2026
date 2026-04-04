import getExpDate from '@/utils/getExpDate'

export default function Intro() {
    const experience = getExpDate(new Date(2025, 8, 25))
    const experienceLabel = experience.replace(/,/g, ' ').replace(/\s+/g, ' ').trim()

    const stats = [
        { value: '15+', label: 'Self-made projects' },
        { value: experienceLabel, label: 'Experience' },
        { value: '1', label: 'Active projects' },
        { value: '100%', label: 'Commitment' },
    ] as const

    return (
        <section
            id="about"
            className="font-sora scroll-mt-24 bg-surface-base px-4 py-12 sm:px-8 sm:py-16 lg:px-[6%] lg:py-24"
            aria-labelledby="intro-heading"
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:gap-16 lg:items-start justify-center">
                <header className="max-w-lg w-full shrink-0 lg:sticky lg:top-24">
                    <h1
                        id="intro-heading"
                        className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-[2.75rem]"
                    >
                        <span className="block text-primary-dark font-medium tracking-wide mb-2">
                            The Artisan’s
                        </span>
                        <span className="block text-text-primary hover:underline-offset-16 hover:underline">
                            Background
                        </span>
                    </h1>
                </header>

                <div className="max-w-5xl w-full flex flex-1 flex-col text-base leading-relaxed">
                    <p className="rounded-2xl p-5 text-text-primary sm:p-6">
                        I am Sohail Shaik, a fresher with {experienceLabel} of Experience. I have started my professional journey with a passion for building systems that are as beautiful under the hood as they are on the screen.
                    </p>
                    <p className="rounded-2xl p-5 text-text-secondary sm:p-6">
                        My philosophy centers on
                        &ldquo;Intentional Engineering&rdquo;—creating software that solves
                        real-world problems through clarity, efficiency, and thoughtful design.
                    </p>

                    <ul
                        className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                        aria-label="Highlights"
                    >
                        {stats.map(({ value, label }) => (
                            <li
                                key={label}
                                className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-surface-variant/60 bg-surface-container/80 px-3 py-4 text-center sm:px-4 sm:py-5"
                            >
                                <span className="text-xl font-semibold tabular-nums text-primary-main sm:text-2xl">
                                    {value}
                                </span>
                                <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-text-secondary sm:text-xs">
                                    {label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
