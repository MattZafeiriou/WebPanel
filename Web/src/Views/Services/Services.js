import { useEffect } from "react";
import BoxContainer from "../Utils/BoxContainer/BoxContainer";

function Services() {

    useEffect(() => {
        document.title = 'Services';
    });

    const box = {
        title: 'Website Development',
        details: <div className="column" style={{margin: '1rem 0'}}>
            <p>This is a website</p>
            <p>It is being created today</p>
        </div>,
        href: '/services/service1',
        buttons: [
            {
                text: 'Open Service',
                href: '/services/service1',
                className: 'button-text',
            },
            {
                text: 'Open Website',
                href: 'https://www.google.com',
                className: 'button-text button-danger',
            }
        ]
    };

    const newOrder = {
        title: 'Place a new order',
        details: <div className="column" style={{margin: '1rem 0'}}>
            <p>Order a new service</p>
            <p>Talk to our team</p>
        </div>,
        href: '/services/new-order',
        buttons: [
            {
                text: 'Place Order',
                href: '/new-order',
                className: 'button-text',
            }
        ]
    }

    return (
        <div className='container container-inside'>
            <h2 className="header-text">My Services</h2>
            <hr style={{borderTopColor: 'rgba(0, 0, 0, 0.3)'}} />
            <div className="container grid grid-c4">
                <BoxContainer title={box.title} details={box.details} href={box.href} buttons={box.buttons} />
                <BoxContainer title={newOrder.title} details={newOrder.details} href={newOrder.href} buttons={newOrder.buttons} />
            </div>
        </div>
    );
}

export default Services;