import { Link } from 'react-router-dom';
type NavbarProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
};

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="text-lg flex justify-between bg-surface-base items-center p-4 mt-3">
      <h1 className="text-text-primary text-3xl font-bold">{props.title}</h1>

      <ul className="flex gap-10">
        {props.links.map((link) => (
          <li key={link.href} className="relative inline-block transition-all duration-300 hover:-translate-y-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-semantic-green after:transition-all after:duration-300 hover:after:w-full">
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link
        to={props.cta.href}
        className="rounded-md px-4 py-2 bg-primary-main text-white hover:-translate-y-1 transition-all duration-300"
      >
        {props.cta.label}
      </Link>
    </nav>
  );
}
