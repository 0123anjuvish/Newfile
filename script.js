
const textbox = document.querySelector('.box textarea');
 var checkBtn = document.querySelector('#check-btn');
let vowelCount = document.querySelector('#vowelCount');

vowelCount.innerHTML = 0;
checkBtn.addEventListener('click',()=>{
    let counter =0;
    let vowArr = ['a','e','i','o','u'];
    for(let letter of textbox.value.toLowerCase()){
        if(vowArr.includes(letter)){
            counter++;
        }
    }
           // console.log(counter);
          
   vowelCount.innerHTML = counter ;
   console.log(counter);
});
