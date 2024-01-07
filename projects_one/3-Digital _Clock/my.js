const clock=document.querySelector('#clock');

setInterval(()=>{
    let newDate=new Date();
    //console.log(newDate.toLocaleTimeString());
    clock.innerHTML=`Date : ${newDate.toLocaleDateString()}<br>Time: ${newDate.toLocaleTimeString()}`;
},1000)