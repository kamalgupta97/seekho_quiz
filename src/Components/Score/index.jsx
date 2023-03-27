import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { calculateTime, QuestionsData } from '../../Utils'
import Typography from '../Common/Typography'

const Score = () => {
    const { score, time, timeTaken } = useContext(AppContext);
    return (
        <div className='w-full h-full p-bg'>
            <div className='p-1'>
            </div>
            <div className='score-card p-1 flex justify-between'>
                <div>
                    <Typography text="Your Score" classname={"title"} />
                    <Typography text={`${score}/${QuestionsData.length}`} classname={"heading p-clr"} />
                </div>
                <div>
                    <Typography text="Time Taken" classname={"title"} />
                    <Typography text={`0:${timeTaken.seconds - time.seconds > 9 ? timeTaken.seconds - time.seconds : ("0" + (timeTaken.seconds - time.seconds))}`} classname={"heading p-clr"} />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Score