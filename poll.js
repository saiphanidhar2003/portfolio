var calc=[ 
{ name:"javaScript",vote:0},
{name:"aws",vote:0},
{name:"cyber",vote:0},
{name:"Python",vote:0}
]
const radioButtons = document.querySelectorAll('input[name="poll"]');

document.addEventListener('DOMContentLoaded', () => {
  const results = document.getElementById('results');
  
});
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
const radioButtons1 = document.querySelectorAll('input[name="poll"]');
radioButtons1.forEach(radioButton1 => {
radioButton1.previousElementSibling.style.backgroundColor="#feeddc";
});
radioButton.previousElementSibling.style.backgroundColor="#d72a76";
    
  });
});
const btn1=document.getElementById("submit-btn");
btn1.addEventListener("click",compute);
function compute()
{
const check=document.querySelector('input[name="poll"]:checked');
if(!check){
alert("select an option");
return;
}
var r=calc.find( ele=>ele.name===check.value);
if(r)
{
r.vote++;
displayResults();
}
}
function displayResults(){
var s=0;
calc.forEach(ele=>s+=ele.vote)
if (results) {
    results.innerHTML = "";
  }
calc.forEach(ele=>{
const d=document.createElement('div');
d.className="option-result";
const p=((ele.vote/s)*100).toFixed(2)||0;
const width=p>0?p+"%":"0%";
d.innerHTML=`
<span class="option-text">${ele.name}</span>
<div class="bar-container">
<div class="bar" style="width:${width};"></div>
</div>
<span class="percentage">${p}</span>
`;
results.appendChild(d);
});
}
displayResults();