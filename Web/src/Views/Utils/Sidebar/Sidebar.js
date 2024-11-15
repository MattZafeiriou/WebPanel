import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import '../../../CSS/Sidebar.css';

function Sidebar() {

    const location = useLocation();
    const isServicesSubpath = matchPath({
        path: '/services/:service/*',
        exact: false,
        strict: false
    }, location.pathname);
    let serviceName = '';
    if (isServicesSubpath)
        serviceName = location.pathname.split('/')[2];

    useEffect(() => {
        console.log('bruh')
        document.getElementById('logout-button').addEventListener('click', () => {
            fetch('http://localhost:8000');
        });

        const pathname = window.location.pathname;
        let id = pathname.replaceAll('/', '-');
        if (id.at(-1) === '-')
            id = id.slice(0, -1);
        if (isServicesSubpath)
            id = id.replace('-' + serviceName, '');
        if (serviceName !== '' && id === '-services')
            id = '-services-details';


        if (document.getElementById('sidebar' + id)) {
            document.getElementById('sidebar' + id).classList.add('active');
        }
    });

    return (
        <div className='container container-inside background container-box-shadow column no-select' style={{ width: '300px', height: '100vh', gap: '0' }}>
            <h1><a href="/">Web Panel</a></h1>
            <hr />
            <div className='container-box column' id="sidebar-items" style={{ justifyContent: 'space-between', height: '100%' }}>
                <div className='container-section'>
                    {isServicesSubpath ?
                        <>
                            <h2 className='container-text' id="sidebar-services-details"><a href={`/services/${serviceName}`} className='row'>Details<i style={{marginRight: '.3rem'}} className="fa-solid fa-info"></i></a></h2>
                            <h2 className='container-text' id="sidebar-services-tasks"><a href={`/services/${serviceName}/tasks`} className='row'>Tasks<i className="fa-solid fa-tasks"></i></a></h2>
                            <h2 className='container-text' id="sidebar-services-revisions"><a href={`/services/${serviceName}/revisions`} className='row'>Revisions<i className="fa-solid fa-history"></i></a></h2>
                            <h2 className='container-text' id="sidebar-services-invoices"><a href={`/services/${serviceName}/invoices`} className='row'>Invoices<i className="fa-solid fa-file-invoice"></i></a></h2>
                            <h2 className='container-text' id="sidebar-services-milestones"><a href={`/services/${serviceName}/milestones`} className='row'>Milestones<i className="fa-solid fa-flag"></i></a></h2>
                            <h2 className='container-text' id="sidebar-services-notes"><a href={`/services/${serviceName}/notes`} className='row'>Notes<i className="fa-solid fa-sticky-note"></i></a></h2>
                            <h2 className='container-text' id="sidebar-services-reports"><a href={`/services/${serviceName}/reports`} className='row'>Reports<i className="fa-solid fa-chart-bar"></i></a></h2>
                        </> :
                        <>
                            <h2 className='container-text' id="sidebar-services"><a href="/services" className='row'>My Services<i className="fa-solid fa-cog"></i></a></h2>
                            <h2 className='container-text' id="sidebar-activity"><a href="/activity" className='row'>Activity Log<i className="fa-solid fa-clipboard-list"></i></a></h2>
                            <h2 className='container-text' id="sidebar-payments"><a href="/payments" className='row'>Payments<i className="fa-solid fa-money-bill"></i></a></h2>
                            <h2 className='container-text' id="sidebar-chathub"><a href="/chathub" className='row'>Chat Hub<i className="fa-solid fa-comment"></i></a></h2>
                            <h2 className='container-text' id="sidebar-new-order"><a href="/new-order" className='row'>New Order<i className="fa-solid fa-plus"></i></a></h2>
                        </>
                    }
                </div>
                <div className='container-section' id="logout_button">
                    <hr />
                    <h2 className='container-text' style={{ marginBottom: '-0.5rem' }}><button className='row' id="logout-button">Logout<i className="fa-solid fa-right-from-bracket"></i></button></h2>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;