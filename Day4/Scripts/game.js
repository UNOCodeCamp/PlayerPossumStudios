game = new Object();

game.score = 0;
game.timer = 0;
game.startTime = null;
game.isOver = false;
game.level = 0;
game.start = function()
{
    var level = maps[game.level];
    scene.setScene(level);
    game.startTime = Date.now();
    input.start();
    game.main();
    
};

// The main game loop
game.main = function() 
{ 
    if (game.isOver == false)
    {
        game.update();
        renderer.draw();
        window.requestAnimationFrame(game.main);
    }

};

// Update game objects
game.update = function() 
{
    player.move(input.x, input.y);
    
    if(exit.isTouching(player)) {
        
        var sprite = exit.doorcontrol[exit.doorstate];
        exit.image = sprite.getImage(); 
        if(exit.image.src == "Assets/Door/Open/Door Open3.png") {
             level++;
             
        }
       
    }

    for ( i in scene.hazards)
    {
        var hazard = scene.hazards[i];
        if ( hazard.isTouching(player) )
        {
            game.isOver = true;
        }
    }
};

