import React, {ChangeEvent, useState} from 'react';
import {Task} from "./App";
import {Button} from "./Button";

type TodolistPropsType = {
    title: string
    tasks: Task[]
    addTask: (newTitle: string) => void
    deleteTask: (id: string) => void
    completeTask: (id: string) => void
    changeFilter: (value: 'all' | 'active' | 'completed') => void
}

export const Todolist: React.FC<TodolistPropsType> = ({
                                                          title,
                                                          tasks,
                                                          addTask,
                                                          deleteTask,
                                                          changeFilter,
                                                          completeTask
                                                      }) => {

    const [inputValue, setInputValue] = useState<string>('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onClickAddTask = () => {
        addTask(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <h2>{title}</h2>
            <input value={inputValue} onChange={onChangeInputHandler}/><Button onClick={onClickAddTask} title={'+'}/>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <input checked={task.isDone} type={"checkbox"} onChange={() => completeTask(task.id)}/>
                    <span>{task.title}</span>
                    <Button onClick={() => deleteTask(task.id)} title={'x'}/>
                </li>)}
            </ul>
            <Button onClick={() => changeFilter('all')} title={'All'}/>
            <Button onClick={() => changeFilter('active')} title={'Active'}/>
            <Button onClick={() => changeFilter('completed')} title={'Completed'}/>
        </div>
    );
};