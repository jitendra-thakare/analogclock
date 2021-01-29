setInterval(()=>{
  d = new Date();
  hours= d.getHours();
  minutes= d.getMinutes();
  seconds= d.getSeconds();
  
  hourhand= 30*hours+minutes/2;
  minutehand=6*minutes;
  secondhand=6*seconds;

  hour.style.transform = `rotate(${hourhand}deg)`;
  minute.style.transform = `rotate(${minutehand}deg)`;
  second.style.transform = `rotate(${secondhand}deg)`;

},1000);
