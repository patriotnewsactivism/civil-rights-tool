import React from 'react';

const Card = ({
  children,
  title,
  subtitle,
  icon,
  footer,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  bordered = true,
  elevated = false,
  onClick,
}) => {
  const cardClasses = `
    ${bordered ? 'border border-slate-200 dark:border-slate-700' : ''}
    ${elevated ? 'shadow-md' : ''}
    bg-white dark:bg-slate-800 rounded-lg overflow-hidden
    ${onClick ? 'cursor-pointer transition-transform hover:scale-[1.01]' : ''}
    ${className}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      {(title || subtitle || icon) && (
        <div className={`px-4 py-3 border-b border-slate-200 dark:border-slate-700 ${headerClassName}`}>
          <div className="flex items-center">
            {icon && <div className="mr-3 text-slate-500 dark:text-slate-400">{icon}</div>}
            <div>
              {title && <h3 className="text-lg font-medium text-slate-900 dark:text-white">{title}</h3>}
              {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
            </div>
          </div>
        </div>
      )}
      <div className={`p-4 ${bodyClassName}`}>{children}</div>
      {footer && <div className={`px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 ${footerClassName}`}>{footer}</div>}
    </div>
  );
};

export default Card;