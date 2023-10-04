import Pizza from "../modal/Pizza";
import {VscEdit} from "react-icons/vsc";
import {AiOutlineDelete} from "react-icons/ai";
import React, {FC, useState} from "react";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzasProps {
    pizza: Pizza
}


const SinglePizza: FC<SinglePizzasProps> = ({pizza}) => {
    const [edit, setEdit] = useState<boolean>(false)


    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <VscEdit/>
                <AiOutlineDelete/>
            </div>
            {edit ? <EditPizzaForm data{pizza}/> : null}

        </div>
    );
}

export default SinglePizza;