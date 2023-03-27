import React, { useContext } from 'react'
import { Avatar, Button, Typography } from '..'
import { QUIZ_RULES, QUIZ_WARNING } from '../../Constants'
import { AppContext } from '../../Context/AppContext'
import { quizRules } from '../../Utils'

const Drawer = ({ handleUpdateAppState }) => {
    const { timeTaken, setTimeTaken } = useContext(AppContext)

    const handleStart = () => {
        setTimeTaken({ ...timeTaken, startTime: new Date() })
        handleUpdateAppState(1)
    }
    return (
        <div className={"p-1 w-fit"}>
            <Typography text={QUIZ_RULES} classname="heading" />
            {
                quizRules.map(quizRule => <div className='flex gap-1 pt-1'>
                    <div className='flex justify-center items-center'>
                        <Avatar className={"bg-grey"} />
                    </div>
                    <div className='flex flex-col justify-center'>

                        <Typography text={quizRule.label} classname="title" />
                        <Typography text={quizRule.body} classname="body" />
                    </div>
                </div>)
            }
            <div className='bg-grey body-2 warning-box flex items-center'>
                <Avatar width={10} height={10} className={"p-bg"} />
                <Typography text={QUIZ_WARNING} classname="body-2" />

            </div>

            <Button
                onClick={handleStart}
                text="Start" className={"m-auto p-bg color-white"} />







        </div>
    )
}

export default Drawer