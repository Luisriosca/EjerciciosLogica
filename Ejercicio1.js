const testObject = { a: 1, b: 2 }


function toArray(object) {
    //Implementación
    const targetArray = []
    for (item in object){
      targetArray.push([item, object[item]])
    }
    return targetArray;
}

module.exports = toArray;