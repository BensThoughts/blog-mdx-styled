import {TechStack} from './technologies';

export default function Technologies() {
  return (
    <div className="flex flex-wrap gap-4 w-full max-w-4xl">
      {TechStack.map((tech) => (
        <a
          key={tech.name}
          href={tech.href}
          className="flex gap-2 items-center justify-around rounded py-1 px-2 bg-primary bg-opacity-80 hover:bg-opacity-100 transform transition-transform duration-200 hover:-translate-y-1 text-primary text-sm"
        >
          <span className="text-icon-secondary">{tech.icon}</span>
          <span className="text-primary">{tech.name}</span>
        </a>
      ))}
    </div>
  );
}
