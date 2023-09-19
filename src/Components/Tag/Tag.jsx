import React from 'react'

const Tag = ({title}) => {
    return (
        <div>
            <div className="tag">
                <h2 className="title">{title} </h2>
            </div>
        </div>
    )
}

export default Tag