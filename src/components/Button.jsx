export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
