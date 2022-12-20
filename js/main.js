const equipamentos = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll('[data-estatistica]')

const controle = document.querySelectorAll('[data-controle]');
controle.forEach((elemento)=>{
    elemento.addEventListener('click', (e)=>{manipulaDados(e.target.dataset.controle, e.target.parentNode)
    atualizaEstatisitica(e.target.dataset.peca, e.target.dataset.controle)
    })
   
}

)

function manipulaDados(operacao, controle){    
    
    const peca = controle.querySelector('[data-contador]')
    
    if(operacao === '-'){    
     peca.value = parseInt(peca.value) - 1;
    }
    else{
     peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisitica(peca, operacao){
    if(operacao === '+')
    {
        estatisticas.forEach
        (        
            (e)=>{ e.textContent = parseInt(e.textContent) + parseInt(equipamentos[peca][e.dataset.estatistica])}   
        )
    }
    else
    {
        estatisticas.forEach
        (        
            (e)=>{ e.textContent = parseInt(e.textContent) - parseInt(equipamentos[peca][e.dataset.estatistica])}   
        )
    }

    

}