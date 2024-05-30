import { useState } from 'react'

import '../index.css'
import '../index_mobile.css'

import arrow_left from '../assets/arrow_left.png'
import arrow_right from '../assets/arrow_right.png'

export default function Carousel(props) {
    const pictures = props.pictures

    var [index, setIndex] = useState(0)
    if (index == -1)
        index = pictures.length - 1
    if (index == pictures.length)
        index = 0


    return (
        <>
       	<div id="banner">
            <img className="banner_img" src={pictures[index]}></img>
            <img className="arrow arrow_left" src={arrow_left} onClick={() => setIndex(index-1)}></img>
            <img className="arrow arrow_right" src={arrow_right} onClick={() => setIndex(index+1)}></img>
            <div className="position">{index+1}/{pictures.length}</div>
        </div>
        </>
    )
}