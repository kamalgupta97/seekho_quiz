import React from 'react'
import { optionLabel } from '../../Utils'
import Typography from '../Common/Typography'
import ChoiceBar from './ChoiceBar'

const Question = ({ question }) => {
    return (
        <div className='pt-1'>
            <div className='h-10'>
                <Typography
                    classname={"body"}

                    text={question?.question} />

            </div>
            <div>

                {question?.choice?.map((option, index) => <ChoiceBar key={optionLabel[index]} label={optionLabel[index]}
                    option={option} index={index} correct={question?.correct} />)}

            </div>
        </div>
    )
}

export default Question