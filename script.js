const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("inputTask");
const ul = document.getElementById("current");
const ul2 = document.getElementById("ended");
const allLi = document.querySelectorAll("li");
const error = document.getElementById("error");

const table = [];

btnAdd.addEventListener("click", () =>{
    if(table.includes(input.value)){
        error.textContent = "Tâche déjà dans la liste."
        return
    }
    if(input.value === ""){
        error.textContent = "Saisie invalide."
        return
    }else{
        table.push(input.value);

        const newLi = document.createElement("li");
        const newBtnValide = document.createElement("button");
        const newBtnSupprimer = document.createElement("button");
        const newBtnCurrent = document.createElement("button");
        const newBtnEdit = document.createElement("button");

        newBtnValide.textContent = "Terminer";
        newBtnValide.classList.add("btn");
        newBtnValide.classList.add("btn-valide");
        
        newBtnSupprimer.textContent = "Supprimer";
        newBtnSupprimer.classList.add("btn");
        newBtnSupprimer.classList.add("btn-supprimer");
        
        newBtnCurrent.textContent = "En Cours";
        newBtnCurrent.classList.add("btn");
        newBtnCurrent.classList.add("btn-current");
        
        newBtnEdit.textContent = "Modifier";
        newBtnEdit.classList.add("btn");
        newBtnEdit.classList.add("btn-blue");

        newLi.innerHTML = input.value;
        
        ul.appendChild(newLi);
        newLi.appendChild(newBtnEdit);
        newLi.appendChild(newBtnValide);
        newLi.appendChild(newBtnSupprimer);

        newBtnValide.addEventListener("click", () =>{
            newLi.removeChild(newBtnValide);
            ul.removeChild(newLi);
            ul2.appendChild(newLi);
            newLi.appendChild(newBtnEdit);
        })

        newBtnSupprimer.addEventListener("click", () =>{
            console.log(newLi)
            if(ul.contains(newLi))
                ul.removeChild(newLi);
            if(ul2.contains(newLi))
                ul2.removeChild(newLi);
        })
    }
    
});