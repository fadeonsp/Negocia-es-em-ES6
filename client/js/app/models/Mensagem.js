class Mensagem {

    constructor(texto='') {

        this._texto =texto;
    }
    get texto() {

        return this._texto;
    }
    setTexto(texto) {

        this._texto = texto;
    }
}
