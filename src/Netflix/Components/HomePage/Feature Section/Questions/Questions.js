import React, { useState } from 'react'
import './Questions.css'
import { questions } from '../../../../Fetchdata/Data';
import SingleQuest from './SingleQuest';

const Questions = () => {

    return (
        <section className='question_section'>
            <div className='questions'>
                <h1 style={{ textAlign: "center", fontSize: '3rem'}} >Frequently Asked Questions</h1>

                <div className="questions_div">

                    {
                        questions.map((item) => {
                            const { ques, ans, id } = item;

                            return (
                                <SingleQuest ques={item.ques} ans={item.ans} id={item.id} />
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Questions