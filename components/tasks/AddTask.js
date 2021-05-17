import React, { useState, useContext, useEffect } from 'react';
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

    @media (max-width: 865px) {
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

    @media (max-width: 865px) {
        width: 100%;
    }
`;

const AddTask = () => {

    const tasksContext = useContext(taskContext);
    const { tareaSeleccionada, agregarTarea, editarTarea } = tasksContext;

    const [ tarea, setTarea ] = useState({
        nombre: ''
    });

    useEffect(() => {
        if (tareaSeleccionada) {
            setTarea({
                ...tarea,
                nombre: tareaSeleccionada.name
            });
        }
    }, [tareaSeleccionada])

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

        if (tareaSeleccionada) {
            tareaSeleccionada.name = tarea.nombre;
            editarTarea(tareaSeleccionada);
        } else {
            agregarTarea(tarea.nombre);
        }

        setTarea({ nombre: ''});
    }

    return (
        <div css={css`
            text-align: center;
            width: 800px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            @media (max-width: 865px) {
                display: inline;
            }

        `}>
            <form onSubmit={handleSubmit}>

                <Input css={css`
                    margin-bottom: 5px;
                    width: 680px;
                    text-align: left;
                `}
                    type="text" 
                    placeholder="¿Qué quieres hacer?"
                    name="nombre"
                    value={tarea.nombre}
                    onChange={handleOnChange}
                />
                <Button
                    type="submit" 
                >
                    {
                        tareaSeleccionada ? 'Editar Tarea' : 'Añadir Tarea'
                    }
                </Button>

            </form>
        </div>
    )
}

export default AddTask;
