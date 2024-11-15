
function DesktopAppDevelopment() {
    return (
        <div className="container container-inside">
            <div className="background container-box-shadow container-inside">
                <h2>Desktop App Development</h2>
                <hr/>
                <form action="" method="post" className="container column" style={{width: '30vw'}}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" required/>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default DesktopAppDevelopment;