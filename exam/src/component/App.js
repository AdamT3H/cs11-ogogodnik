import { useState, useEffect } from 'react';
import './App.css';
import PeopleInputComp from './people-input';
import PeopleAccauntComp from './people-accaunt';
import UsersMock from './usersMock.json';
import UsersContext from '../context/users.context'
import * as uuid from 'uuid';


function App() {

  const users = UsersMock.map(el => ({
    ...el,
    id: uuid.v1()
  }));
  // console.log(users)

  const [data, setData] = useState(users);
  const [createdChats, setcreatedChats] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  

  const addUsers = (user) => {
    setcreatedChats((prevcreatedChats) => {
     return [...prevcreatedChats, user];
    });
  };

  // let filteredUsers = data.filter(el => {
  //   return el.folder.some(folder => currentFolder.includes(folder));
  // });

  // useEffect(() => {
  //   setData(filteredUsers)
  // }, [currentFolder]);


  return (
    <div className="App">
      <div className='wrapper'>
        <UsersContext.Provider value={{
          createdChats: createdChats,
          addUsers,
          data,
          setData,
          selectedUsers, 
          setSelectedUsers
        }}>
          
      <div className='wrapper-people'>
        <PeopleInputComp />
        
        {
        data.map(el => {
          return <PeopleAccauntComp {...el} key={el.id}/>;
        })
        }

      </div>
      
        </UsersContext.Provider>
      </div>
    </div>
  );
}

export default App;
