
let storageTodo = [];

const defaultCon = (req, res) => {
    res.render("index.ejs", { todos : storageTodo });
}

const todoCon = (req, res) => {
    console.log(req.body);

    const todoListObj = {
        id : storageTodo.length + 1,
        todoList : req.body.todoList
    }

    storageTodo = [...storageTodo, todoListObj]
    console.log("todoListObj", todoListObj);
    
    
    res.redirect("/");
}

const editCon = (req, res) => {
    const id = req.params.id;
    const editSingleRecod =  storageTodo.find((editId) => {
        return editId.id == id;
    })

    res.render("edite_todo", { editSingleRecod });
    console.log("editSingleRecod", editSingleRecod);
}


module.exports = { defaultCon, todoCon, editCon }