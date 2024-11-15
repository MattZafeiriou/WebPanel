import '../../../CSS/Topbar.css';
import { useLocation } from 'react-router-dom';

function CreateBreadcrumb(pathname) {
  const paths = pathname.pathname.split('/');
  paths[0] = 'Home';
  let lastPath = '';
  return <div className='row breadcrumps'>{paths.map((path, index) => {
    if (path === "")
      return null;
    if (index === 0)
      return <a href="/">{path}</a>;
    lastPath += path + '/';
    path = path.split('-');
    path = path.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return <>/<a href={`/${lastPath}`}>{path}</a></>;
  })}</div>;
}

function Topbar() {
  const location = useLocation();

  return (
    <div id="topbar" className='container container-inside container-box-shadow background-secondary row'>
      <div>
        <CreateBreadcrumb pathname={location.pathname} />
      </div>
      <div>
        <h2><a href="/profile">My profile</a></h2>
      </div>
    </div>
  );
}

export default Topbar;