import  dispatcher from "../Dispatcher";

export function createTodo(text){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    })
}

export function deleteTodo(id){
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    })
}

export function reloadTodoList(){
    //dispatcher.dispatch({type: "FETCH_POSTS"});

    setTimeout(()=>{
        dispatcher.dispatch({type: "RECIVED_DATA", todos: [
            {
                id: 123,
                text: "relaoed data 1",
                complete: false
            },
            {
                id: 12344,
                text: "reloaded data 2",
                complete: false
            }
        ]})
    }, 1000)
}