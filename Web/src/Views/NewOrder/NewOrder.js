import BoxContainer from "../Utils/BoxContainer/BoxContainer";
import websiteImg from '../../res/website.png';
import desktopImg from '../../res/desktop.jpg';
import mobileImg from '../../res/mobile.jpg';
import maintenanceImg from '../../res/maintenance.jpg';

function newOrder() {
    const website = {
        title: 'Website Development',
        details: <div className="column" style={{margin: '1rem 0'}}>
            <img src={websiteImg} alt="Website" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
        </div>,
        href: '/new-order/website',
        buttons: [
            {
                text: 'Place Order',
                href: '/new-order/website',
                className: 'button-text',
            }
        ]
    };

    const desktopApp = {
        title: 'Desktop App Development',
        details: <div className="column" style={{margin: '1rem 0'}}>
            <img src={desktopImg} alt="Desktop Application" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
        </div>,
        href: '/new-order/desktop-app',
        buttons: [
            {
                text: 'Place Order',
                href: '/new-order/desktop-app',
                className: 'button-text',
            }
        ]
    };

    const mobileApp = {
        title: 'Mobile App Development',
        details: <div className="column" style={{margin: '1rem 0'}}>
            <img src={mobileImg} alt="Mobile Application" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
        </div>,
        href: '/new-order/mobile-app',
        buttons: [
            {
                text: 'Place Order',
                href: '/new-order/mobile-app',
                className: 'button-text',
            }
        ]
    };

    const maintain = {
        title: 'Maintenance',
        details: <div className="column" style={{margin: '1rem 0'}}>
            <img src={maintenanceImg} alt="Maintenance" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
        </div>,
        href: '/new-order/maintenance',
        buttons: [
            {
                text: 'Place Order',
                href: '/new-order/maintenance',
                className: 'button-text',
            }
        ]
    };

    return (
        <div className='container container-inside'>
            <h2 className="header-text">Place a new order</h2>
            <hr style={{borderTopColor: 'rgba(0, 0, 0, 0.3)'}} />
            <div className="container grid grid-c4">
                <BoxContainer title={website.title} details={website.details} href={website.href} buttons={website.buttons} />
                <BoxContainer title={desktopApp.title} details={desktopApp.details} href={desktopApp.href} buttons={desktopApp.buttons} />
                <BoxContainer title={mobileApp.title} details={mobileApp.details} href={mobileApp.href} buttons={mobileApp.buttons} />
                <BoxContainer title={maintain.title} details={maintain.details} href={maintain.href} buttons={maintain.buttons} />
            </div>
        </div>
    );
}

export default newOrder;