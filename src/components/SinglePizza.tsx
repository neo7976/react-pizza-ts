import Pizza from "../modal/Pizza";
import {VscEdit} from  "react-icons/vsc";
import {AiOutlineDelete} from  "react-icons/ai";
import {FC} from "react";

interface SinglePizzasProps {
    pizza: Pizza
}


const SinglePizza: FC<SinglePizzasProps> = ({pizza}) => {
    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <VscEdit/>
                <AiOutlineDelete/>
            </div>
        </div>
    );
}

export default SinglePizza;