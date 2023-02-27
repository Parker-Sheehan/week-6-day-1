const tower = (x) =>{
    let arr = []
    for(let i = 1; i <= x; i++){
        let str = ''
        for(let k = x; k > i ; k--){
            str += ' '
        }
        for(let j =0; j < i*2-1 ; j++){

            str += '*'
        }
        arr.push(str)
    }
    return(arr)
}