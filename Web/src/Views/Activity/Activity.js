function AddActivity(props) {
    return (
        <div className="container row">
            <h4 style={{ color: 'rgb(200,200,200)', fontSize: '0.9rem', width: '8%', marginTop: '.5rem' }}>{props.timestamp}</h4>
            <div style={{width: '92%'}} className="container container-inside column background-secondary">
                <h3>{props.type}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

function Activity() {
    return (
        <div className="container container-inside no-select" style={{height: '100%'}}>
            <div className="background container-box-shadow container-inside" style={{maxHeight: '100%', overflowY: 'scroll', boxSizing: 'border-box'}}>
                <h2>Activity Log</h2>
                <hr />
                <div className="container column" style={{height: '100%'}}>
                    <AddActivity type="Revision" description="Website Revision completed." timestamp="2022-01-01 12:00" />
                    <AddActivity type="Development" description="Website Development started." timestamp="2022-01-01 12:00" />
                </div>
            </div>
        </div>
    );
}

export default Activity;