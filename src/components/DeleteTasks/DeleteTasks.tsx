import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './DeleteTasks.css'


function DeleteTasks(props) {
  const {list, setList} = props;
  
  const [isDisabledDelTask, setIsDisabledDelTask] = useState(false);
  const [styleDisabledDelTask, setStyleDisabledDelTask] = useState(' container__input-deletetasks_disabled');

  
  function checkElementsCompleted(list) {
    return list.some(item => item.completed)
  }

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

  useEffect(() => {
    const isCompleted = checkElementsCompleted(list)
    setIsDisabledDelTask(!isCompleted)

    isCompleted ? 
      setStyleDisabledDelTask('') :
      setStyleDisabledDelTask(' container__input-deletetasks_disabled')
  }, [list])

  return (
    <form className="container__input-deletetasks">
      <button
        disabled={isDisabledDelTask}
        className={`container__button-deletetasks ${styleDisabledDelTask}`}
        onClick={(e) => handleClickDeleteTasks(e)}  
      >
        Удалить завершенные задачи
      </button>
    </form>
  )
}

export default DeleteTasks;