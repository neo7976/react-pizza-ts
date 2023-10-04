import Pizza from "../modal/Pizza";
import {FC} from "react";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzaList: Pizza[]
}


const DisplayPizza: FC<DisplayPizzasProps> = ({pizzaList}) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return <SinglePizza key={pizza.id} pizza={pizza}/>;
            })}
        </div>
    );
}

export default DisplayPizza;