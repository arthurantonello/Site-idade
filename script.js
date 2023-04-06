function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.querySelector('input#txtano')
    let res = document.querySelector('div.res')
    res.innerHTML = `Detectamos: ${sexo()} de ${idade(ano, formAno)} anos.`
    imagem()
}

function idade(ano, formAno){
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
    let img = document.createElement('img')
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
    let idadepessoa = idade(this.ano, this.formAno)
    if (sexo() == 'Homem'){
        if(idadepessoa >= 0 && idadepessoa < 12){
            img.setAttribute('src', 'assets/img/homem-bebe.png')
        }
        else if(idadepessoa < 21) {
            img.setAttribute('src', 'assets/img/homem-jovem.png')
        }else if(idadepessoa >= 21 && idadepessoa < 60){
            img.setAttribute('src', 'assets/img/homem-adulto.png')
        }else{
            img.setAttribute('src', 'assets/img/homem-idoso.png')
        }
    }else{
        if(idadepessoa >= 0 && idadepessoa < 12){
            img.setAttribute('src', 'assets/img/mulher-bebe.png')
        }
        else if(idadepessoa < 21) {
            img.setAttribute('src', 'assets/img/mulher-jovem.png')
        }else if(idadepessoa >= 21 && idadepessoa < 60){
            img.setAttribute('src', 'assets/img/mulher-jovem.png')
        }else{
            img.setAttribute('src', 'assets/img/mulher-idosa.png')
        }
    }
    res.appendChild(img)
}
