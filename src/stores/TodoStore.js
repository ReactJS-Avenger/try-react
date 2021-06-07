import { EventEmitter } from "events";

//now we can have dispatcher as a listerner
import dispatcher from "../Dispatcher";


class Todos extends EventEmitter{
    constructor(){
        super();

        this.todos= [
            {
                id: 1,
                text: "todo1",
                complete: false
            },
            {
                id: 2,
                text: "todo 2",
                complete: false
            }
        ]
    }

    createTodo(text){
        const id= Math.random() *10;
        this.todos.push({
            id,
            text,
            complete: false
        })
        this.emit("change")
    }

    getAll(){
        return this.todos
    }

    handleAction(action){
        
        //console.log("Todostore recived an action", action)
        switch(action.type){
            case "CREATE_TODO":{
                this.createTodo(action.text);
                break;
            }
            case "RECIVED_DATA":{
               
                this.todos = action.todos
                this.emit("change")
                break;
            }

        }
    }
}
const todoStore= new Todos();
dispatcher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher =dispatcher;
export default todoStore