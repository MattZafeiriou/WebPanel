function AddPayment(props) {
    return (
        <div className="container row">
            <h4 style={{ color: 'rgb(200,200,200)', fontSize: '0.9rem', width: '8%', marginTop: '.5rem' }}>{props.timestamp}</h4>
            <div style={{width: '92%'}} className="container container-inside column background-secondary container-text">
                <h3>{props.amount}{'€'}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

function Payments() {
    return (
        <div className="container container-inside no-select" style={{height: '100%'}}>
            <div className="background container-box-shadow container-inside" style={{maxHeight: '100%', overflowY: 'auto', boxSizing: 'border-box'}}>
                <h2>Payments History</h2>
                <hr />
                <div className="container column" style={{height: '100%'}}>
                    <AddPayment amount="75.00" description="Second Payment for service Nigga." timestamp="2024-01-01 12:00" />
                    <AddPayment amount="50.00" description="First Payment for service Nigga." timestamp="2022-01-01 12:00" />
                </div>
            </div>
        </div>
    );
}

export default Payments;