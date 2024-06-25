window.onload = function(){
   loadElementDisplay();
   timeClock(); 
};

//[top, rightFirstHalf, rightSecondHalf, bottom, leftSecondHalf, leftFirstHalf, middleFirstHalf, middleSecondHalf]
//[A, B, C, D, E, F, G1, G2]
let d_0 =[1, 1, 1, 1, 1, 1, 0, 0];
let d_1 =[0, 1, 1, 0, 0, 0, 0, 0];
let d_2 =[1, 1, 0, 1, 1, 0, 1, 1];
let d_3 =[1, 1, 1, 1, 0, 0, 1, 1];
let d_4 =[0, 1, 1, 0, 0, 1, 1, 1];
let d_5 =[1, 0, 1, 1, 0, 1, 1, 1];
let d_6 =[1, 0, 1, 1, 1, 1, 1, 1];
let d_7 =[1, 1, 1, 0, 0, 0, 0, 0];
let d_8 =[1, 1, 1, 1, 1, 1, 1, 1];
let d_9 =[1, 1, 1, 1, 0, 1, 1, 1];

let numberDisp = [d_0 ,d_1 ,d_2 ,d_3 ,d_4 ,d_5 ,d_6 ,d_7 ,d_8, d_9];
let elementDisp0_9 = [];
let elementDisp = []; // display 6 element [h,h,m,m,s,s]

function loadElementDisplay(){
    var numberDisplay = document.getElementById('numberDisplay');
    elementDisp.push(numberDisplay.children[0]);
    elementDisp.push(numberDisplay.children[1]);
    elementDisp.push(numberDisplay.children[3]);
    elementDisp.push(numberDisplay.children[4]);
    elementDisp.push(numberDisplay.children[6]);
    elementDisp.push(numberDisplay.children[7]);
}

function loadElementDisplay0_9(number){
    var element = number.children;
    elementDisp0_9 = [];
    elementDisp0_9.push(element[0]); //A
    elementDisp0_9.push(element[2]); //B
    elementDisp0_9.push(element[6]); //C
    elementDisp0_9.push(element[7]); //D
    elementDisp0_9.push(element[5]); //E
    elementDisp0_9.push(element[1]); //F 
    elementDisp0_9.push(element[3]); //G1
    elementDisp0_9.push(element[4]); //G2
}

function displayNumber(d_number){
    for(var i=0;i<elementDisp0_9.length;i++){
        if(d_number[i]==1)
            colorDisp(i, elementDisp0_9[i],'black');
   }
}

function colorDisp(number,element,color){
    switch(number){
        case 0:
            element.style.borderTopColor = color;
            break;
        case 1:
            element.style.borderRightColor = color;
            break; 
        case 2:
            element.style.borderRightColor = color;
            break;         
        case 3:
            element.style.borderBottomColor = color;
            break;   
        case 4:
            element.style.borderLeftColor = color;
            break;
        case 5:
            element.style.borderLeftColor = color;
            break; 
        case 6:
            element.style.borderBottomColor = color;
            break;         
        case 7:
            element.style.borderTopColor = color;
            break; 
    }
}

function showTimeDisplay(){
    var time = new Date(); 

    let d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    h = h<10 ? '0' + h : h ;
    m = m<10 ? '0' + m : m ;
    s = s<10 ? '0' + s : s ;

    h = h.toString();
    m = m.toString();
    s = s.toString();

    loadElementDisplay0_9(elementDisp[0]);
    clearDisplay();
    var value = h[0];
    displayNumber(numberDisp[value]);

    loadElementDisplay0_9(elementDisp[1]);
    clearDisplay();
    var value = h[1];
    displayNumber(numberDisp[value]);

    loadElementDisplay0_9(elementDisp[2]);
    clearDisplay();
    var value = m[0];
    displayNumber(numberDisp[value]);

    loadElementDisplay0_9(elementDisp[3]);
    clearDisplay();
    var value = m[1];
    displayNumber(numberDisp[value]);

    loadElementDisplay0_9(elementDisp[4]);
    clearDisplay();
    var value = s[0];
    displayNumber(numberDisp[value]);

    loadElementDisplay0_9(elementDisp[5]);
    clearDisplay();
    var value = s[1];
    displayNumber(numberDisp[value]);
}

function clearDisplay(){
    var i=0;
    elementDisp0_9.forEach(element =>{
        colorDisp(i, element, 'rgb(108, 108, 108)');
        i++;
    });
}

function timeClock(){
    var clock = setInterval(showTimeDisplay,1000);
}
