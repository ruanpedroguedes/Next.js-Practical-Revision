'use client'

import { useState } from "react"

export function Button(){
   const [nome, setNome] = useState("Ruan")

   function handleChangeName() {
        setNome("Ruan Pedro")  
   }

   return(
       <div>
          <button onClick={handleChangeName}>Alterar nome</button>
          <h3>Nome: {nome}</h3>
       </div>   
   )       
}
