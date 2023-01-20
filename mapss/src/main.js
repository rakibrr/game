import kaboom from "kaboom"

// initialize context
kaboom({
 width:1366,
 height:640,
  font: "sinko",
  background: [238,232,170],
});

// load assets2
loadSprite("wall", "assets/ground_05.png");
loadSprite("coin", "assets/pill.png");
loadSprite("player", "assets/player.png");
loadSprite("enemy", "assets/fire.png");
loadSprite("movEnemy", "assets/movEnemy.png");
loadSprite("door", "assets/door.png");
loadSound("collect", "assets/collect.wav");
loadSound("alart", "assets/alart.wav");
loadSound("over", "assets/over.wav");
loadSound("win", "assets/win.mp3");
let currentLevel = 0
let Health = 3
let maxTime = 65;

const LEVELS = [
	
		[
  "                                                  ",
  "          XXXXXXXXX          XXXXXXXXXXXX         ",
  "          X       X          X      F   X   XXDXX ",
  "          X       X          X  P       X   X   X ",
  "          X       X          X   H  F P X   X   X ",
  "          X       X          X          X   X  PX ",
  "          X       X          X   V  XXXXX   X  HX ",
  "          XXX  XXXX  XXXXXXXXX      X       X   X ",
  "            X  X     X              X  XXXXXX   X ",
  "            X  X     X            F X  X   V  F X ",
  "        XXXXX  XXXXXXX   XXXXXX     X  X        X ",
  "        X                X    X  H  X  X    P   X ",
  "        X  H             X    X     XXXX    H   X ",
  "        X    F   XXXXX   X    X P  H          F X ",
  "        X  P     X   X  HXXXX X          F      X ",
  "        X  V   H X   X  V   X X F           XXXXX ",
  "        X     P  X   X    P X XXXXXXXX  H   X     ",
  "        X        X   X      X        X   P  X     ",
  "        XXXXXXXXXX   XXXXXXXX        XXXXXXXX     ",
  "                                                  "

	  ],
	  [                                        
	"	XXXXXXXXXXXX       XXDXXX    XXXXXXXXX ",
	"	X   F      X       X    X    X       X ",
	"	X P V      X       X  P X    X       X ",
	"	X          X       X    X    X F  P  X ",
	"	X  H       X       X  F XXXXXX       X ",
	"	X        F X       X         F  VXXXXX ",
	"	X          XXXXXXXXX  V          X   X ",
	"	X   XXXX                  X      X P X ",
	"	X F X  X   F   P   F   P XXXXXXXXX   X ",
	"	X   X  X                  X        F X ",
	"	X P XXXX    XXXXX                    X ",
	"	X   H       X   X  H  FXXXXXXX  V  F X ",
	"	X F         X   X      X     X       X ",
	"	X     F     X   X  P   X     X    H  X ",
	"	X       H   XXXXX      X     X P     X ",
	"	X    P                 X     XXXXXXXXX ",
	"	X      F     H P  H    X               ",
	"	XXXXXXXXXXXXXXXXXXXXXXXX               "
											  
	  ],
	  [
		"                     XXXXXXXXXXX                  ",
		"    XXXXXXXXXXXXXX   X         X    XXXXXXXXXX    ",
		"    X            X   X   F P F X    X     P   X   ",
		"    X            X   X  H      X    X  F     F X  ",
		"    X            X   X   XXXXXXX    D   XXXXX   X ",
		"    X     XXXX   X  X    X          X   X   X   X ",
		"    X     X  X   X X   V  X     XXXXX   X   X   X ",
		"    X  V  XXXX   XX        X    X       X   X   X ",
		"    X                V  P   X   X       XXXXX   X ",
		"    X   P   F            F   X X   H           X ",
		"    X                         X X         F   P X ",
		"     X     XXXXX      XXXX     XX      XXXXXXXXXX ",
		"      X    X P X      X  X             X        X ",
		"       X   X   X      XXXX             X  P  V  X ",
		"        X    F X         H    V        X        X ",
		"        X      X       F    F          X F XXX  X ",
		" XXXXXXXX      X          P            X   XXX  X ",
		" X             X   XXXXXXXXXXXXXXX  V  X        X ",
		" X  F       F  X   X             X     XXXXXX   X ",
		" X     XXXX    X   X             X F         F  X ",
		" X     X  X  P X F X             X  P  V  F     X ",
		" X  H  XXXX    X   X             X           P  X ",
		" X  P      H   X P X             X       H      X ",
		" XXXXXXXXXXXXXXXXXXX             XXXXXXXXXXXXXXXX ",
		"                                                  "
	  ]
	
];

scene("mapGame", (levelNumber)=>{
	let playing = true;
	
	let door = false;
	let ghostVSpeed = 20;
	let ghostHSpeed = 20;

	var lastDirection = "";

switch (levelNumber) {
	case 0:
		maxTime = 50;
		ghostVSpeed = 20;
		ghostHSpeed = 20;
		break;
	
		case 1:
		maxTime = 55;
		ghostVSpeed = 25;
		ghostHSpeed = 25;
		break;

		case 2:
			maxTime = 65;
			ghostVSpeed = 35;
			ghostHSpeed = 35;
			break;

	default:
	    maxTime = 50;
		ghostVSpeed = 20;
		ghostHSpeed = 20;
		break;
}

        

  const levelConfig = {
	width:32,
	height:32,
	X: () =>[sprite("wall"), area(), solid()], 
	F: () =>[sprite("enemy"), area(), "enemy", "zero"],
	P: () =>[sprite("coin"), area(), "coin"],
	D: () =>[sprite("door"), area(), "door"],
	V: () =>[sprite("movEnemy"), area(), "ghostV", "enemy2", "zero"],
	H: () =>[sprite("movEnemy"), area(), "ghostH", "enemy2", "zero" ],
  };

// );

addLevel(
	LEVELS[levelNumber ?? 0],
	levelConfig
)

const allCoins = get("coin").length;

const score = add([
	text("Score: 0", {size: 28}),
	pos(700,70),
	fixed(),
	{value: 0},
]);

const health = add([
	text("Health: 3", {size: 28}),
	pos(1120,70),
	fixed(),
	{value: Health},
	
]);

const myTimer = add([
	text(`Time: ${maxTime}`, {size: 28}),
	pos(900,70),
	fixed(),
	{value: maxTime},
]);

const gameOverText = add([
	text("Game Over", {size: 28}),
	pos(240,300),
	fixed(),
	opacity (0)
]);

const youWinText = add([
	text("You Win!", {size: 28}),
	pos(250,350),
	fixed(),
	opacity (0)
]);

  let player = add([
	// list of components
	sprite("player"),
	pos(355, 120),
	area(), //give collision area around sprite
	solid(), //cannot go through walls
	"player", //tag to use later in the code
  ]);

  player.onCollide("enemy2", (enemy2) => {
	health.value -= 1;
	health.text = `Health: ${health.value}`;
	pushBack();
	play("alart")
	
  });

  player.onCollide("zero", (zero) => {
	if(health.value == 0) gameOver();

	
  })



  function gameOverWin(){
	playing = true;
	door = true;
	youWinText.opacity = 1;
	play("win");
	currentLevel++
	if (currentLevel == LEVELS.length){
		currentLevel = 0
	};
	player.onCollide("door", (door) => {
		
		if (door)  {
			levelNumber + 1 < LEVELS.length;
			go ("mapGame", currentLevel);
		};
	});
	
  }



  function gameOver(){
	playing = false;
	gameOverText.opacity = 1;
	play("over")
  }

  function pushBack() {
	switch (lastDirection) {
		case "right":
			player.pos.x -=25;
			break;
		case "left":
			player.pos.x +=25;
			break;	

		case "up":
			player.pos.y +=20;
			break;
		
		case "down":
		player.pos.y -=20;
		break;
		default:
		break;
	}
  }

  loop(3, () => {
	if(playing){
		every("enemy", (aEnemy) => {
		
			if (aEnemy.opacity == 1) {
			aEnemy.opacity = 0;
			} else {
			aEnemy.opacity = 1;
			}
	
		});
 }
    
})

loop(1,()=>{
if(playing){
	if(myTimer.value>0){
		myTimer.value -=1;
		myTimer.text=`Time: ${myTimer.value}`;
	}else{
		gameOver()
	}
}
})

   onKeyDown("right", () => {
	 if (playing == true) {
		lastDirection = "right"
		player.move(200, 0);
	 }
   });

   onKeyDown("left", () => {
	if (playing == true) {
	   lastDirection = "left"
	   player.move(-200, 0);
	}
  });

  onKeyDown("up", () => {
	if (playing == true) {
	   lastDirection = "up"
	   player.move(0, -200);
	}
  });
  onKeyDown("down", () => {
	if (playing == true) {
	   lastDirection = "down"
	   player.move(0, 200);
	}
  });
  

   
   

camScale(1.2, 1.2);

player.onUpdate(() => {
	camPos(player.pos);
});

player.onCollide("coin",(theCoin)=>{
	destroy(theCoin);
	score.value += 1;
	health.value += 1;
	myTimer.value +=2;
	myTimer.text = `Time: ${myTimer.value}`
	play("collect")
	health.text = `Health: ${health.value}`;
	score.text = `Score: ${score.value}`;
	if(score.value == allCoins) gameOverWin();

})

player.onCollide("enemy",(aenemy)=>{

	if (aenemy.opacity == 1){
		health.value -= 1;
		play("alart");
		pushBack();
	health.text = `Health: ${health.value}`;
	}


})

onUpdate("ghostV", (ghostV) => {
	if (playing) ghostV.move(0, -ghostVSpeed);
});

onUpdate("ghostH", (ghostH) => {
	if (playing) ghostH.move(ghostHSpeed, 0);
});

loop(3, () => {
	ghostVSpeed *=-1;
});

loop(3, () => {
	ghostHSpeed *=-1;
})


onClick(() => {
	if(!playing) go ("mapGame", currentLevel);
})

})
go("mapGame", currentLevel)