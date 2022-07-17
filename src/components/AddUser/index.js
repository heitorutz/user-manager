import React, { useRef, useState, useEffect } from 'react';
import './adduser.css';
import axios from 'axios';

const AddUser = () => {
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    const API_BASE = "http://127.0.0.1:3001/api/";

    const handleSubmit = e => {
        e.preventDefault();
        setUserName(nameRef.current.value);
        setUserAge(ageRef.current.value);
        cleanFields()
    };

    const cleanFields = () => {
        nameRef.current.value = ''
        ageRef.current.value = ''
    };

    useEffect(() => {
        if (userName === "") return;

        const api = async () => {
            axios.post(API_BASE, {name: userName, age: userAge})
        }
        api();
    }, [userName, userAge]);



  return (
    <div className='user-container'>
        <h1>Adicionar Usuario</h1>
        <form onSubmit={handleSubmit}>
            <div className='user-inputs'>
                <div className='user-inputs-input-area'>
                    <h3>Nome:</h3>   
                    <input type="text" ref={nameRef}/>
                </div>
                <div className='user-inputs-input-area'>
                    <h3>Idade:</h3>   
                    <input type="number" ref={ageRef}/>
                </div>
                <div className='user-inputs-buttons'>
                    <button className="update" type="submit">ADICIONAR</button>
                    <button className="delete" type="button" onClick={cleanFields}>LIMPAR CAMPOS</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddUser