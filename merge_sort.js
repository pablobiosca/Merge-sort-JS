// merge sort - algoritmo de ordenacion mediante la separacion simetrica en forma de arbol

const x = [10,99,8,1,33,4,7]

let array_volcado = []

const merge_sort_1 = (matriz) =>{

    //caso base "exit"
    if (matriz.length < 2){
        return matriz
    }

    let mitad = Math.floor( matriz.length / 2 )

    console.log(mitad)

    //conseguimos dividir a traves de la mitad de cada "sub-array"
    //esto se hará de manera recursiva

    let left_array = matriz.slice(0,mitad)
    let right_array = matriz.slice(mitad,matriz.length)

    console.log(left_array,right_array)

    merge_sort_1(left_array)
    merge_sort_1(right_array)

    merge(left_array,right_array)

}

//Divide y venceras

const merge = (array_left,array_right) =>{

    //creamos indices inicializados a 0 para las dos mitades para controlar el desbordamiento
    //ademas de que sera aqui,el caso "break"
    let indice_left = 0
    let indice_right = 0

    //en este array se va a volcar el resultado de fusionar ordenadamente dos mitades
    //estas mitades pueden no ser iguales
    let array_temporal = []

    //"break" si alguno de las listas se queda vacia al
    while ( indice_left < array_left.length && indice_right < array_right.length ) {

        if ( array_left[indice_left] < array_right[indice_right] ){
            
            //el array temporal se va llenando con los menores comparados
            array_temporal.push(array_left[indice_left])
            
            //aumentamos el indice de la lista con el menor por caso
            indice_left++

        }else{
            array_temporal.push(array_right[indice_right])

            indice_right++
        }

    }

}

    
merge_sort_1(x)

console.log("hola")
