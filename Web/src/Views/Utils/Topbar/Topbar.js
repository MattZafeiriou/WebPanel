//import '../../../CSS/Topbar.css';
import { useLocation } from 'react-router-dom';

function CreateBreadcrumb(pathname) {
  const paths = pathname.pathname.split('/');
  paths[0] = 'Home';
  const character = '/';
  let lastPath = '';
  return <div>
    {paths.map((path, index) => {
    if (path === "")
      return null;
    if (index === 0)
      return <a className='px-1 ease-linear duration-100 text-neutral-400 hover:text-white' href="/">{path}</a>;
    lastPath += path + '/';
    path = path.split('-');
    path = path.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return <>{character}<a className='px-1 ease-linear duration-100 text-neutral-400 hover:text-white' href={`/${lastPath}`}>{path}</a></>;
  })}</div>;
}

function Topbar() {
  const location = useLocation();

  return (
    <div id="topbar" className='flex flex-row justify-between w-full bg-stone-900 text-white pattern-opacity-100 p-2'>
      <div>
        <CreateBreadcrumb pathname={location.pathname} />
      </div>
      <div>
        <h2 className='text-xl font-semibold my-2 mr-5'><a href="/profile">My profile</a></h2>
      </div>
    </div>
  );
}

export default Topbar;