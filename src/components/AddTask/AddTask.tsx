import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './AddTask.css'


function AddTask(props) {
  const {list, setList} = props;

  const [textTask, setTextTask] = useState('');
  const userId = 1;
  
  function handleChange(e) {
    const value = e.target.value;

    setTextTask(value)
  }

  function handleClickAddtask(e) {
    e.preventDefault();

    api.addTask(textTask, false, userId)
      .then((listData) => {
        const newList = list.slice();
        newList.push(listData);

        setList(newList);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className="container__input-addtask">
      <input 
        type="text"
        value={textTask}
        onChange={(e) => handleChange(e)}
      ></input>

      <button 
        className="container__button-addtask"
        onClick={(e) => handleClickAddtask(e)}  
      >
        Добавить задачу
      </button>
    </form>
  )
}

export default AddTask;