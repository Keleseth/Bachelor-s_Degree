import React, { useState, useEffect } from 'react';
import scc from './Graf.module.css';
import { useParams } from "react-router-dom";
import a from './img/2.jpg';


const Graf = () => {

    const [ items, setItems ] = useState([]); // items
    const [ selectedItem, setSelectedItem ] = useState('Виробництво');
    const { name = 'Виробництво' } = useParams();

    console.log(name)

    useEffect( () => {
        fetch(`http://localhost:3001/graf${selectedItem ? `/${selectedItem}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setItems(data)
            })

    }, [selectedItem]);

    if (!items.length) {
        return null;
    }
    console.log(selectedItem)

    const itemsList = items.map(item => <option value={item.Supply_and_consumption}>{item.Supply_and_consumption}</option>)




  
    return (
        <div className={scc.header}>

            <select value={selectedItem} onChange={event => setSelectedItem(event.target.value)}>
                <option value="Виробництво">Виробництво</option>
                    <option value="Імпорт">Імпорт</option>
                    <option value="Експорт">Експорт</option>
                    <option value="Зміна запасів">Зміна запасів</option>
                    <option value="Загальне постачання первинної енергії">Загальне постачання первинної енергії</option>
                    <option value="Кінцеве споживання">Кінцеве споживання</option>
                    <option value="Промисловість">Промисловість</option>
                    <option value="Транспорт">Транспорт</option>
                    <option value="Інші">Інші</option>
            </select>


            <table className={scc.iksweb}>
                <tbody>
                <tr>
                    <td>id</td>
                    <td>Постачання та споживання</td>
                    <td>Вугілля і торф</td>
                    <td>Сира нафта</td>
                    <td>Нафтопродукти</td>
                    <td>Природний газ</td>
                    <td>Атомна енергія</td>
                    <td>Гідроелектро енергія</td>
                    <td>Вітрова, сонячна енергія</td>
                    <td>Біопаливо та відходи</td>
                    <td>Електроенергія</td>
                    <td>Теплоенергія</td>
                    <td>Усього</td>
                    <td>Рік</td>
                </tr>
                {items.map(item => {
                    const values = Object.values(item);
                    return (
                        <tr key={item.id} >
                            { values.map((value, key) => value !== null ? <td key={`${item.id}${value}${key}`}>{value}</td> : null).filter(item => item)}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
            <img src={a} />

        </div>
    )
}

export default Graf;

    /*<div>
               
    <option value="Виробництво">Виробництво</option>
                    <option value="Імпорт">Імпорт</option>
                    <option value="Експорт">Експорт</option>
                    <option value="Зміна запасів">Зміна запасів</option>
                    <option value="Загальне постачання первинної енергії">Загальне постачання первинної енергії</option>
                    <option value="Кінцеве споживання">Кінцеве споживання</option>
                    <option value="Промисловість">Промисловість</option>
                    <option value="Транспорт">Транспорт</option>
                    <option value="Інші">Інші</option>
            </div>
            <div>
                <a href="./image/1_Image.jpg">db</a>
            </div> 
            
            import a from './image/1.jpg';
import q from './image/2.jpg';
import w from './image/3.jpg';
import e from './image/4.jpg';
import r from './image/5.jpg';
import t from './image/6.jpg';
import y from './image/7.jpg';
import u from './image/8.jpg';
import i from './image/9.jpg';
import o from './image/10.jpg';
import p from './image/11.jpg';
import s from './image/12.jpg';
import d from './image/13.jpg';
import f from './image/14.jpg';
import g from './image/15.jpg';
import h from './image/16.jpg';
import j from './image/17.jpg';
import k from './image/18.jpg';
import l from './image/19.jpg';
import z from './image/20.jpg';
import x from './image/21.jpg';
import c from './image/22.jpg';
import v from './image/23.jpg';
import b from './image/24.jpg';
import n from './image/25.jpg';
import m from './image/26.jpg';

import a1 from './img/1.jpg';
import a2 from './img/2.jpg';
import a3 from './img/3.jpg';
import a4 from './img/4.jpg';
import a5 from './img/5.jpg';
import a6 from './img/6.jpg';
import a7 from './img/7.jpg';
import a8 from './img/8.jpg';
import a9 from './img/9.jpg';
import a10 from './img/10.jpg';
import b1 from './img/11.jpg';
import b2 from './img/12.jpg';
import b3 from './img/13.jpg';
import b4 from './img/14.jpg';
import b5 from './img/15.jpg';
import b6 from './img/16.jpg';
import b7 from './img/17.jpg';
import b8 from './img/18.jpg';
import b9 from './img/19.jpg';
import b10 from './img/20.jpg';
import q1 from './img/21.jpg';
import q2 from './img/22.jpg';
import q3 from './img/23.jpg';
import q4 from './img/24.jpg';
import q5 from './img/25.jpg';
import q6 from './img/26.jpg';
            
            */