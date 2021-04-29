 export let arr = []

export function arrayItem(){
    return arr
}

export function getElementById(name){
    return arr.find(item=>item.name ===name)
}