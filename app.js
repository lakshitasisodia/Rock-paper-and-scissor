let userscore =0
let compscore =0
let  choices = document.querySelectorAll(".choice")
let reset = document.querySelector("#reset")
let scoreUser = document.querySelector("#scoreUser")
let scoreComputer = document.querySelector("#scoreComputer")
let messagebox = document.querySelector("#messagebox")
const options = ["rock","paper","scissor"]
const compchoice= () =>{
    let random = Math.floor(Math.random()*3)
    return random;

}
scoreUser.innerText = userscore
scoreComputer.innerText = compscore
const checkwinner =(user,comp) =>
{
    if (user == comp) {
       messagebox.innerText ="It's a draw";
       messagebox.style.color = "black"
    }
    else{

        if ((user == "rock" && comp =="paper" ) || (user=="paper" && comp == "scissor") || (user=="scissor" && comp == "rock") ) {
            compscore++
            messagebox.innerText = `Computer won because it choose ${comp}`
            messagebox.style.color = "red"
            
        } else {
            userscore++
            messagebox.innerText = `You won because computer choose ${comp}`
            messagebox.style.color = "green"
        }
    }
}
const checkchoice =(userchoices)=>
    {
        let compcho = options[compchoice()];
       checkwinner(userchoices,compcho)
    }
choices.forEach((tap)=>
        {
            tap.addEventListener("click",()=>{
                messagebox.innerText = `You chossed ${tap.id}`
                checkchoice(tap.id);
                scoreUser.innerText = userscore
                scoreComputer.innerText = compscore
                
            })
        })

reset.addEventListener("click",()=>{
    console.clear()
    userscore = 0
    compscore = 0
    messagebox.innerText = "Game was restarted"
    messagebox.style.color ="green"
    scoreUser.innerText = userscore
scoreComputer.innerText = compscore


})
