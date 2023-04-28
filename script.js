document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".d").forEach(juego =>{
  
            juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?juego.classList.remove("filtro")
              :juego.classList.add("filtro")
        })
  
    }
  
  
  })