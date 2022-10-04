import React, { useState } from 'react'
import { questions } from './Api';
import "./Accordian.css"
import MyAccordian from './MyAccordian';
import who from '../images/who.jpg';
const Accordian = () => {
    const [data, setdata] = useState(questions);

    return (
        <div className='box'>
            <section className='main-div'>
            <img src={who}  alt='img'/>
                <h1>who me?</h1>
                {
                    data.map((currElem) => {

                        const { id } = currElem;
                        return <MyAccordian key={id}{...currElem} />
                    })
                }
            </section>
        </div>
    )
}

export default Accordian