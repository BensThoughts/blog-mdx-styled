type IconButtonProps = {
  children: React.ReactNode;
  onClick: any;
  className: string;
}

export default function IconButton({ className, children, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className={`bg-secondary font-bold py-2 px-4 rounded inline-flex items-center ${className}`}>
      {children}
    </button>
  )
}