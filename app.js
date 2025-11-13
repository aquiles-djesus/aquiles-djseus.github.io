const tarefa = document.querySelector("#tarefa")  
const lista1 = document.querySelector("#lista1")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    if(tarefa.value == ""){
        alert("Digite um valor válido")
    } 
    

    else {
        lista1.innerHTML += 
                            `
                            <ul id="lista1">
                                <li>
                                     <i class="check" id="✓">✓</i>
                                       <span>${tarefa.value}</span>
                                      <i class="close" id="𐄂">𐄂</i>
                                    </li>
                            <ul>
                            `
        
    }

    tarefa.value = "";

    const close = document.querySelectorAll(".close");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", function(){
            close[i].parentElement.remove();
        })
    }

    const check = document.querySelectorAll(".check");
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener("click", function(e) {
            const span = e.target.parentElement.querySelector("span");
        if (span.style.textDecoration === "line-through") {
            span.style.textDecoration = "none";
        } else {
            span.style.textDecoration = "line-through";
            }
        });
    }


    
    
        
            
        

})
