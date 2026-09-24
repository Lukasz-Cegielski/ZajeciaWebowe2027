export default function Navbar(){
    return(
        <nav className="navbar navbar-expand bg-body-tertiary border-bottom">
            <div className="container">
                <a href="#" className="navbar-brand fw-bold">Galeria Podróży</a>
                <button className="navbar-toggler" type= "button" data-bs-toggle = "collapse" data-bs-target="#MenuGlowne" aria-controls = "menuGlowne" aria-expanded ="false" aria-label="Przełącz menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" id="menuGlowne">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#galeria" className="nav-link active" aria-current = "page">
                                Galeria
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#kategorie" className="nav-link">Kategorie</a>
                        </li>
                        <li className="nav-item">
                            <a href="#stopka" className="nav-link">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};