import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type Task = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const [tasks, setTasks] = useState<Task[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

    const addTask = (newTitle: string) => setTasks([{id: v1(), title: newTitle, isDone: false}, ...tasks])

    const deleteTask = (id: string) => setTasks(tasks.filter(task => task.id !== id))

    const completeTask = (id: string) => setTasks(tasks.map(task => task.id === id ? {...task, isDone: !task.isDone} : task))

    const changeFilter = (value: 'all' | 'active' | 'completed') => setFilter(value)

    let filteredTasks = tasks

    switch (filter) {
        case "all":
            filteredTasks = tasks
            break
        case "active":
            filteredTasks = tasks.filter(task => !task.isDone)
            break
        case "completed":
            filteredTasks = tasks.filter(task => task.isDone)
            break
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTasks}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      completeTask={completeTask}
            />
        </div>
    );
}

export default App;