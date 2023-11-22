import React, { useState, useRef } from 'react';
import './style.css';
import * as uuid from 'uuid';

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number} props.correctAnswer
 * @returns 
 */
const SingleAnswerComponent = (props) => {

 const [userAttempts, setUserAttempts] = useState(0);
 const [showAnswer, setShowAnswer] = useState(false);
 let   [selectedAnswerIndex, setSelectedAnswer] = useState(null);
 const [selectedAnswers, setSelectedAnswers] = useState(Array(props.answers.length).fill(false));

 const radioClick = (index) => {
  selectedAnswerIndex = index;
  wrongRef.current.classList.remove('selected');
  correctRef.current.classList.remove('selected');
  showAnswerButtonRef.current.classList.remove('show');
 };

 const correctRef = useRef();
 const wrongRef = useRef();
 const showAnswerButtonRef = useRef();



 const checkOnClick = () => {
  if (selectedAnswerIndex === props.correctAnswer) {
   correctRef.current.classList.add('selected');
   wrongRef.current.classList.remove('selected');
   showAnswerButtonRef.current.classList.remove('show');
  } else {
   wrongRef.current.classList.add('selected');
   correctRef.current.classList.remove('selected');
   setUserAttempts(userAttempts + 1);
  }
  if (userAttempts === 2) {
    showAnswerButtonRef.current.classList.add('show');
  }
 };

 const showAnswerOnClick = () => {
    setShowAnswer(true);
    setSelectedAnswer(props.correctAnswer);
    const newSelectedAnswers = selectedAnswers.map((_, i) => i === props.correctAnswer);
    setSelectedAnswers(newSelectedAnswers);
  };




  

 const qId = uuid.v1();

 return (
  <div className='question single-answer'>
   <div><h3>{props.question}</h3></div>
   <div className='answers'>
    {props.answers.map((answer, i) => {
     const id = uuid.v1();
     return (<div>
      <input
       id={id}
       type='radio'
       name={`group-${qId}`}
       onClick={() => radioClick(i)}
       checked={showAnswer ? selectedAnswers[i] : false}
       
      />
      <label for={id}>{answer}</label>
     </div>);
    })}
   </div>
   <div className='check'>
    <div className='button' onClick={checkOnClick}>
     check my answer
     <div ref={correctRef} className='correct'>correct</div>
     <div ref={wrongRef} className='wrong'>wrong</div>
    </div>

    <div className= 'showAnswer' onClick={showAnswerOnClick} ref={showAnswerButtonRef}>
          Show Answer
        </div>

   </div>
  </div>
 );
};

export default SingleAnswerComponent;