function createTodoItem (itemTitle) {
    let todoItem = {
        title: itemTitle,
        desc: null,
        dueDate: null, 
        priority: null,
        notes: null,
    }

    return todoItem;

}

export default createTodoItem