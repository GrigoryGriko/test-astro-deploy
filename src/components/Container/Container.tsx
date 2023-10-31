import * as api from '../../utils/Api';
import {useState, useEffect} from 'react';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';
import DeleteTasks from '../DeleteTasks/DeleteTasks';


function Container() {
  const [list, setList] = useState([]);

  //const [maxCountList, setMaxCountList] = useState(10);

  /*function listLimiter(list) {
    return list.slice().splice(0, maxCountList);
  }*/

  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem("todoList"));

    if (oldList) {
      setList(oldList)
    } else {
      api.getTodoList()
      .then((res) => {
        setList(res.todos);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [])

  
  
  useEffect(() => { 
    localStorage.setItem("todoList", JSON.stringify(list))
  }, [list])

  return (
    <div className="container__list">
      <DeleteTasks
        list={list}
        setList={setList}
      />
      <AddTask 
        list={list}
        setList={setList}
      />

      {list ? list.map((item, index) => (
        <Task
          key={`pl${index}`}
          num={index + 1}
          item={item}
          list={list}
          setList={setList}
        />
      )) : ''}
    </div>
  )
}

export default Container;