export function vendedorIA(msg){

msg = msg.toLowerCase()

if(msg.includes("preço") || msg.includes("valor")){

return `
Nossos projetos variam dependendo da necessidade.

Mas me conta primeiro:

- você precisa de um site?
- um chatbot automático?
- ou automação para sua empresa?

Assim consigo te indicar a melhor solução.
`
}

if(msg.includes("site")){

return `
Criamos sites profissionais que:

✔ atraem clientes
✔ passam confiança
✔ vendem automaticamente

Muitos negócios perdem clientes por não ter um site profissional.

Seu site seria para:

empresa
loja
ou portfólio?
`
}

if(msg.includes("chatbot")){

return `
Um chatbot pode atender clientes 24h por dia.

Ele pode:

✔ responder dúvidas
✔ vender produtos
✔ captar leads
✔ marcar serviços

Isso economiza tempo e aumenta vendas.

Você quer usar no site ou no WhatsApp?
`
}

if(msg.includes("empresa")){

return `
Perfeito.

Empresas que usam tecnologia vendem muito mais.

A Samuel Tech IA cria:

✔ sites profissionais
✔ automação com IA
✔ chatbots inteligentes
✔ sistemas personalizados

Quer que eu te mostre um exemplo?
`
}

return `
Interessante.

Me conta melhor o que você precisa para sua empresa.

Talvez eu consiga te ajudar com um site ou automação inteligente.
`
}
