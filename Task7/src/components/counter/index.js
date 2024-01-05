import { useContext, useState } from 'react';
import './style.css';
import GoodsContext from '../../context/goods.context';
import GoodsComponent from '../goods';



const CounterComponent = () => {

 const { data, addGoods, selectedGoods} = useContext(GoodsContext);
 
 let start = null
 const AutoDetectButton = (props) =>{

  let { arr, i = 0, sumforauto = 0, result = [], lastRemoved = null, combination = null } = props;


  const newSum = sumforauto + arr[i].cost;
  console.log("Сума комбінації комбінації ", newSum)

  if (newSum === 40) {
    result.push(i);
    result.forEach((index) => {
      if (!selectedGoods.some(item => item.id === data[index].id)) {
        addGoods(data[index]);
      }
    });
    console.log(result);


    return result;
  }

  if (i === arr.length - 1 ) {
      console.log(result)
      return result
    }

  if (newSum < 40) {
    result.push(i);
    return AutoDetectButton({
      i: i + 1,
      arr,
      sumforauto: newSum,
      result: result,
    });
  }

  if (newSum > 40) {
    result.length = 0;
    start = start + 1;
    console.log(result)
    return AutoDetectButton({
      i: start,
      arr,
      sumforauto: 0,
      result: result,
    });
  }

}

 const handleAutoDetect = () => {  
  data.sort((a, b) => a.cost - b.cost);
  console.log(data)
  AutoDetectButton({ arr: data });
 };
 

 const sum = selectedGoods.reduce((acc, cur) => {
  return acc + cur.cost;
 }, 0);

 return (
  <div className='cost-wrapper'>
   <div>{sum}/40</div>
   <div className='auto-detect' onClick={handleAutoDetect}>auto-detect</div>
   <div className='selected-goods'>
    {
     selectedGoods
      .map(el => <GoodsComponent {...el} key={'selected' + el.id} />)
    }
   </div>
  </div>
 );
};

export default CounterComponent;