import React from 'react'

function Item(props) {
    return (
        <>

            {
                props.item.map((curElm) => {
                    return <div className='eachItem' key={curElm.id}>
                        <h3> {curElm.name} </h3>
                        <div className="todo-btn">
                            <i className="far fa-edit add-btn" onClick={()=>{
                                props.editItem(curElm.id)
                            }} ></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>{
                                props.deleteItem(curElm.id);
                            }} ></i>
                        </div>
                    </div>
                })
            }

        </>
    )
}

export default Item