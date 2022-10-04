import React, { useState } from 'react'

const MyAccordian = ({question,answer}) => {
    const [show, showList] = useState(false);
    return (
        <>
          <div className='main-heading'>
            <p className='que' onClick={() => showList(!show)}>{show? '➖' : '➕'  }</p>
            <h3>{question}</h3>
          </div>
            {
                show &&<p className='ans'>{answer}</p>

            }
          
        </>
    )
}

export default MyAccordian