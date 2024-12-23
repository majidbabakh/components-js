import propTypes from 'prop-types';

function Button({
  children,
  rounded,
  outline,
  primary,
  secondary,
  success,
  warning,
  danger
}) {
  return (
    <button className="border-2 border-slate-400  m-4 px-4 py-1">
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
