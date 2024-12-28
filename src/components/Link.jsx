import { useNavigation } from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children, className, activeClass }) {
  const { navigation, currentPath } = useNavigation();
  const handleClick = (e) => {
    if (e.ctrlKey | e.metaKey) {
      return;
    }

    e.preventDefault();
    navigation(to);
  };

  const classes = classNames(className, currentPath === to && activeClass);

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
