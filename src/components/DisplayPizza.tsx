import Pizza from "../modal/Pizza";
import {FC} from "react";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzaList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    removePizza: (id: number) => void;
}


const DisplayPizza: FC<DisplayPizzasProps> = ({pizzaList, updatePizza, removePizza}) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return <SinglePizza
                    key={pizza.id}
                    updatePizza={updatePizza}
                    removePizza={removePizza}
                    pizza={pizza}/>;
            })}
        </div>
    );
}

export default DisplayPizza;