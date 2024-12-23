import classNames from 'classnames';

function Button({
  children,
  rounded,
  outline,
  primary,
  secondary,
  success,
  warning,
  danger,
  ...rest
}) {
  const className = classNames(
    rest.className,
    {
      'bg-blue-500 border-blue-500 text-white': primary,
      'bg-slate-500 border-slate-500 text-white': secondary,
      'bg-green-500 border-green-500 text-white': success,
      'bg-yellow-500 border-yellow-500 text-white': warning,
      'bg-red-500 border-red-500 text-white': danger,
      'rounded-md': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-slate-500': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger
    },
    'py-1',
    'px-3',
    'border'
  );

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'only one of primary, secondary, success, warning,danger can be true '
      );
    }
  }
};

export default Button;
