import { useState, useEffect } from 'react';
import './App.css';
import PeopleInputComp from './people-input';
import PeopleAccauntComp from './people-accaunt';
import ChatComp from './Chat';
import UsersMock from './usersMock.json';
import UsersContext from '../context/users.context';
import * as uuid from 'uuid';

  const users = UsersMock.map(el => ({
    ...el,
    id: uuid.v1()
  }));

function App() {

  // console.log(users)

  const [data, setData] = useState(users);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [createdChats, setcreatedChats] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState();

  

  // const addUsers = (user) => {
  //   setcreatedChats((prevcreatedChats) => {
  //    return [...prevcreatedChats, user];
  //   });
  // };

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
          data,
          setData,
          selectedUsers, 
          setSelectedUsers,
          setSelectedFolder
        }}>
          
      <div className='wrapper-people'>
        <PeopleInputComp />
        
        {
        data
        .filter(el => {
          if (!selectedFolder) {
            return true;
          }

          return el.folder.includes(selectedFolder)
        })
        .map(el => {
          return <PeopleAccauntComp {...el} key={el.id}/>;
        })
        }

      </div>

      <div className='wrapper-chat'>
      <ChatComp selectedUsers={selectedUsers}/>
        {data.map(el => {
          // return <ChatComp {...el} key={el.id}/>;
        })



        }


      </div>
      
        </UsersContext.Provider>
      </div>
    </div>
  );
}

export default App;
