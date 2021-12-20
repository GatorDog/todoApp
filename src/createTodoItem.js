import {startOfToday} from 'date-fns'


function createTodoItem (itemTitle) {

    let todoItem = {
        title: itemTitle,
        desc: null,
        dueDate: startOfToday(), 
        priority: null,
        notes: null,
        status: "not checked"
    }

    return todoItem;

}

export default createTodoItem