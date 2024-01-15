import { useContext, useState } from 'react';
import './index.css';

import UsersContext from '../../context/users.context';

function PeopleAccauntComp(props) {

  const {addUsers} = useContext(UsersContext);

  const [Active, setActive] = useState();
  const [isActive, setisActive] = useState([]);
  console.log("isSelected:", Active);

  const Select = () =>{
    setActive((prevsetActive) => {
      const newValue = !prevsetActive;
      setisActive(props.name)
      console.log(isActive)
   
      if (newValue) {
      //  addGoods(props);
      } else {
      //  removeGoods(props);
      }
   
      return newValue;
     });


  };
  

  const classNames = ['accaunt'];

  if (Active) {
    classNames.push('selected');
  }

  const classNameForLastMessage = ['LastMessage'];

  if (Active) {
    classNameForLastMessage.push('selected');
  }

  const classNameForDate = ['Date'];

  if (Active) {
    classNameForDate.push('selected');
  }


  return (
    <div>

        <div className={classNames.join(' ')} onClick={Select}>
          <img src={props.photo} className='profilePhoto'/>
          <div className='nickContainer'>
            <div className='Name'>{props.name}</div> 
            <div className={classNameForLastMessage.join(' ')}>{props.LastMessage}</div> 
          </div>
          <div className={classNameForDate.join(' ')}>{props.date}</div>
        </div>

    </div>
  );
}

export default PeopleAccauntComp;