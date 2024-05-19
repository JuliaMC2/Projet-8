import { useState } from 'react'

import '../index.css'
import '../index_mobile.css'

import upwardArrow from'../assets/upward_caret.png'
import downwardArrow from'../assets/downward_caret.png'

export default function Collapse(props) {
    const [showMe, setShow] = useState(false)

    const formattedContent = props.content.map ((object) => <span className='colllapseContentLine'>{ object }<br/></span>)

    return (
    <>
    <div className="collapse">
        <div className='collapseTitleBar' onClick={() => setShow(!showMe)}>
            <div className='collapseTile' onClick={() => setShow(!showMe)}> { props.title } </div>
            <img className='collapseArrow'onClick={() => setShow(!showMe)} src={showMe ? downwardArrow : upwardArrow}></img>
        </div>
        {showMe ? <div className='collapseContent'>{ formattedContent }</div> : null}
    </div>
    </>)
}