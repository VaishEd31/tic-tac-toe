let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msg=document.querySelector(".msg")
let msgcontainer= document.querySelector(".msg-container");
let newbtn=document.querySelector(".newbtn")

let turn=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame = ()=>{
    turn=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    count=0;
};

const enableBoxes=()=>{
    for ( let box1 of box){
        box1.disabled=false;
        box1.innerText="";
    }
}

box.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turn){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++

        let isWinner=checkWinner();

        if (count===9 && !isWinner){
            showmsg();
        }

    });


    
});

const showWinner= (winner) =>{
    msg.innerText=`Congratulations! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};
const disableBox=() =>{
    for (let box1 of box){
        box1.disabled=true;
    };
};

const checkWinner =()=>{
    for(let pattern of winPatterns){
            let val1 = box[pattern[0]].innerText; 
            let val2 = box[pattern[1]].innerText;
            let val3 = box[pattern[2]].innerText;

            if (val1!="" && val2!="" && val3!=""){
                if (val1===val2 && val2===val3){
                    console.log("winner!",val1);
                    disableBox();
                    showWinner(val1);
                }

                }
            } 
    };


const showmsg=()=>{
    msg.innerText=`no-one won!`;
    msgcontainer.classList.remove("hide");
    disableBox();  
};

resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);


