window.onload =()=>{

    function buildClick() {

    
    console.log("Running....");

    const date=new Date();
    console.log(date);

    let hours=date.getHours() //0---23 format
    let minutes=date.getMinutes()//0--59
    let seconds=date.getSeconds()//0--59

   document.querySelector('#clock-hours').innerText=hours;
   document.querySelector('#clock-minutes').innerText=minutes;
   document.querySelector('#clock-seconds').innerText=seconds;

   setTimeout(buildClick,1000)
    }
    buildClick();
}