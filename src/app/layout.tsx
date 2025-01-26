import "./globals.css";
import { Header } from "../components/Header";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Aula Next JS do Zero!',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
