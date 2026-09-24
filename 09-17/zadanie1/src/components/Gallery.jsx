import photos from '../data/photos.json'
import { Fragment } from 'react'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'
export default function Gallery() {
    return (
        <div className="row g-4" id="galeria">
            {photos.map(photo => (
                <Fragment key={photo.id}>
                    <div className="col-12 col-md-6 col-lg-4">
                        <PhotoCard {...photo} />
                    </div>
                    <PhotoModal {...photo} />
                </Fragment>
            ))}
        </div>
    )
}