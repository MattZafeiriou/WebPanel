import ServiceTasks from "../Tasks/ServiceTasks";


function ServicesDetails() {
    const service = window.location.pathname.split('/')[2];
    const tab = window.location.pathname.split('/')[3];
    if (tab == 'tasks')
        return <ServiceTasks />;
    return (
        <div>
        <h1>Services Details: {service}</h1>
        </div>
    );
}

export default ServicesDetails;