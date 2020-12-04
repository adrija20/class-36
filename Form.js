class Form{
    constructor(){}
    display(){
        var title= createElement("h2");
title.html("Car Racing");
title.position(200,30);

var input= createInput("name");
input.position(250,250);

var button= createButton("Join");
button.position(250,270);



button.mousePressed(function(){
    input.hide();
    button.hide();
    var name= input.value();
    playerCount+=1;
    player.update(name);
    player.updatecount(playerCount);
    var greeting= createElement("h3");
    greeting.html("Welcome" + name);
    greeting.position(130,160);
});
    }
}