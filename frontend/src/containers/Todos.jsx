import React, { Fragment, useEffect } from 'react';
import { fetchTodos } from '../apis/todos';

export const Todos = () => {

  useEffect(()=>{
    fetchTodos()
    .then((data)=> console.log(data))
  },[])

  return (
    <Fragment>
      タスク一覧
    </Fragment>
  )
}
