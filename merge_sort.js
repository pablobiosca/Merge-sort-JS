// merge sort - algoritmo de ordenacion mediante la separacion simetrica en forma de arbol

const x = [10,99,8,1,33,4,7,999,876,12,95]



const merge_sort_1 = (matriz) =>{

    //caso base "exit"
    if (matriz.length < 2){
        return matriz
    }

    let mitad = Math.floor( matriz.length / 2 )

    // console.log(mitad)

    //conseguimos dividir a traves de la mitad de cada "sub-array"
    //esto se hará de manera recursiva

    let left_array = matriz.slice(0,mitad)
    let right_array = matriz.slice(mitad,matriz.length)

    //implementacion de recursividad hasta que se llegue a cumplir el caso base
    //este genera una ruptura con todos los elementos del array principal en solitario
    //de manera ascendente se iran "mergeando" o fusionando meidante cada return
    //mediante la funcion "merge"
    left_array = merge_sort_1(left_array)

    right_array = merge_sort_1(right_array)

    return (merge(left_array,right_array))

}

//Divide y venceras

const merge = (array_left,array_right) =>{

    //en este array se va a volcar el resultado de fusionar ordenadamente dos mitades
    let array_temporal = []

    //"break" si alguno de las listas se queda vacia
    while (array_left.length && array_right.length) {

        if ( array_left[0] <= array_right[0] ){
            
            //el array temporal se va llenando con los menores comparados
            array_temporal.push(array_left[0])
            
            //quitamos el valor menor de la lista
            array_left.shift()


        }else{
            array_temporal.push(array_right[0])

            array_right.shift()
        }
    }

    console.log(array_temporal,array_left,array_right)

    //el uso que le doy aqui al spread operator es que se que siempre
    //se va a quedar alguna de las dos mitades vacias,por lo tanto
    //el return devolverá el array temporal + una de las dos mitades
    //para el siguiente "mergeo"
    return [...array_temporal,...array_left,...array_right]

}

    
console.log(merge_sort_1(x))


