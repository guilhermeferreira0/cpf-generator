import ValidaCPF from './modules/ValidaCPF';
import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

// Validador de CPF 
const btnValidar = document.querySelector('.btn-validar');
const input = document.querySelector('#icpf');

btnValidar.addEventListener('click', () => {
    const cpf = new ValidaCPF(input.value);
    status(cpf.valida());
})

function status(boolean) {
    const status = document.querySelector('.status');
    status.innerHTML = '';

    if(boolean) {
        status.classList.remove('invalida');
        status.innerHTML = 'CPF Válido!!!';  
        status.classList.add('valida');
    }
    else {
        status.classList.remove('valida');
        status.innerHTML = 'CPF Inválido!!!';
        status.classList.add('invalida');
    }
}

// Gerador de CPF
const btnGerar = document.querySelector('.btn-gerar');

btnGerar.addEventListener('click', () => {
    const novoCpf = new GeraCPF();
    const cpfTexto = document.querySelector('.cpf-texto');

    cpfTexto.innerHTML = String(novoCpf.geraNovoCpf());
})

