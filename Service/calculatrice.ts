export class Calculatrice {
    public addition(a: number, b: number): number {
        return a + b;
    }

    public soustraction(a: number, b: number): number {
        return a - b;
    }

    public division(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division par zéro impossible');
        }

        return a / b;
    }
}