let input=document.querySelector("input");
let addbtn=document.querySelector("button");
let ul = document.querySelector("ul");


addbtn.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=`${input.value}`;
    dltBtn=document.createElement("button");
    dltBtn.innerText="Delete";
    if(li.innerText!=""){
        li.appendChild(dltBtn);
        ul.appendChild(li);
        input.value="";
    }
});

// Event Delegation 
ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);
    console.log(event.target.parentElement);
   if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
   }
});