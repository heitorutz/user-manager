import React, { useContext, useState, useRef, useEffect } from 'react';
import './users.css';
import { GlobalContext } from '../../App';
import axios from 'axios';

const Users = () => {
  const API_BASE = "http://127.0.0.1:3001/api/";

  const [readyToUpdate, setReadyToUpdate] = useState(false);
  const [success, setSuccess] = useState(false);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const { users, setUsers } = useContext(GlobalContext);

  const deleteUser = async (i) => {
    const data = await axios.get(API_BASE);
    const dataUsers = data.data.data;
    if (dataUsers.users[i]) {
        let temp = users.filter((v, index) => index !== i);
        axios.delete(`http://127.0.0.1:3001/api/${dataUsers.users[i]._id}`);
        setUsers(temp);
    }
  };

  const updateUser = async (i) => {
    setReadyToUpdate(true);
    const data = await axios.get(API_BASE);
    const dataUsers = data.data.data;

    setName(nameRef.current.value);
    setAge(ageRef.current.value);

    if (readyToUpdate) {  
      if (name !== '') {
        axios.patch(`http://127.0.0.1:3001/api/${dataUsers.users[i]._id}`, {name: name, age: age});
        setSuccess(true)
      }
    };
  };

  useEffect(() => {
    if (success) {
      setReadyToUpdate(false);
    }
  }, [success])

  return (
    <div className='users-content'>
        {
            users.map((item, index) => (
              <div className='user' key={index}>
                <div className='user-name'><h3>{item.name}</h3></div>
                <div className='user-age'><h3>{item.age}</h3></div>
                {
                  readyToUpdate && <div className='inputs-change-users'>
                    <input type="text" placeholder="Nome..." ref={nameRef}/>
                    <input type="number" placeholder="Idade..." ref={ageRef}/>
                  </div>
                }
                <div className='user-buttons'>
                    <button className="update" type="button" onClick={() => updateUser(index)}><h3>{readyToUpdate ? 'OK' : 'ATUALIZAR'}</h3></button>
                    <button className="delete"type="button" onClick={() => deleteUser(index)}><h3>Deletar</h3></button>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default Users