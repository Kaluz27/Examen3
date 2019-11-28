/*Para una clase Priority de la clase NODO(int dato, int Prioridad{0,1}, Nodo Siguiente), se creara el metodo agregar(Nodo NUEVO) que 
metera el nodo al final den caso de ser prioridad 0 y en caso de ser 1, lo pondrá al fianl del ultimo nodo con la misma prioridad, en caso de no haber prioridad 1 ¿,
quedate al inicio de todos. */


agregar(nuevoNodo) {

    if (this._inicio == null) {
        this._inicio = nuevoNodo
    } else {
        if (nuevoNodo.prioridad > this._inicio.prioridad) {
            nuevoNodo.siguiente = this._inicio
            nuevoNodo = this._inicio
        } else {
            _agregarN(nuevo, this._inicio);
        }
    }
}
_agregarN(nuevo, existente) {

    if (nuevo.prioridad > existente.prioridad) {
        nuevo.siguiente = existente;
        let primero = this._inicio;
        while (primero.siguiente != existente) {
            primero = primero.siguiente;
        }
        primero.siguiente = nuevo;
    } else {
        if (existente.siguiente == null) {
            existente.siguiente = nuevo;
        } else {
            _agregarN(nuevo, existente.siguiente)
        }
        
    }
}