//objects are variables with variables fields and or functions ........within
// objects require this for function variables


var GameCharacter = {
    name: "stuart",
    pos: 2,
    health: 100,
    move: function(byAmount) {
        this.pos += byAmount;
    
    }
}


// then to call a field

var name1 = GameCharacter.name;
GameCharacter.health = 50
GameCharacter.move(10)

console.log(name1);
console.log(GameCharacter.health);
console.log(GameCharacter.pos);