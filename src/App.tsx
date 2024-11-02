import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todoListId: string, id: string) {
        let filteredTasks = {...tasks, [todoListId]: tasks[todoListId].filter(t => t.id != id)}
        setTasks(filteredTasks);
    }

    function addTask(todoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = {...tasks, [todoListId]: [...tasks[todoListId], task]}
        setTasks(newTasks);
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        let newTasks = {
            ...tasks,
            [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, isDone: isDone} : el)
        }
        setTasks(newTasks);
    }


    return (
        <div className="App">
            {todoLists.map(el => {
                const changeFilter = (filter: FilterValuesType) => {
                    setTodoLists(todoLists.map(todo => todo.id === el.id ? {...todo, filter: filter} : todo))
                }
                let filteredTasks = tasks[el.id]
                if (el.filter === 'active')
                    filteredTasks = tasks[el.id].filter(task => !task.isDone)
                if (el.filter === 'completed')
                    filteredTasks = tasks[el.id].filter(task => task.isDone)


                return <Todolist
                    key={el.id}
                    title={el.title}
                    tasks={filteredTasks}
                    removeTask={removeTask}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                    todoId={el.id}
                    changeFilter={changeFilter}
                />
            })}

        </div>
    );
}

export default App;
