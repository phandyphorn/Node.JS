function min(a,b) {
    let result = null;
    if(a < b) {
        result = a;
    }else{
        result = b;
    }
    return result;
}

function max(a,b) {
    let result = null;
    if(a > b) {
        result = a;
    }else{
        result = b;
    }
    return result;
}

let PI=3.14
let COVID=19

module.exports={min,COVID,max,PI}

