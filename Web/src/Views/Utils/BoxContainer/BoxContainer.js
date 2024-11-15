function BoxContainer(props) {
    return (
        <div className="container-inside container-box-shadow background no-select" style={props.style}>
            <h3><a href={props.href}>{props.title}</a></h3>
            <hr />
            <div>
                <div style={{ color: 'rgb(220,220,220)' }}>{props.details}</div>
                <div className="container row">
                    {props.buttons ? props.buttons.map((button, index) => {
                        return <button key={index} id={button.id} className={button.className} onClick={
                            () => {
                                if (button.href) {
                                    window.location.href = button.href;
                                }
                            }
                        }>{button.text}</button>
                    }) : null}
                </div>
            </div>
        </div>
    );
}

export default BoxContainer;