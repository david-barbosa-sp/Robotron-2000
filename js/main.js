

const controle = document.querySelectorAll('[data-controle]');
controle.forEach((elemento)=>{
    elemento.addEventListener('click', (e)=>{manipulaDados(e.target.dataset.controle, e.target.parentNode)})
   
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