// class FormaGeometrica{ 

//     mostra(){
//         forma = '';
//         console.log(forma)
//     } 
// }

class Bola {
    mostra() {
        console.log('bola');
    }
}


class Galinha {

    mostra() {
        console.log('galinha');
    }
}

class FormaFactory {
    static create(formaDesejada) {

        if (formaDesejada == "galinha") {
            return new Galinha();
        } else {
            return new Bola();
        }
    }
}

let formaDesejada = "bola";

let retorno = FormaFactory.create(formaDesejada);
retorno.mostra();

