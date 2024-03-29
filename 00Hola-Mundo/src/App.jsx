import "./App.css"
import { useState } from "react"
import { TwitterFollowBans } from "./TwitterFollowBan.jsx"

const users = [
    {
        userName:"Zwueyn",
        name:"Sebastian Valenzuela Ojeda",
        isFollowing:true,
    },
    {
        userName:"secretarybird97",
        name:"Miguel Angel Cuevas",
        isFollowing:false,
    },
    {
        userName:"marcoleon10",
        name:"Marco Antonio Leon",
        isFollowing:false,
    }

]

export function App () {

    //const marco = { isFollowing:false, userName: "marcoleon10" } 
    return (
        <section className="App">
            {
                users.map(({userName, name, isFollowing }) => (
                    <TwitterFollowBans
                        key={userName} 
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowBans>
                ))
            }
        </section>

        /*Se puede renderizar directamente, pero en la mayoria de aplicaciones se recibe algun arreglo para renderizarse
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
                /*Mala practica pero se puede hacer si son muchos props del componente*//*{...marco}> 
                Marco Antonio Leon
            </TwitterFollowBans>

        </section>
    */
    )
}