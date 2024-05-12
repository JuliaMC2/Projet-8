import { Link } from 'react-router-dom'

import '../index.css'

export default function Summary(props) {
    const linkToPlace="logement/"+props.id
    return (
        <>
            <Link className='thumbCard' to={linkToPlace}>
                <img src={props.cover} className='thumbCover'/>
                <div className='thumbText'>{props.title}</div>
            </Link>
        </>
    )
}
