import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // Importação correta para NextRequest

export function middleware(request: NextRequest) { // Corrigindo a tipagem de request

   const authenticated = false;

   if (request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) { // Corrigido o startsWith e lógica de autenticação
      return NextResponse.redirect(new URL('/', request.url)); // Redireciona para a página inicial
   }
          
   return NextResponse.next(); // Continua o fluxo normal da requisição
}
