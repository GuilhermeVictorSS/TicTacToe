let player = "X";
const checker = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
let control = 2;
let draw = 0;
let p1pt = 0;
let p2pt = 0;
const nome1 = prompt("Digite o nome do Player 1")
document.querySelector("#p1name").innerHTML=nome1;
const nome2 = prompt("Digite o nome do Player 2")
document.querySelector("#p2name").innerHTML=nome2;
const arrayX = [];
const arrayO = [];
const btnreset = document.getElementById("reset")
const botao1 = document.getElementById("item1");
const botao2 = document.getElementById("item2");
const botao3 = document.getElementById("item3");
const botao4 = document.getElementById("item4");
const botao5 = document.getElementById("item5");
const botao6 = document.getElementById("item6");
const botao7 = document.getElementById("item7");
const botao8 = document.getElementById("item8");
const botao9 = document.getElementById("item9");

btnreset.addEventListener("click", () =>{
    reset ()
})
// 1
botao1.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item1").innerHTML="X";
        arrayX.push(1);
        player = "O";
        checkerX ();
    }
    else {
        document.querySelector("#item1").innerHTML="O"
        arrayO.push(1);
        player = "X"
        checkerO ();
    }
    botao1.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 2
botao2.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item2").innerHTML="X"
        arrayX.push(2)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item2").innerHTML="O"
        arrayO.push(2);
        player = "X"
        checkerO ();
    }
    botao2.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 3
botao3.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item3").innerHTML="X"
        arrayX.push(3)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item3").innerHTML="O"
        arrayO.push(3);
        player = "X"
        checkerO ();
    }
    botao3.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 4
botao4.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item4").innerHTML="X"
        arrayX.push(4)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item4").innerHTML="O"
        arrayO.push(4);
        player = "X"
        checkerO ();
    }
    botao4.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 5
botao5.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item5").innerHTML="X"
        arrayX.push(5)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item5").innerHTML="O"
        arrayO.push(5);
        player = "X"
        checkerO ();
    }
    botao5.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 6
botao6.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item6").innerHTML="X"
        arrayX.push(6)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item6").innerHTML="O"
        arrayO.push(6);
        player = "X"
        checkerO ();
    }
    botao6.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 7
botao7.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item7").innerHTML="X"
        arrayX.push(7)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item7").innerHTML="O"
        arrayO.push(7);
        player = "X"
        checkerO ();
    }
    botao7.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 8
botao8.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item8").innerHTML="X"
        arrayX.push(8)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item8").innerHTML="O"
        arrayO.push(8);
        player = "X"
        checkerO ();
    }
    botao8.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
//ITEM 9
botao9.addEventListener("click", () => {
    if (player == "X"){
        document.querySelector("#item9").innerHTML="X"
        arrayX.push(9)
        player = "O"
        checkerX ();
    }
    else {
        document.querySelector("#item9").innerHTML="O"
        arrayO.push(9);
        player = "X"
        checkerO ();
    }
    botao9.disabled = true;
    document.querySelector("#player").innerHTML=`Turno do ${player}`;
});
function checkerX (){
    
    checker.forEach(array => {
        const set2 = new Set(array);   
        const comuns = arrayX.filter(item => set2.has(item));
        let checkNum = comuns.length
        if (checkNum == 3){
            alert("X ganhou!")
            desativarBTN()
            p1pt ++
            document.querySelector("#p1wins").innerHTML=`Wins: ${p1pt}`
            control = 1
        }
    });
    if (control == 2){
        if (arrayX.length==5){
            alert("Deu velha!");
            draw ++
            document.querySelector("#draw").innerHTML=`Empates: ${draw}`
        }
    }
}
function checkerO (){
    checker.forEach(array => {
        const set2 = new Set(array);
        const comuns = arrayO.filter(item => set2.has(item));
        let checkNum = comuns.length
        if (checkNum == 3){
            alert("O ganhou!")
            desativarBTN();
            p2pt ++
            document.querySelector("#p2wins").innerHTML=`Wins: ${p2pt}`
            control = 1
        }
    });
    if (control == 2){
        if (arrayO.length==5){
            alert("Deu velha!");
            draw ++
            document.querySelector("#draw").innerHTML=`Empates: ${draw}`
        }
    }
}
function desativarBTN (){
    botao1.disabled=true;
    botao2.disabled=true;
    botao3.disabled=true;
    botao4.disabled=true;
    botao5.disabled=true;
    botao6.disabled=true;
    botao7.disabled=true;
    botao8.disabled=true;
}
function reset (){
    botao1.disabled=false;
    botao2.disabled=false;
    botao3.disabled=false;
    botao4.disabled=false;
    botao5.disabled=false;
    botao6.disabled=false;
    botao7.disabled=false;
    botao8.disabled=false;
    botao9.disabled=false;
    document.querySelector("#item1").innerHTML="";
    document.querySelector("#item2").innerHTML="";
    document.querySelector("#item3").innerHTML="";
    document.querySelector("#item4").innerHTML="";
    document.querySelector("#item5").innerHTML="";
    document.querySelector("#item6").innerHTML="";
    document.querySelector("#item7").innerHTML="";
    document.querySelector("#item8").innerHTML="";
    document.querySelector("#item9").innerHTML="";
    for (i = 1; i <= 9; i++){
        arrayX.shift();
        arrayO.shift();
    }
}