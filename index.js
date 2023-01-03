// criando elementos com as  as informações do html

const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

//bloqueio para o usuário digitar apenas as teclas que serão permitidas 
//array com somente os elementos que serão permitidos digitar 
const allowedKeys = ["(", ")", "/" ,"*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
//função para dar funcionalidade para os botões clícaveis

//forEach executará a função para cada um dos botões
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        //dataset acessa os value com o atributo data 
        const value = charKeyBtn.dataset.value
        input.value += value

    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    //focus mantem o cursor disponivel depois dos valores digitados serem excluidos
    input.focus()
})

//adiciona um evento quando uma tecla é pressionada 
input.addEventListener('keydown' , function (ev){
    //previnir o comportamento padrão
    ev.preventDefault()
    //condicional para incluir os caracteres digitados como válidos
    //"includes" determina se um conjunto de caracteres pode ser encontrado dentro de outra string retornando true ou false
    if(allowedKeys.includes(ev.key)) {
        //se a tecla digitada estiver no array sera juntada com o valor da tecla
        input.value += ev.key
        return
    }

    //condicional para habilitar o "Backspace"
    if (ev.key === 'Backspace') {
        //pegará da posição "0" que é o primeiro até a posição "-1" que é o penultimo
        input.value = input.value.slice(0, -1)
    }

    //condicional para habilitar o "Enter"
    if (ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    //comando para mostrar mensagem de erro quando o usuario digitar comandos invalidos
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    //eval analisa o código javascript e retorna o resultado independente do que for
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error') 
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev){
const button = ev.currentTarget
//se o botão clicado tiver sido clicado muda a palavra para "copied"
if (button.innerText === 'Copy') {
    button.innerText ='Copied!'
    //adiciona as cores dos parametros css para o botão
    button.classList.add('sucess')
    //ação para copiar o texto da area de transferencia
    navigator.clipboard.writeText(resultInput.value)
}else{
    button.innerText = 'Copy'
    button.classList.remove('sucess')
}
})

document.getElementById('themeSwitcher').addEventListener('click', function() { 
    //referencia o tema do atributo data
    if(main.dataset.theme === 'dark') {
    //setProperty adiciona um valor e o nome especificado ao objeto de estado atual
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
    } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
    }
})