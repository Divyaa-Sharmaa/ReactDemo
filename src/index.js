import React from 'react';
import ReactDOM from 'react-dom';

let curDate = new Date(2023, 5, 6, 11);
curDate = curDate.getHours();
let greeting ='';

const hel={
  background: 'aqua'
};

const greet = {
  color: 'blue',
  textAlign: 'center',
  fontWeight: 'bold',
  background: 'lightPink'
};

if(curDate>=1 && curDate<12){
  greeting = 'Good Morning';
  greet.color = 'grey';
}else if(curDate>=12 && curDate<16){
   greeting = 'Good Afternoon';
   greet.color = 'red';
}else if(curDate>=16 && curDate<19){
  greeting = 'Good Evening';
  greet.color = 'purple';
}
else if(curDate>=19 && curDate<24){
  greeting = 'Good Night'
  greet.color = 'black';
}

ReactDOM.render(
       <h1 style={hel}>Hello Sir, <span style={greet}>{greeting}</span></h1>
     ,document.getElementById('root')
     );

