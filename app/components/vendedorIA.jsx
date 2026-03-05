"use client"

import { useState } from "react"
import { vendedorIA } from "../../lib/vendedorBrain"

export default function Vendedor(){

const [msg,setMsg] = useState("")
const [chat,setChat] = useState([])

function enviar(){

const resposta = vendedorIA(msg)

setChat([
...chat,
{user:msg},
{bot:resposta}
])

setMsg("")
}

return(

<div>

<h2>Vendedor Samuel Tech IA</h2>

<div>

{chat.map((c,i)=>(
<div key={i}>

{c.user && <p><b>Cliente:</b> {c.user}</p>}
{c.bot && <p><b>IA:</b> {c.bot}</p>}

</div>
))}

</div>

<input
value={msg}
onChange={(e)=>setMsg(e.target.value)}
placeholder="Digite sua mensagem"
/>

<button onClick={enviar}>
Enviar
</button>

</div>

)
}
