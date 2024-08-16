const text=document.getElementById("text");
const btn=document.getElementById("control");
const taskcontainer=document.getElementById("task-container");
btn.addEventListener('click',dolist);
function dolist(){
let r=text.value;
let task=document.createElement('div');
task.classList.add('task');
let li=document.createElement('li');
li.innerText=r;
task.appendChild(li);
let checkButton=document.createElement('button');
checkButton.innerText="completed";
checkButton.classList.add("check");
task.appendChild(checkButton);
let delet=document.createElement('button');
delet.classList.add("delete");
delet.innerText="delete";
task.appendChild(delet);
if(text.value===""){
alert('Please Enter a Task'); 
}
else{
taskcontainer.appendChild(task);
}
text.value="";
checkButton.addEventListener('click',function(){
checkButton.previousSibling.style.textDecoration="line-through";
});
delet.addEventListener('click',function(e){
let target=e.target;
target.parentElement.remove();
});
}