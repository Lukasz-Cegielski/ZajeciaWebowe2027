import PhotoCard from './PhotoCard'
export default function Gallery({zdjecia,onUsun,onPrzelacz}) {
    return (
        <div className="row g-4" id="galeria">
            {zdjecia.map(zdjecie => (
                
                    <div key={zdjecie.id} className="col-12 col-md-6 col-lg-4">
                        <PhotoCard {...zdjecie} onUsun={() => onUsun(zdjecie.id)} onPrzelacz = {() => onPrzelacz(zdjecie.id)}/>               
                </div>
            ))}
        </div>
    )
}