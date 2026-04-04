export default function Skills() {
  const categories = [
    {
      icon: 'https://img.icons8.com/parakeet/48/code.png',
      name: 'Frontend',
      items: ['React JS', 'Next', 'Tailwind CSS'],
    },
    {
      icon: 'https://img.icons8.com/color/48/backend-development--v1.png',
      name: 'Backend Languages',
      items: ['JavaScript', 'TypeScript', 'Python'],
    },
    {
      icon: 'https://img.icons8.com/officel/80/database.png',
      name: 'Database',
      items: ['MongoDB', 'MySQL'],
    },
    {
      icon: 'https://img.icons8.com/emoji/48/cloud-emoji.png',
      name: 'Cloud',
      items: ['AWS'],
    },
  ]

  return (
    <section
      id="skills"
      className="font-sora scroll-mt-24 border-t border-secondary-subtle/40 bg-surface-base px-4 py-12 sm:px-8 sm:py-16 lg:px-[6%] lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="max-w-2xl space-y-3">
          <h2
            id="skills-heading"
            className="text-balance text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
          >
            Technical toolkit
          </h2>
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            Categorized expertise across the modern web ecosystem.
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex flex-col gap-4 rounded-2xl border border-surface-variant bg-surface-lowest p-5 shadow-[0_12px_32px_-18px_rgba(45,52,51,0.2)] transition hover:shadow-[0_18px_40px_-16px_rgba(45,52,51,0.22)]"
            >
              <div className="flex items-center gap-3">
                {category.icon ? (
                  <img
                    src={category.icon}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded-xl object-cover"
                  />
                ) : (
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-container text-sm font-bold text-primary-dark"
                    aria-hidden
                  >
                    {category.name.charAt(0)}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.name}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-full bg-gray-200 px-3 py-1.5 text-sm font-medium text-primary-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
