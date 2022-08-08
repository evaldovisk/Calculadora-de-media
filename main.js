const adicionar = document.querySelector("#btn-adicionar");
const input = document.querySelector('#inpt')
const notas = document.querySelector('.notas')

var num_nota = 1
arrayNotas = []

adicionar.addEventListener('click', function(){
    if (input.value > 10 || input.value < 0 || isNaN(input.value)) {
        alert("Por favor. Insira uma nota valida!")
    } else if (input.value == null) {
        alert("Por favor. Insira um valor!")
    } else {
        var pNota = document.createElement('p')
        pNota.classList.add('nova-nota')
        arrayNotas.push(+(input.value))
        pNota.innerText =  "A nota " + num_nota + " foi " + input.value
        notas.appendChild(pNota)
        num_nota++

        console.log(arrayNotas)
        input.value = null
    }

    const btnMedia = document.querySelector('#calcular-media')
    const resultado = document.querySelector('#resultado')

    btnMedia.addEventListener('click', function() {
        var media = 0
        for(num of arrayNotas){
            media += num
        }

        media = (media / num_nota).toFixed(1)


        resultado.innerText = "A média é: " + media
    })
})

