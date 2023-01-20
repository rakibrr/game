import kaboom from "kaboom"

// initialize context
kaboom({
 width:1366,
 height:640,
  font: "sinko",
  background: [238,232,170],
});

// load assets2
loadSprite("wall", "assets/wall.png");
loadSprite("coin", "assets/pill.png");
loadSprite("player", "assets/player.png");
loadSprite("enemy", "assets/fire.png");
loadSprite("robot", "assets/robot.png");

let currentLevel = 0
let Health = 3

const LEVELS = [
	
		[
  "                                                  ",
  "          XXXXXXXXX          XXXXXXXXXXXX         ",
  "          X       X          X          X   XXXXX ",
  "          X       X          X      P   X   X   X ",
  "          X     F X          X          X   X   X ",
  "          X       X          X          X   X  PX ",
  "          X       X          X   V  XXXXX   X   X ",
  "          XXX  XXXX  XXXXXXXXX      X       X   X ",
  "            X  X     X              X  XXXXXX   X ",
  "            X  X     X              X  X        X ",
  "        XXXXX  XXXXXXX   XXXXXX     X  X        X ",
  "        X                X    X     X  X        X ",
  "        X                X    X     XXXX        X ",
  "        X    F   XXXXX   X    X    H            X ",
  "        X        X   X   XXXX X          F      X ",
  "        X        X   X      X X             XXXXX ",
  "        X     P  X   X      X XXXXXXXX      X     ",
  "        X        X   X   P  X        X      X     ",
  "        XXXXXXXXXX   XXXXXXXX        XXXXXXXX     ",
  "                                                  "

	  ],
	  [
		"                              ",
		"    XXXXXXXXXXXXX             ",
		"    X    XXXX   X   XXXXXXX   ",
		"    X    XXXX   X   X     X   ",
		"    X    XXXX P X   X   P X   ",
		"    X  P       X   X     X   ",
		"    X           X   XXXX  X   ",
		"    X           X   XXXX  X   ",
		"    X           XX  XXX   X   ",
		"    X          XXXXXX    X   ",
		"    X                     X   ",
		"    X            H    F  X   ",
		"    XXXX       P          X   ",
		"       X           V      X   ",
		"       X     F            X   ",
		"    XXXX            H     X   ",
		"    X     V    X      F   X   ",
		"    X         XXX         X   ",
		"    X    P   XXXXX      P X   ",
		"    XXXXXXXXXXXXXXXXXXXXXXX   "
	  ],

	
];

scene("mapGame", (levelNumber)=>{
	let playing = true;
	let maxTime = 40;

	let robotVSpeed = 20;
	let robotHSpeed = 20;

switch (levelNumber) {
	case 0:
		maxTime = 40;
		robotVSpeed = 20;
		robotHSpeed = 20;
		break;
	
		case 1:
		maxTime = 30;
		robotVSpeed = 25;
		robotHSpeed = 25;
		break;

	default:
	    maxTime = 40;
		robotVSpeed = 20;
		robotHSpeed = 20;
		break;
}

// addLevel([
//   "                              ",
//   "    XXXXXXXXXXXXX             ",
//   "    X    XXXX   X   XXXXXXX   ",
//   "    X    XXXX   X   X     X   ",
//   "    X    XXXX P X   X   P X   ",
//   "    X  P   V    X   X     X   ",
//   "    X           X   XXXX  X   ",
//   "    X           X   XXXX  X   ",
//   "    X           XX  XXX   X   ",
//   "    X F   F     XXXXXX    X   ",
//   "    X                     X   ",
//   "    X      P      H    F  X   ",
//   "    XXXX       P          X   ",
//   "       X  V               X   ",
//   "       X     F     F      X   ",
//   "    XXXX            H     X   ",
//   "    X     F    X      F   X   ",
//   "    X         XXX         X   ",
//   "    X    P   XXXXX      P X   ",
//   "    XXXXXXXXXXXXXXXXXXXXXXX   "
// ],

                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
   
                                        
                                        
                                        
                                        
                                        
                                        
                                        

  const levelConfig = {
	width:32,
	height:32,
	X: () =>[sprite("wall"), area(), solid()], 
	F: () =>[sprite("enemy"), area(), "enemy", "zero"],
	P: () =>[sprite("coin"), area(), "coin"],
	V: () =>[sprite("robot"), area(), "robotV", "enemy2", "zero"],
	H: () =>[sprite("robot"), area(), "robotH", "enemy2", "zero" ],
  };

// );

addLevel(
	LEVELS[levelNumber ?? 0],
	levelConfig
)

const allCoins = get("coin").length;

const score = add([
	text("Score: 0", {size: 28}),
	pos(50,70),
	fixed(),
	{value: 0},
]);

const health = add([
	text("Health: 3", {size: 28}),
	pos(1020,70),
	fixed(),
	{value: Health},
	
]);

const myTimer = add([
	text(`Time: ${maxTime}`, {size: 28}),
	pos(300,70),
	fixed(),
	{value: maxTime},
]);

const gameOverText = add([
	text("Game Over", {size: 28}),
	pos(250,300),
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
	pos(350, 120),
	area(), //give collision area around sprite
	solid(), //cannot go through walls
	"player", //tag to use later in the code
  ]);

  player.onCollide("enemy2", (enemy2) => {
	health.value -= 1;
	health.text = `Health: ${health.value}`;
	
  });

  player.onCollide("zero", (zero) => {
	if(health.value == 0) gameOver();
  })

  function gameOverWin(){
	playing = false;
	youWinText.opacity = 1;
	currentLevel ++;
	if (currentLevel == LEVELS.length){
		currentLevel = 0;
	}
	
  }

  function gameOver(){
	playing = false;
	gameOverText.opacity = 1;
	

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
	 if (playing) player.move(200, 0);
   });

   onKeyDown("left", () => {
	 if (playing) player.move(-200, 0);
   });

   onKeyDown("up", () => {
	 if (playing) player.move(0, -200);
   });
   onKeyDown("down", () => {
	if (playing) player.move(0, 200);
  });

camScale(1.2, 1.2);

player.onUpdate(() => {
	camPos(player.pos);
});

player.onCollide("coin",(theCoin)=>{
	destroy(theCoin);
	score.value += 1;
	health.value += 1;
	health.text = `Health: ${health.value}`;
	score.text = `Score: ${score.value}`;
	if(score.value == allCoins) gameOverWin();

})

player.onCollide("enemy",(aenemy)=>{

	if (aenemy.opacity == 1){
		health.value -= 1;
	health.text = `Health: ${health.value}`;
	}


})

onUpdate("robotV", (robotV) => {
	if (playing) robotV.move(0, -robotVSpeed);
});

onUpdate("robotH", (robotH) => {
	if (playing) robotH.move(robotHSpeed, 0);
});

loop(4, () => {
	robotVSpeed *=-1;
});

loop(6, () => {
	robotHSpeed *=-1;
})

onClick(() => {
	if(!playing) go ("mapGame", currentLevel);
})

})
go("mapGame", currentLevel)