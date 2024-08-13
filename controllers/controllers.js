
let storageTodo = [];

const defaultCon = (req, res) => {
    res.render("index.ejs");
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

module.exports = { defaultCon, todoCon }