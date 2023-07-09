export default class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }

    sequencia() {
        let seq = String()
        for(let i = 0; i < this.cpfLimpo.length; i++) {
            seq = this.cpfLimpo[i].repeat(this.cpfLimpo.length)
            if(seq === this.cpfLimpo) return true;
        }
        return false;
    }

    static geraDigito(cpfSemDigit) {
        let total = 0;
        let rev = cpfSemDigit.length + 1;

        for(let num of cpfSemDigit) {
            total += rev * Number(num);
            rev--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    geraNovoCpf() {
        if(isNaN(this.cpfLimpo)) return false;
        if(typeof this.cpfLimpo != 'string') return false;
        if(this.cpfLimpo.length != 11) return false;
        if(this.sequencia()) return false;
 
        const cpfSemDigit = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigit);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigit + digito1);

        this.novoCpf = cpfSemDigit + digito1 + digito2;
    }

    valida() {
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}
