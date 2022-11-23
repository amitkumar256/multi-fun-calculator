

function myFunction(){
    const Txt2 =parseFloat (document.getElementById("txt2").value);
const Txt1 =parseFloat (document.getElementById("txt1").value);

const sum=Txt1+Txt2;
    document.getElementById("result").innerText=sum;

}

function myFunction1(){
    const Txt2 =parseFloat (document.getElementById("txt2").value);
const Txt1 =parseFloat (document.getElementById("txt1").value);

const sum=Txt1-Txt2;
    document.getElementById("result").innerText=sum;

}
function myFunction2(){
    const Txt2 =parseFloat (document.getElementById("txt2").value);
const Txt1 =parseFloat (document.getElementById("txt1").value);

const sum=Txt1*Txt2;
    document.getElementById("result").innerText=sum;

}
function myFunction3(){
 const Txt2 =parseFloat (document.getElementById("txt2").value);
const Txt1 =parseFloat (document.getElementById("txt1").value);

const sum=Txt1/Txt2;
    document.getElementById("result").innerText=sum;

}
function myFunction4(){
   
        document.getElementById("result").innerText=" ";
        document.getElementById("txt1").value=" ";
        document.getElementById("txt2").value=" ";
    
   
}

function myFunction5(){
    const Txt2 =parseFloat (document.getElementById("txt2").value);
   const Txt1 =parseFloat (document.getElementById("txt1").value);
   
   const sum=Math.pow(Txt1,Txt2)
       document.getElementById("result").innerText=sum;
   
   }