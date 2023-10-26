const baseUrl = 'https://dummyjson.com/';

const countLimit = "?limit=10&skip=0";

function _getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
  
export function getTodoList() {
  return fetch(`${baseUrl}todos${countLimit}`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    },
  }).then(res => _getResponseData(res))
}

export function addTask(todo, completed, userId) {
  return fetch(`${baseUrl}todos/add`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: todo,
      completed: completed,
      userId: userId,
    })
  }).then(res => _getResponseData(res))
}

export function completeTask(id, completed) {
  return fetch(`${baseUrl}todos/${id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      completed: completed,
    })
  }).then(res => _getResponseData(res))
}

export function deleteTask(id) {
  return fetch(`${baseUrl}todos/${id}`, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json'
    }
  }).then(res => _getResponseData(res))
}