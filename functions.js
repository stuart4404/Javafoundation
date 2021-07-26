var pos = 0
var pos1 = 0

// this code will not run until called
function move(){
    pos +=1
}

//called here
move()


// parameter byAmount added

function movemore(byAmount){
    pos1 += byAmount
}

movemore(5)

console.log (pos)
console.log (pos1)


// functions can return a value

function moveit(pos2, byAmount){
    const newpos = pos2 + byAmount;
        return newpos;
}

var finalPos = moveit(0,15);

console.log (finalPos);