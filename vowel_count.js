const btn1=document.getElementById('vowel');
const ta=document.getElementById('text');
const r=document.getElementById('result');
btn1.addEventListener('click',vowel);
function vowel(){
let s=ta.value;
let count=0;
for(let i=0;i<s.length;i++)
{
if(s[i]==='a'||s[i]==='e'||s[i]==='i'||s[i]==='o'||s[i]=='u')
{
count++;
}
else if(s[i]==='A'||s[i]==='E'||s[i]==='I'||s[i]==='O'||s[i]=='U')
count++;
}
r.innerText="The total number of vowels "+count;
}