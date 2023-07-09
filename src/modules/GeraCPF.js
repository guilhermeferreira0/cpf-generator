import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf) {
        return (        
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' + 
            cpf.slice(9, 11)
        );
    }

    geraNovoCpf() {
        const cpfSemDigit = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigit);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigit + digito1);

        return this.formatado(cpfSemDigit + digito1 + digito2);
    }
}