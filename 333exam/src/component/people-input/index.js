import { useContext, useRef, useState, useEffect} from 'react';
import './index.css';
import setingsImage from './interface_10100881.png';
import UsersContext from '../../context/users.context';

function PeopleInputComp() {
  
  const { data, setData, setSelectedFolder} = useContext(UsersContext);
  const [currentFolder, setCurrentFolder] = useState('All Chats');

  const AllChatsRef = useRef();
  const UniversityRef = useRef();

  // useEffect(() => {
  //   filteredUsers = [];
  // });



  // let filteredUsers = data.filter(el => {
  //   return el.folder.some(folder => currentFolder.includes(folder));
  // });

  const AllChatsOnClick = () =>{

    debugger;
    setSelectedFolder('All Chats');
    return;
    setCurrentFolder('All Chats');

    let filteredUsers2 = data.filter(el => el.folder.includes('All Chats'));

    AllChatsRef.current.style.color = 'rgb(179, 124, 230)';

    UniversityRef.current.style.color = 'grey';

    setData(filteredUsers2)

    // setData(filteredUsers);
  };

  const UniversityOnClick = () =>{

    debugger;

    setSelectedFolder('University');
    return;
    let filteredUsers = data.filter(el => {
      return el.folder.some(folder => 'University'.includes(folder));
    });

    UniversityRef.current.style.color = 'rgb(179, 124, 230)';

    AllChatsRef.current.style.color = 'grey';

    setData(filteredUsers)

    // setData(filteredUsers);
  };


  return (
    <div>
        <div className='inputSection'>
            <img src={setingsImage} className='settings' alt="People Image" />
            <input className='search' placeholder="Search"></input>
        </div>
        <div className='folders'>
            <div className='folder' id = "start" ref = {AllChatsRef} onClick={AllChatsOnClick}>All Chats</div>
            <div className='folder' ref = {UniversityRef} onClick={UniversityOnClick}>University</div>
        </div>

    </div>
  );
}

export default PeopleInputComp;
