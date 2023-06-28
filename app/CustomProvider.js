'use client'
import { SSRProvider } from "react-bootstrap"
import NavBar from "./components/NavBar"

export default function CustomProvider({ children }) {
  return (
    <SSRProvider>
        <NavBar />
        {children}
    </SSRProvider>
  )
}
