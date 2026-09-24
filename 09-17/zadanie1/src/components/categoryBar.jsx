export default function CategoryBar(){
    return(
        <div className="d-flex flex-wrap gap-2 mb-4" id="kategorie">
            <button className="btn btn-outline-primary active" type="button" aria-pressed = "true">Wszystkie</button>
            <button className="btn btn-outline-primary" type="button">Góry</button>
            <button className="btn btn-outline-primary" type="button">Morze</button>
            <button className="btn btn-outline-primary" type="button">Miasto</button>
        </div>
    )
}