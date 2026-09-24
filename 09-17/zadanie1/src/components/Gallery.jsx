import { Fragment } from 'react'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'
export default function Gallery({zdjecia,onUsun}) {
    return (
        <div className="row g-4" id="galeria">
            {zdjecia.map(zdjecie => (
                <Fragment key={zdjecie.id}>
                    <div className="col-12 col-md-6 col-lg-4">
                        <PhotoCard {...zdjecie} onUsun={() => onUsun(zdjecie.id)}/>
                    </div>
                    <PhotoModal {...zdjecie} />
                </Fragment>
            ))}
        </div>
    )
}