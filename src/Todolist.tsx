import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {ChangeEvent, useRef, useState} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {

    // const inputRef = useRef<HTMLInputElement>(null)

    // const onCLickAddTaskHandler = () => {
    //     if (inputRef.current) {
    //         addTask(inputRef.current.value)
    //         inputRef.current.value = ''
    //     }
    // }

    const [newTitle, setNewTitle] = useState('')

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onCLickAddTaskHandler = () => {
        addTask(newTitle)
        setNewTitle('')
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onCLickAddTaskHandler()
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTitle} onChange={changeTitle} onKeyPress={onKeyPressHandler}/>
                <Button title={'+'} onClick={onCLickAddTaskHandler}/>
            </div>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                    <Button title={'x'} onClick={() => removeTask(task.id)}/>
                                </li>
                            )
                        })}
                    </ul>
            }
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
        </div>
    )
}