if(true) {let a = 10
const b =20
var c = 30}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "prince"

    function two(){
        const website = "Youtube"
        // console.log(username)
    }
    // console.log(website);         this do not define under one it is only in two 
    
    two()
}

one()

//+++++++++++++++++++++++++++++ interesting  +++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}



// addtwo(5)
const addtwo = function(num){
    return num+2
}

