import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import './AddTask.css'


function AddTask(props) {
  const {list, setList} = props;

  const [textTask, setTextTask] = useState('');
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [isStyleDisabled, setIsStyleDisabled] = useState(' container__button-addtask_disabled');
  const userId = 1;
  
  function handleChange(e) {
    const value = e.target.value;
    setTextTask(value)
  }

  useEffect(() => {
    if (!textTask) {
      setIsDisabled(true)
      setIsStyleDisabled(' container__button-addtask_disabled')
    } else {
      setIsDisabled(false)
      setIsStyleDisabled('')
    }
  }, [textTask])

  function handleClickAddtask(e) {
    e.preventDefault();

    api.addTask(textTask, false, userId)
      .then((listData) => {
        const newList = list.slice();
        newList.push(listData);

        setList(newList);
        setTextTask('')
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
        disabled={isDisabled}
        className={`container__button-addtask ${isStyleDisabled}`}
        onClick={(e) => handleClickAddtask(e)}  
      >
        Добавить задачу
      </button>
    </form>
  )
}

export default AddTask;