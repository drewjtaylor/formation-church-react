import CrossGreaterThan from "../fontawesomeicons/CrossGreaterThan";


const Jumbotron = () => {
    return (
        <header className="jumbotron jumbotron-fluid mb-0 primary-font">
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-3 align-self-center title-logo">
                    <CrossGreaterThan />
                </div>
                <div className="col">
                <h1>Formed Church</h1>
                <h4 className="d-none d-sm-block">Christ-centered, Community-focused</h4>
                </div>
            </div>
        </div>
    </header>
    )
};

export default Jumbotron;