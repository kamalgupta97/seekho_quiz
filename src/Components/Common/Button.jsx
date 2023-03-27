import React from 'react'
import Typography from './Typography'

const Button = ({ className, text, onClick }) => {
    return (
        <div onClick={onClick} className={`${className} w-fit button`}><Typography text={text} classname="body" /></div>
    )
}

export default Button