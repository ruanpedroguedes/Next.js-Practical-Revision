import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do Zero!',
  description: 'Aprendendo Next JS do Zero',
  openGraph:{
    title: 'Aprendendo Next JS com Sujeito No youtube!',
    description: 'Aprendendo Next JS com Sujeito No youtube!',
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export const revalidade = 60

export default function Home(){

  const randomNumber = Math.random() * 10

  return(
    <div>
      <h1>Página de Home</h1>
      <h2>Número gerado: {randomNumber}</h2>
    </div>
  )
}
