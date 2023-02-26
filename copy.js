export  default function copy (ev){
    const button = ev.currentTarget
//se o botão clicado tiver sido clicado muda a palavra para "copied"
if (button.innerText === 'Copy') {
    button.innerText ='Copied!'
    //adiciona as cores dos parametros css para o botão
    button.classList.add('sucess')
    //ação para copiar o texto da area de transferencia
    navigator.clipboard.writeText(document.querySelector('#result').value)
}else{
    button.innerText = 'Copy'
    button.classList.remove('sucess')
    
}
}

