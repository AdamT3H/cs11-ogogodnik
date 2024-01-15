import './index.css';
import callImage from './call.png';
import shearImage from './zoom_3385033.png';
import settingsImage2 from './menu.png';
import send from './direct.png'
import { useContext} from 'react';
import UsersContext from '../../context/users.context';

function ChatComp(props) {

    const {data} = useContext(UsersContext);

    console.log('id: ', props)

    const found = data.find((element) => element.id === props.selectedUsers);

    console.log(found?.name)

    return(
        <div className='back'>
            <div className='header'>
                <div className='nickName'>
                <img src={found?.photo} className='profilePhotoChat'/> 
                <div className='nameCon'>
                 <div className='NameChat'>{found?.name} </div>
                 <div className='lastseen'>last seen in 5 mtnutes</div>
                </div>
                </div>
                <div>                
                <img src={callImage} className='call' alt="Call Image" />
                <img src={shearImage} className='shear' alt="shear Image" />
                <img src={settingsImage2} className='settings2' alt="settings Image" />
            </div></div>

            <div className='messages'>
                <div className='messagesItem'>
                    <div className='messagestext'>dwdwdwd</div>




                </div>
            </div>

            <div className='ChatContainer'>
                <input className='messageInput' placeholder="Message"></input>
                <button className='sendBut'> <img src={send} className='send'/> </button>
            </div>
        </div>
    )

};

export default ChatComp;