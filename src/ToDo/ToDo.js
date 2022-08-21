import React, { useState } from 'react'
import { useEffect } from 'react';
import Item from './Item';
import './ToDo.css'

const getLocalStorage = () => {
    const lists = localStorage.getItem("ToDoList")

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

function ToDo() {

    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState(getLocalStorage());
    const [toggle, setToggle] = useState(false);
    const [editItemId, setEditItemId] = useState();

    const inputEvent = (e) => {
        setInputData(e.target.value);
    }

    // adding to local storage
    useEffect(() => {
        localStorage.setItem("ToDoList", JSON.stringify(item))
    }, [item])


    const addItem = () => {
        if (inputData == "") {
            alert('please fill the input')
        }
        else if (inputData && toggle) {

            setItem(
                item.map((curElem) => {
                    if (curElem.id === editItemId) {
                        return { ...curElem, name: inputData };
                    }
                    return curElem;
                })
            );

            setInputData("");
            setToggle(false);
            setEditItemId();
        }
        else {

            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }

            setItem([...item, myNewInputData]);
            setInputData("")
        }
    }

    const editItem = (id) => {
        const isEditItem = item.find((curElm) => {
            return curElm.id == id;
        })

        setInputData(isEditItem.name);
        setToggle(true);
        setEditItemId(id);
    }

    const removeAll = () => {
        setItem([]);
    }


    const deleteItem = (id) => {
        const updatedItem = item.filter((curElm) => {
            return curElm.id !== id;
        });

        setItem(updatedItem);
    }


    return (
        <>

            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input className='form-control' type="text"
                            placeholder='✍ Add Item'
                            value={inputData}
                            onChange={inputEvent}
                        />

                        <i className="far fa-edit add-btn" onClick={addItem}></i>

                    </div>

                    <div className="showItems">

                        <Item item={item} deleteItem={deleteItem} editItem={editItem} />

                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ToDo