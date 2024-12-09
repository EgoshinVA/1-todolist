import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";
import s from "../Site.module.css";

export const Model = () => {
    const {id} = useParams()
    console.log(id)
    let newArr = adidasArr.find(a => a.id === Number(id))
    return (
        <div>
            <h2>{newArr?.model}</h2>
            <img src={newArr?.picture} alt={newArr?.model} className={s.img}/>
            <p>{newArr?.price}</p>
        </div>
    )
}