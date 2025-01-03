import React, { useState, useEffect } from 'react';

function ClockOutput(){

const [time, setTime] = useState(new Date());
useEffect(() => {setInterval(() => {setTime(new Date())}, 1000)});
const [dated, setdated] = useState(new Date());
useEffect(() => {setInterval(() => {setdated(new Date())}, 100000)});
      

let Day= dated.getDay();
let daa = Day.toString();

function Dayf(da){ 
    if(da == '1'){return Monday ;}
    else if(da =='2'){return "Tuesday";} 
    else if(da =='3'){return "Wednesday";} 
    else if(da =='4'){return "Thrusday";}
    else if(da =='5'){return "Friday";}
    else if(da =='6'){return "Saturday";}
    else if(da =='0'){return "Sunday";}
    else {return console.log('false');}
};


return(<>
<div className="main_class">
<h4>
Today Day is {Dayf(daa)}, Today Date is {dated.toLocaleDateString()} ,Time{time.toLocaleTimeString()},
Have a nice Day
</h4>

</div>
</>);
}

export default ClockOutput;