 let ac = document.querySelector(".ac");
 let bl = false;
 let flag =0;
  // alert("my name is calculator");
let input = document.querySelector(".inp1");
// input.innerHTML ="madhu"

//  console.dir(ac)
//  input.value = "500";
 console.dir(input)

 console.dir("name")
 
 let btns = document.querySelectorAll(".btn");
//  console.dir(btns);
 for(let i =2;i<btns.length-1;i++){
  let btn = btns[i];
  // console.dir(btn);
 
    btn.addEventListener("click",
  ()=>{
    if(flag==0){
      input.innerText="";
      input.innerText = input.innerText+ `${btn.innerText}`;
      flag++;
      bl = true;
    }
    else{
    input.innerText = input.innerText+ `${btn.innerText}`;
    }
  })
  
}
//  let AC = btn[0];
//  console.dir(AC);
//  AC.addEventListener("click",
//   ()=>{
//     input.innerHTML = "AC has clicked";
//     // alert("hii");
//   });
 function cleardata(){
   input.innerText ="Welcome to Calculator";
   out.innerText= "Output";
   out.style.color = "black"
   flag=0;
 }
//  function print(){
//   input.innerHTML = "AC has clicked";
  
//  }
let del = document.querySelector(".del");
// console.dir(del);
del.addEventListener("click",
  ()=>{
    if(bl){
    let str = input.innerText;
    input.innerText =str.substring(0,str.length-1);
    let x = input.innerText;
    if(x.length==""){
      cleardata();
      bl = false;
    }
  }
  })
let out = document.querySelector(".output1");

let equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{

  let str = input.innerText;
 try {
  out.innerText=  calculation(str);
}
catch(err) {

  out.innerText=  "Error";
  out.style.color = "red"
}
  
})

function calculation(str){
  console.log(eval(str));
  return eval(str);
}

// function evil(fn) {
//   return new Function('return ' + fn)();
// }

// console.log(evil('12/5*9+9.4*3'));
 