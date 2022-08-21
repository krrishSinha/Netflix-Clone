import React, {useState} from 'react'

const SingleQuest = ({ques, ans, id}) => {

    const [show, setShow] = useState(false);
    
    const showAns  = ()=>{
        setShow(!show)
    }

    return (
        <div className="single_question" key={id} >
            <div style={{cursor: 'pointer'}} className='ques' onClick={() => showAns()} >
                <h1> {ques} </h1>
                <h1> &gt; </h1>
            </div>

            {show && <div className='ans'>
                <h1> {ans} </h1>
            </div>}
        </div>
    )
}

export default SingleQuest