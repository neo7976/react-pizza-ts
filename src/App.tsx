import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./modal/Pizza";
import DisplayPizza from "./components/DisplayPizza";
import pizza from "./modal/Pizza";


/*//Тип для создания объекта
type Order = {
    title: string,
    // ? указывает, что необязательно указывать данное поле
    quantity?: number
}

const order: Order = {
    title: 'margarita',
    quantity: 10
}

const orders: Order[] = [
    {
        title: 'Marg',
        quantity: 2
    },
    {
        title: 'Salami'
    }
];

let number: null | number = null;

number = 11;


//Указываем тип для функции, что принимает и что должны возвращать
type PrintTitle = (title: string) => string;
const printTitle: PrintTitle = (title) => {
    // console.log(title);
    return title;
}

printTitle('salami');

//unknown - Временное решение и не дает работать с переменной
const test : unknown = 'test';
test = 'dfdf'; //ошибка*/

/*Расширение классов и интерфейсов
type X = {
    a: string,
    b?: number
}

//Передаем также поля из X в Y (расширение объекта)
type Y = X & {
    c: string,
    d: number
}

let y: Y = {
    c: 'test',
    d: 5,
    a: 'test 1'
}


interface Auto {
    country: string,
}

//Расширение интерфейса
interface BMW extends Auto {
    model: string,
    year: number
}

const bmw: BMW = {
    model: 'x5',
    year: 2023,
    country: 'Germany'
}*/

const App: FC = () => {
    const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzaList([...pizzaList, newPizza]);
    }

    const updatePizza = (newPizza: Pizza) => {
        setPizzaList(pizzaList.map((pizza) =>
            (pizza.id === newPizza.id ? newPizza : pizza)));
    }
    const removePizza = (id: number) => {
        const newPizzaList = pizzaList.filter(pizza => (pizza.id !== id));
        setPizzaList(newPizzaList);
    }

    console.log("Список пицц >>>> ", pizzaList);

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Наша пиццерия</span>
                <AddPizzaForm addPizza={addPizza}/>
                <DisplayPizza
                    pizzaList={pizzaList}
                    updatePizza={updatePizza}
                    removePizza={removePizza}
                />
            </div>
        </div>
    );
}

export default App;
