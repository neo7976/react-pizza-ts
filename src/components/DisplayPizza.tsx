import Pizza from "../modal/Pizza";
import {FC} from "react";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
    pizzaList: Pizza[];
    updatePizza: (newPizza:Pizza) => void;
}


const DisplayPizza: FC<DisplayPizzasProps> = ({pizzaList, updatePizza}) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return <SinglePizza
                    key={pizza.id}
                    updatePizza={updatePizza}
                    pizza={pizza}/>;
            })}
        </div>
    );
}

export default DisplayPizza;