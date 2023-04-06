let data = new Date()
let ano = data.getFullYear()
let formAno = document.querySelector('input#txtano')
let img = document.createElement('img')
let res = document.querySelector('div.res')
function verificar(){
    res.innerHTML = `Detectamos: ${sexo()} de ${idade()} anos.`
    imagem()
}

function idade(){
    let res = document.querySelector('div.res')
    if (formAno.value.length == 0 || formAno.value.length < 4|| Number(formAno.value) > ano){
        alert('[ERRO]Verifique os dados e tente novamente')
    }else{
        let idade = ano - Number(formAno.value)
        return idade
    }
}

function sexo(){
    let res = document.querySelector('div.res')
    let fsex = document.getElementsByName('radsex')
    let genero = ''
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        genero = 'Homem'
    }else{
        genero = 'Mulher'
    }
    return genero
}


//ideia (precisa resolver a questao da idade)
function imagem(){
    let idadepessoa = idade()
    if (sexo() == 'Homem'){
        if(idadepessoa >= 0 && idadepessoa < 12){
            fotografia.setAttribute('src', 'assets/img/homem-bebe.png')
        }
        else if(idadepessoa < 21) {
            fotografia.setAttribute('src', 'assets/img/homem-jovem.png')
        }else if(idadepessoa >= 21 && idadepessoa < 60){
            fotografia.setAttribute('src', 'assets/img/homem-adulto.png')
        }else{
            fotografia.setAttribute('src', 'assets/img/homem-idoso.png')
        }
    }else{
        if(idadepessoa >= 0 && idadepessoa < 12){
            fotografia.setAttribute('src', 'assets/img/mulher-bebe.png')
        }
        else if(idadepessoa < 21) {
            fotografia.setAttribute('src', 'assets/img/mulher-jovem.png')
        }else if(idadepessoa >= 21 && idadepessoa < 60){
            fotografia.setAttribute('src', 'assets/img/mulher-jovem.png')
        }else{
            fotografia.setAttribute('src', 'assets/img/mulher-idosa.png')
        }
    }
}

