import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './styles.css';

const initState = {
    title: '',
    price: undefined,
    img: ''
}

const AddPizzaForm: FC = () => {
    const [newPizza, setNewPizza] =
        useState<{ title: string, price: number | undefined, img: string }>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target

        setNewPizza({
            //копируем текущее состояние
            ...newPizza,
            [name]: value
        });
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(`handle change`, e.target);
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

export default AddPizzaForm;