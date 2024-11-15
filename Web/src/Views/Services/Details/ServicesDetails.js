

function ServicesDetails() {
    const service = window.location.pathname.split('/')[2];
    return (
        <div>
        <h1>Services Details: {service}</h1>
        </div>
    );
}

export default ServicesDetails;