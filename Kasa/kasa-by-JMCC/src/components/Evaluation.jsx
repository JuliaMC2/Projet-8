import '../index.css'
import '../index_mobile.css'

import star_active from '../assets/star_active.png'
import star_inactive from '../assets/star_inactive.png'

export default function Evaluation(props) {
    const rating = parseInt(props.rating)
    var formattedContent = new Array()
    var i

    for (i=0; i<rating; i++) 
        formattedContent.push(star_active)
    for (i=rating; i<5; i++)
        formattedContent.push(star_inactive)

    return (
        <>
        {formattedContent.map(function(object, index) {return (<img className="evaluationStar" key={index} src={object}></img>)})}
        </>
    )
}