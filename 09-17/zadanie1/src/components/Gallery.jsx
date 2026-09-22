import photos from '../data/photos.json'
import PhotoCard from './PhotoCardk.jsx'
export default function Gallery(){
    return(
        <div className="row g-4" id="galeria">
            {photos.map(photo => (
                <div className="col-12 col-md-6 col-lg-4" key={photo.id}>
                    <PhotoCard {...photo}/>
                </div>
            ))}
        </div>
    )
}