import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './styles.css';
import Pizza from "../modal/Pizza";

const initState = {
    title: '',
    price: '',
    img: 'pizza-1.jpg'
}

interface EditPizzaFormProps {
    data: Pizza
}


const EditPizzaForm: FC<EditPizzaFormProps> = ({data}) => {
    const [newPizza, setNewPizza] =
        useState<{ title: string, price: string, img: string }>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target

        setNewPizza({
            //копируем текущее состояние
            ...newPizza,
            [name]: value
        });
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = newPizza;

        if (title && price && img) {
            data({
                title,
                img,
                price: Number(price),
                id: Date.now()
            });
            setNewPizza(initState);
        }
    }

    console.log("Новая пицца", newPizza);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder='Название'
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="price"
                type="number"
                placeholder='Стоимость'
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder='Изображение'
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">
                + Добавить в меню
            </button>
        </form>
    )
}

export default EditPizzaForm;