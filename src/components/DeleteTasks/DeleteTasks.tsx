import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './DeleteTasks.css'


function DeleteTasks(props) {
  const {list, setList} = props;

  function handleClickDeleteTasks(e) {
    e.preventDefault();

    const newList = list.filter((item) => !item.completed)
    setList(newList);

    /*api.deleteTask(id)
      .then((listData) => {

      })
      .catch((err) => {
        console.log(err)
      })*/
  }

  return (
    <form className="container__input-deletetasks">
      <button 
        className="container__button-deletetasks"
        onClick={(e) => handleClickDeleteTasks(e)}  
      >
        Удалить завершенные задачи
      </button>
    </form>
  )
}

export default DeleteTasks;