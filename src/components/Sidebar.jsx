import Link from './Link';

function Sidebar() {
  const links = [
    {
      label: 'dropdown',
      path: '/dropdown'
    },
    {
      label: 'accordion',
      path: '/accordion'
    },
    {
      label: 'button',
      path: '/button'
    }
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="m-4"
        activeClass="font-bold"
      >
        {link.label}
      </Link>
    );
  });

  return <div>{renderedLinks}</div>;
}

export default Sidebar;
