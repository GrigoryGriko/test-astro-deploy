import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './Task.css'


function Task(props) {
  const {userId, id, todo, completed} = props.item;
  const {num, list, setList} = props;

  function handlePutCheckbox(num) {
    const newList = list.slice();
  
    newList.map((item, index, arr) => {
      if (index === num - 1) {
        return arr[index].completed = !arr[index].completed;
      } else {
        return item;
      }
    })

    setList(newList);

    /*
    api.completeTask(id, completed)
      .then((listData) => {
        const newList = list.slice();
  
        newList.map((item, index, arr) => {
          if (index === num - 1) {
            return arr[index].completed = !arr[index].completed;
          } else {
            return item;
          }
        })
    
        setList(newList);
      })
      .catch((err) => {
        console.log(err)
      })
    */
  }

  return (
    <div className="container__item">
      <input 
        type="checkbox"
        checked={completed}
        onChange={() => handlePutCheckbox(num)}
      ></input>
      &nbsp;
      <p className="container__name">
        {num}. {todo}
      </p>
    </div>
  )
}

export default Task;