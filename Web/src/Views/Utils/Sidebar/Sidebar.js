import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
//import '../../../CSS/Sidebar.css';

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

    function SidebarItem(props) {
        return (
            <h2 id={props.id} className='ease-linear duration-100 hover:bg-purple-950 py-0.5 px-2 m-1 rounded text-xl'>
                <a href={props.href} className='flex flex-row w-full justify-between items-center group relative'>
                    <span className='mb-1'>{props.name}</span><i className={`fa-solid fa-${props.icon} opacity-0 group-hover:opacity-100 transition-opacity`}></i>
                </a>
            </h2>
        );
    }

    return (
        <div className='h-screen bg-neutral-900 text-white container-box-shadow flex flex-col w-60'>
            <h1 className='font-semibold text-2xl py-3 mx-2'><a href="/">Web Panel</a></h1>
            <hr />
            <div className='flex-col flex justify-between h-full ' id="sidebar-items">
                <div className='container-section'>
                    {isServicesSubpath ?
                        <>
                            <SidebarItem id='sidebar-services-details' name='Details' icon='info' href={`/services/${serviceName}`} />
                            <SidebarItem id='sidebar-services-tasks' name='Tasks' icon='tasks' href={`/services/${serviceName}/tasks`} />
                            <SidebarItem id='sidebar-services-revisions' name='Revisions' icon='history' href={`/services/${serviceName}/revisions`} />
                            <SidebarItem id='sidebar-services-invoices' name='Invoices' icon='file-invoice' href={`/services/${serviceName}/invoices`} />
                            <SidebarItem id='sidebar-services-milestones' name='Milestones' icon='flag' href={`/services/${serviceName}/milestones`} />
                            <SidebarItem id='sidebar-services-notes' name='Notes' icon='sticky-note' href={`/services/${serviceName}/notes`} />
                            <SidebarItem id='sidebar-services-reports' name='Reports' icon='chart-bar' href={`/services/${serviceName}/reports`} />
                        </> :
                        <>
                            <SidebarItem id='sidebar-services' name='Services' icon='tasks' href='/services' />
                            <SidebarItem id='sidebar-activity' name='Activity Log' icon='clipboard-list' href='/activity' />
                            <SidebarItem id='sidebar-payments' name='Invoices' icon='money-bill' href='/payments' />
                            <SidebarItem id='sidebar-chathub' name='Chat Hub' icon='comment' href='/chathub' />
                        </>
                    }
                </div>
                <div className='container-section'>
                    <hr />
                    <SidebarItem id='sidebar-settings' name='Settings' icon='cog' href='/settings' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;