import { createContext, useContext } from "react";




export const ToDoContext = createContext({
    todos: [{
        id: 1,
        todo: "To DO msg",
        completed:false    }],
    addToDo : (todo) =>{

    },
    updatedToDo : (todo,id) =>{
    },
    deleteToDo: (id) =>{
    },
    toggleComplete: (id) =>{

    }

});

export const useToDo = () => {
  return useContext(ToDoContext);
};


export const ToDoContextProvider = ToDoContext.Provider