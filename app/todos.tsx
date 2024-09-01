import React from 'react'
import { useTodos } from './queries';


const todos = () => {
    const { isError, isSuccess, todo, isLoading } = useTodos(1);
  
    if (isError) {
    <div>error</div>;
  }

  if (isLoading) {
    <div>loading</div>;
  }
  
   return (
   <>
    { isSuccess && ( <div className="App">
      <div>todo.id</div>
      <div>todo.title</div>
      <div>todo.completed</div>
    </div> )}
   </>
  );
}

export default todos