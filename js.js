let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
                //using slice to take the last number from the display
                case '←':
                    display.innerText = display.innerText.slice(0,-1);
                    break;
                    case '=':
                        display.innerText = eval(display.innerText);
                        break;
                    default:
//linking contents of buttons into the display 
                display.innerText += e.target.innerText;
        }
    })
})
