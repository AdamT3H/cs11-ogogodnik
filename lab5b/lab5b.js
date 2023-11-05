
const Task1 = () =>{
    const [side1] = document.getElementsByClassName('side1_1');

    const [side2] = document.getElementsByClassName('side2_1');

    const [side3] = document.getElementsByClassName('side3_1');

    const side1_value = +side1.value;

    const side2_value = +side2.value;

    const side3_value = +side3.value;

    const p = (side1_value + side2_value + side3_value) * 0.5;

    const SQ = Math.sqrt(p * (p-side1_value) * (p-side2_value) * (p-side3_value));

    document.getElementsByClassName("Unsver1")[0].innerText = SQ; 

}

  document.getElementById('but1') 
  .addEventListener('click', Task1);



    const Task2 = () =>{
        const [side1Task2] = document.getElementsByClassName('side1_1Task2');

        const [side2Task2] = document.getElementsByClassName('side2_1Task2');
    
        const [side3Task2] = document.getElementsByClassName('side3_1Task2');
    
        const side1Task2_value = +side1Task2.value;
    
        const side2Task2_value = +side2Task2.value;
    
        const side3Task2_value = +side3Task2.value;

        const Sin1 = Math.sin(side3Task2_value);

        const Result2 = 0.5 * side1Task2_value * side2Task2_value * Sin1;

        document.getElementsByClassName("Unsver2")[0].innerText = Result2;
    }

    document.getElementById('but2') 
    .addEventListener('click', Task2);

    

    const Task3 = () =>{
        const [side1Task3] = document.getElementsByClassName('side1_1Task3');

        const [side2Task3] = document.getElementsByClassName('side2_1Task3');
    
        const side1Task3_value = +side1Task3.value;
    
        const side2Task3_value = +side2Task3.value;
        
        const Result3 = 0.5 * side1Task3_value * side2Task3_value ;

        document.getElementsByClassName("Unsver3")[0].innerText = Result3;

    }

    document.getElementById('but3') 
    .addEventListener('click', Task3);



    const Task5 = () =>{
        const [side1Task5] = document.getElementsByClassName('side1_1Task5');

        const [side2Task5] = document.getElementsByClassName('side2_1Task5');

        const [side3Task5] = document.getElementsByClassName('side3_1Task5');

        const [side4Task5] = document.getElementsByClassName('side4_1Task5');
    
        const side1Task5_value = +side1Task5.value;
    
        const side2Task5_value = +side2Task5.value;

        const side3Task5_value = +side3Task5.value;

        const side4Task5_value = +side4Task5.value;
        
        const Result5 = side1Task5_value * side2Task5_value * side3Task5_value / 4 * side4Task5_value;

        document.getElementsByClassName("Unsver5")[0].innerText = Result5;

    }

    document.getElementById('but5') 
    .addEventListener('click', Task5);






    const Task6 = () =>{
        const [side1Task6] = document.getElementsByClassName('side1_1Task6');

        const side1Task6_value = side1Task6.value;

        const length = side1Task6_value.split('').length;
        console.log(length);

        const length2 = length / 2;
        console.log(length2);

        const half1 = side1Task6_value.split('').slice (0,length2 + 1);
        console.log(half1);

        const half1join = half1.join()
        

        const half2 = side1Task6_value.split('').slice (length2, length);
        console.log(half2);

        const half2rotatetd = half2.reverse();
        console.log(half2rotatetd);

        const half2rotatetdjoin = half2rotatetd.join()

        if  (half1join == half2rotatetdjoin){
          document.getElementsByClassName("Unsver6")[0].innerText = "true";
        } 
        
        if(half1join != half2rotatetdjoin){
         document.getElementsByClassName("Unsver6")[0].innerText = "folse";
        }
        

    }

    document.getElementById('but6') 
    .addEventListener('click', Task6);



    const Task7 = () =>{
        const side1Task7 = document.getElementsByClassName('side1_1Task7')[0].value;

        const side2Task7 = document.getElementsByClassName('side2_1Task7')[0].value;

        const Words1 = side1Task7.split('');
        console.log(Words1)

        const Words2 = side2Task7.split('');
        console.log(Words2)

        const composedWord = Words1.map(Word => {
            if (Words2.includes(Word)) {
              return Word;
            } else {
              return '';
            }
          }).join('');
        
          console.log(composedWord);



          if (composedWord) {
            document.getElementsByClassName("Unsver7")[0].innerText = "анаграма";
          } else {
            document.getElementsByClassName("Unsver7")[0].innerText = "не анаграма";
          }
  }


  document.getElementById('but7') 
  .addEventListener('click', Task7);
  


  const Task8 = () =>{
    const [side1Task8] = document.getElementsByClassName('side1_1Task8');

    const side1Task8_value = side1Task8.value;

    console.log (side1Task8_value);

    const array8 = [1, 1];


    for (let i = 0; i < side1Task8_value; i += 1 ) {

      const array8Length = array8.length;

      console.log("Довжина ерею", array8Length);

      const newNumber = array8[array8Length - 1] + array8[array8Length - 2];

      console.log ("новий намбєрь", newNumber);

      array8.push (newNumber);

      console.log ("Весь масив", array8);

    }

    document.getElementsByClassName("Unsver8")[0].innerText = array8[array8.length - 2];

  }
  document.getElementById('but8') 
  .addEventListener('click', Task8);


  const Task9 = () =>{
    const [side1Task9] = document.getElementsByClassName('side1_1Task9');

    const side1Task9_value = side1Task9.value;

    console.log ("Інпут:", side1Task9_value);

    let a = 1, b = 1;

    if (side1Task9_value == 1){

      document.getElementsByClassName("Unsver9")[0].innerText = "true"; 

      return true;

    }

    do {
      const elem = a + b;

      a = b;

      b = elem

      if (elem > side1Task9_value){

        document.getElementsByClassName("Unsver9")[0].innerText = "folze";
        
        return false;

      };

      if (elem == side1Task9_value) {

        document.getElementsByClassName("Unsver9")[0].innerText = "true";

        return true;

      }

    } while (true);
    
    

  }
  document.getElementById('but9') 
  .addEventListener('click', Task9);

