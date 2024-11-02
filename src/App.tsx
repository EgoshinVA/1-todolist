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


    const removeTask = (todoListId: string, id: string) => setTasks({
        ...tasks,
        [todoListId]: tasks[todoListId].filter(t => t.id != id)
    });


    const addTask = (todoListId: string, title: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListId]: [...tasks[todoListId], newTask]})
    }

    const changeStatus = (todoListId: string, taskId: string, isDone: boolean) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, isDone: isDone} : el)
        });
    }

    const changeFilter = (todoListId: string, filter: FilterValuesType) => {
        setTodoLists(todoLists.map(todo => todo.id === todoListId ? {...todo, filter: filter} : todo))
    }


    return (
        <div className="App">
            {todoLists.map(mapTodoLists => {
                let filteredTasks = tasks[mapTodoLists.id]
                if (mapTodoLists.filter === 'active')
                    filteredTasks = tasks[mapTodoLists.id].filter(task => !task.isDone)
                if (mapTodoLists.filter === 'completed')
                    filteredTasks = tasks[mapTodoLists.id].filter(task => task.isDone)

                return <Todolist
                    key={mapTodoLists.id}
                    title={mapTodoLists.title}
                    tasks={filteredTasks}
                    removeTask={removeTask}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={mapTodoLists.filter}
                    todoId={mapTodoLists.id}
                    changeFilter={changeFilter}
                />
            })}
        </div>
    );
}

export default App;
