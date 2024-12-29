import { useEffect } from "react";
import BoxContainer from "../Utils/BoxContainer/BoxContainer";

function Services() {

    useEffect(() => {
        document.title = 'Services';
    });

    const box = {
        title: 'Website Development',
        details: <div>
            <p>This is a website</p>
            <p>It is being created today</p>
        </div>,
        href: '/services/service1',
        buttons: [
            {
                text: 'Open Service',
                href: '/services/service1',
                className: 'button-text',
                external: false
            },
            {
                text: 'Open Website',
                href: 'https://www.google.com',
                className: 'button-text button-danger',
                external: true
            }
        ]
    };

    const newOrder = {
        title: 'Place a new order',
        details: <div>
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
        <div className='bg-neutral-900/90 rounded text-white p-4 select-none'>
            <h2 className="text-2xl font-bold pb-2  ">My Services</h2>
            <hr/><br/>
            <div className="grid grid-cols-4 gap-4">
                <BoxContainer title={box.title} details={box.details} href={box.href} buttons={box.buttons} />
                <BoxContainer title={newOrder.title} details={newOrder.details} href={newOrder.href} buttons={newOrder.buttons} />
            </div>
        </div>
    );
}

export default Services;