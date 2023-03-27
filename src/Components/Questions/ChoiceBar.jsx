import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../Context/AppContext'

const ChoiceBar = ({ label, option, index, correct }) => {
    const inputRef = useRef(null)
    const [enter, setEnter] = useState(false)
    const { setScore, score } = useContext(AppContext);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(false)
    }, [option])

    return (
        <div className='choice-bar flex gap-1'
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}

            onClick={() => {
                setIsChecked(true)

                if (index === correct) {
                    setScore(score + 1)
                }

                inputRef?.current.click()
            }}>
            <div className={`choice w-fit ${enter ? "border-white" : "border-black"}`}>{label}</div>
            <div className='flex justify-between items-center w-full'>

                <label htmlFor="" className='body'>{option}</label>
                <input
                    checked={isChecked}
                    ref={inputRef} type="radio" name="options" />
            </div>
        </div>
    )
}

export default ChoiceBar