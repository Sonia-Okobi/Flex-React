import React from 'react';
import './index.scss';

export default function BaseButton({
  className = '',
  variant = 'primary',
  children,
  icon,
  ...props
}) {
  return (
    <button className={`base-button--${variant} ${className}`} {...props}>
      {children}{' '}
      {icon ? (
        <span className="base-button__icon">
          <img src={icon} alt="icon" />
        </span>
      ) : null}
    </button>
  );
}
