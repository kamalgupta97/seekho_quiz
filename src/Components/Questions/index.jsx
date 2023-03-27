import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { QuestionsData } from '../../Utils'
import Button from '../Common/Button'
import Chip from '../Common/Chip'
import OtpTimer from '../Timer/timer'
import Question from './Question'

const Questions = ({ handleUpdateAppState }) => {
    const [active, setActive] = useState(0);
    const { timeTaken, setTimeTaken, over } = useContext(AppContext)
    const handleSubmit = () => {
        if (active < 4) {
            setActive(active + 1)
        }
        else {
            setTimeTaken({ ...timeTaken, endTime: new Date() })
            handleUpdateAppState(1)
        }
    }

    useEffect(() => {
        if (over) {
            handleUpdateAppState(1)
        }
    }, [over])

    return (
        <div className='p-1'>
            <div className='flex justify-between w-full'>
                <Chip text={`0${active + 1}/0${QuestionsData.length}`} className="s-bg" />
                <OtpTimer
                />
            </div>
            <Question question={QuestionsData[active]} />

            <Button onClick={handleSubmit} text={active === 4 ? "Submit" : "Next"} className={"m-auto p-bg color-white"} />


        </div>
    )
}

export default Questions