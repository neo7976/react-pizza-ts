import Pizza from "../modal/Pizza";
import {VscEdit} from "react-icons/vsc";
import {AiOutlineDelete} from "react-icons/ai";
import React, {FC, useState} from "react";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzasProps {
    pizza: Pizza;
    updatePizza: (newPizza:Pizza) => void;
}


const SinglePizza: FC<SinglePizzasProps> = ({pizza, updatePizza}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <VscEdit onClick={handleToggleEdit}/>
                <AiOutlineDelete/>
            </div>
            {edit
                ?
                <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                /> : null}

        </div>
    );
}

export default SinglePizza;