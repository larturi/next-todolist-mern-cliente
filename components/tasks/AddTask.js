import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import taskContext from '../../context/tasks/taskContext';

const Input = styled.input`
    width: 380px;
    font-weight: 600;
    color: #f1f1f1;
    font-size: 18px;
    padding: 10px;
    margin: -14px 7px 0px 0px;
    background: #3e3e3e;
    border: none;
    border-radius: 0;

    @media (max-width:768px) {
        width: 100%;
    }
`;

const Button = styled.button`
    font-weight: 400;
    color: #000;
    font-size: 14px;
    padding: 10px;
    background: #dedede;
    margin-left: 0px;
    text-transform: uppercase;
    height: 39px;
    border: solid 1px #dedede;
    cursor: pointer;

    @media (max-width:768px) {
        width: 100%;
    }
`;


const AddTask = () => {

    const tasksContext = useContext(taskContext);

    const { 
        agregarTarea
    } = tasksContext;

    const [ tarea, setTarea ] = useState({
        nombre: ''
    });

    const handleOnChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(tarea.nombre === '') {
            return;
        };

        agregarTarea(tarea.nombre);
        setTarea({ nombre: ''});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <Input 
                    type="text" 
                    placeholder="¿Qué quieres hacer?"
                    name="nombre"
                    value={tarea.nombre}
                    onChange={handleOnChange}
                />
                <Button
                    type="submit" 
                >
                    Añadir Tarea
                </Button>

            </form>
        </div>
    )
}

export default AddTask;
