function BoxContainer(props) {
    return (
        <div className="select-none bg-neutral-900 p-3 box-border flex flex-col" style={props.style}>
            <h3><a href={props.href}>{props.title}</a></h3>
            <hr />
            <div className="flex flex-col justify-between h-full box-border pt-1">
                <div className="text-neutral-300">{props.details}</div>
                <div className="flex flex-row gap-2 justify-end pt-2">
                    {props.buttons ? props.buttons.map((button, index) => {
                        return <button key={index} id={button.id} className={`${button.className} btn`} onClick={
                            () => {
                                if (button.href) {
                                    if (button.external)
                                        window.open(button.href, '_blank');
                                    else
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