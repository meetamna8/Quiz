let question1=document.getElementsByName("question1")
let question2=document.getElementsByName("question2")
let question3=document.getElementsByName("question3")
let question4=document.getElementsByName("question4")
let question5=document.getElementsByName("question5")

let form=document.querySelector("form")

let ans1;
let ans2;
let ans3;
let ans4;
let ans5;
let result=0;


question1.forEach((items)=>{
    items.addEventListener("click",()=>{
        if(items.checked){
           ans1=(items.value);
           if(ans1=="function"){
            result+=1
           }
         }
    })
})

question2.forEach((items)=>{
    items.addEventListener("click",()=>{
        if(items.checked){
           ans2=(items.value);
           if(ans2=="append()"){
            result+=1
           }
        }
    })
})

question3.forEach((items)=>{
    items.addEventListener("click",()=>{
        if(items.checked){
           ans3=(items.value);
           if(ans3=="push()"){
            result+=1
           }
        }
    })
})

question4.forEach((items)=>{
    items.addEventListener("click",()=>{
        if(items.checked){
            ans4=(items.value);
            if(ans4=="Character"){
                result+=1
            }
        }
    })
})

question5.forEach((items)=>{
    items.addEventListener("click",()=>{
        if(items.checked){
            ans5=(items.value);
            if(ans5=="if"){
                result+=1
            }
        }
    })
})

let mp=document.querySelector("h4")
console.log(mp);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(result);
    // alert("Marks"+" : "+result+"/5");
    mp.append("Marks"+" : "+result+"/5")
})