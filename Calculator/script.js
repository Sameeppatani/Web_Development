var button=document.getElementsByClassName("btn");
var display=document.getElementsByClassName("display");
// let display=document.querySelector(".display");
var operant1=0;
var operant2=null;
var operator=null;



for(let i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){
        let value=this.getAttribute('data-value');
        if(value=='+'){
            operator='+'
            operant1=parseFloat(display[0].textContent);
            display[0].innerText="";
        }else if(value=='-'){
            operator='-';
            operant1=parseFloat(display[0].textContent);
            display[0].innerText="";
        }
        else if(value=='*'){
            operator='*';
            operant1=parseFloat(display[0].textContent);
            display[0].innerText="";
        }else if(value=='/'){
            operator='/';
            operant1=parseFloat(display[0].textContent);
            display[0].innerText="";
        }else if(value=='C'){ 
            operant1=0;
            operant2=null;
            operator=null;
            display[0].innerText="";
        }
        else if(value=='='){
            operant2=parseFloat(display[0].textContent);
            display[0].innerText="";
            var result=(eval(operant1+operator+operant2));
            display[0].innerText=result;
        }
        else{
            //class is pass as a array and display index is 1 so 0.
            display[0].innerText+=value;
        }

    });
    
}