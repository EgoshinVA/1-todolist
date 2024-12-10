import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr, ShoesItem} from "./Adidas";
import s from "../Site.module.css";
import {pumaArr} from "./Puma";

type ModelsType = {
    [model: string]: ShoesItem[]
}

const models: ModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {model, id} = useParams()
    let newArr
    if (model)
        newArr = models[model].find(a => a.id === Number(id))
    return (
        <div>
            <h2>{newArr?.model}</h2>
            <img src={newArr?.picture} alt={newArr?.model} className={s.img}/>
            <p>{newArr?.price}</p>
        </div>
    )
}