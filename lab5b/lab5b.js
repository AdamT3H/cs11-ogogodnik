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

        const half1 = side1Task6_value.split('').slice (0,length2);
        

        const half2 = side1Task6_value.split('').slice (length2, length);

        const half2rotatetd = half2.reverse();

        if  (half1 == half2rotatetd){
          document.getElementsByClassName("Unsver6")[0].innerText = "true";
        }
        if (half1 != half2rotatetd){
         document.getElementsByClassName("Unsver6")[0].innerText = "folse";
        }

    }

    document.getElementById('but6') 
    .addEventListener('click', Task6);