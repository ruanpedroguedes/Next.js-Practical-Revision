import { PostProps } from "../page"
import { PostInfo } from "./components/post"
import { Suspense } from "react"

export default async function DetailPost({
     params,     
}:{
     params: Promise<{id: string}>    
}){

     const {id} = await params
     
    
          
    return(
       <div>
          <h1>Detalhes do Post: {id}</h1>

          <Suspense fallback ={<h1> carregando...</h1>} >
             <PostInfo id={id}/>
          </Suspense>
         
       </div>   
    )      
}
