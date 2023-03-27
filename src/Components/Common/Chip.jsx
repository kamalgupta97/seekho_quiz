import React from 'react'
import Typography from './Typography'

const Chip = ({ className, text }) => {
    return (
        <div className={`${className} chip`}>
            <Typography text={text} classname="body" />
        </div>
    )
}

export default Chip