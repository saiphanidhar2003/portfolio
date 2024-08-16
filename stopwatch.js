const minutes1=document.getElementById("minutes");
const seconds1=document.getElementById("seconds");
const milliseconds1=document.getElementById("milliseconds");
const btn1=document.getElementById("start");
const btn2=document.getElementById("pause");
const btn3=document.getElementById("stop");
const btn4=document.getElementById("reset");
const laplist=document.getElementById("lapList");
let interval;
let minutes=0,seconds=0,milliseconds=0;
btn1.addEventListener('click',startWatch);
btn2.addEventListener('click',pauseWatch);
btn3.addEventListener('click',stopWatch);
btn4.addEventListener('click',resetWatch);
function stopWatch(){
clearInterval(interval);
const lapTime=minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0')+":"+milliseconds.toString().padStart(2,'0');
const listItem=document.createElement('li');
let i=laplist.childElementCount;
listItem.innerHTML='<span>Lap '+i+':</span> '+lapTime;
laplist.append(listItem);
milliseconds=0;
seconds=0;
minutes=0;
minutes1.innerText=minutes.toString().padStart(2,'0');
seconds1.innerText=seconds.toString().padStart(2,'0');
milliseconds1.innerText=milliseconds.toString().padStart(2,'0');
btn1.disabled=false;
}
function resetWatch(){
clearInterval(interval);
milliseconds=0;
seconds=0;
minutes=0;
minutes1.innerText=minutes.toString().padStart(2,'0');
seconds1.innerText=seconds.toString().padStart(2,'0');
milliseconds1.innerText=milliseconds.toString().padStart(2,'0');
btn1.disabled=false;
}
function pauseWatch(){
clearInterval(interval);
btn1.disabled=false;
btn2.disabled=true;
}
function startWatch(){
interval=window.setInterval(watch,10);
btn1.disabled=true;
btn2.disabled=false;
}
function watch(){
milliseconds++;
if(milliseconds===60)
{
milliseconds=0;
seconds++;
if(seconds===60)
{
seconds=0;
minutes++;
}
}
minutes1.innerText=minutes.toString().padStart(2,'0');
seconds1.innerText=seconds.toString().padStart(2,'0');
milliseconds1.innerText=milliseconds.toString().padStart(2,'0');
}

