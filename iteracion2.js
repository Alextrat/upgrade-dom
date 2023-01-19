//2.1
const nuevoDiv= document.createElement('div');
document.body.append(nuevoDiv)

//2.2
let parrafo = document.createElement('p')
let nuevoDiv2 = document.createElement('div')
document.body.append(nuevoDiv2)
nuevoDiv2.appendChild(parrafo)

//2.3
let divParrafos = document.createElement('div');
// console.log(divParrafos)

for(let i=0;i< 6; i++){
    let parrafos = document.createElement('p')
     // console.log(parrafos)
     document.body.append(parrafos)
}
document.body.append(divParrafos)

//2.4 

const pDinamico = document.createElement('p')
// console.log(pDinamico);
 pDinamico.innerText = 'Soy dinámico'
 document.body.append(pDinamico)

//2.5

const miH2 = document.querySelector('.fn-insert-here');
// console.log(miH2)
miH2.innerText = 'Wubba Lubba dub dub';
document.body.append(miH2);

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');

for(let i = 0; i< apps.length; i++){
     let miLi = document.createElement('li');
     miLi.innerText = apps[i];
     lista.appendChild(miLi);
}

document.body.append(lista);

//2.7
const paraEliminar = document.querySelectorAll('.fn-remove-me')
// console.log(paraEliminar.length)
for(let i=0; i< paraEliminar.length; i++){
     // console.log(paraEliminar[i])
     paraEliminar[i].remove();
}//2.8

const entreDivs = document.querySelectorAll("div.fn-insert-here")
const parrafoEnMedio = document.createElement ('p')
parrafoEnMedio.innerText = "Voy en medio"
// console.log(entreDivs.length)
document.body.insertBefore(parrafoEnMedio, entreDivs[1], )

2.9// revisar.
const parrafo2 = document.createElement ('p')
parrafo2.innerText= 'voy dentro'

for (let i = 0; i< entreDivs.length; i++) {
    entreDivs[i].appendChild(parrafo2)
    document.body.appendChild(entreDivs[i])
}
