// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre: 'erick',
    segundoNombre: 'santiago',
    apellido: 'De Antonio',
    segundoApellido: 'marulanda',
    unaFuncion: function(){return('Mi primer nombre es ' + this.nombre)} 
};


module.exports = objetoAnidado;
