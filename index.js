// criando elementos com as  as informações do html
const root = document.querySelector(':root')
const main = document.querySelector('main')
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



document.getElementById('copyToClipboard').addEventListener('click', copy)


document.getElementById('themeSwitcher').addEventListener ('click', theme)
  


import calculate from "./calculate.js"
import theme from "./theme.js"
import copy from "./copy.js"



