import "./App.css"
import { useState } from "react"
import { TwitterFollowBans } from "./TwitterFollowBan.jsx"

export function App () {

    const marco = { isFollowing:false, userName: "marcoleon10" } 
    return (
        <section className="App">
            <TwitterFollowBans 
                //Esta es la forma mas correcta de pasar props
                userName="Zwueyn" 
                initialIsFollowing={true}>
                Sebastian Valenzuela Ojeda
            </TwitterFollowBans>

            <TwitterFollowBans 
                userName="secretarybird97">
                Miguel Angel Cuevas
            </TwitterFollowBans>

            <TwitterFollowBans 
                /*Mala practica pero se puede hacer si son muchos props del componente*/{...marco}> 
                Marco Antonio Leon
            </TwitterFollowBans>
            
        </section>
    )
}