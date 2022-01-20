export default function RoundedButton({className, children, ...rest}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center px-4 py-2 font-bold rounded ${className}`} {...rest}>
      {children}
    </button>
  );
}
