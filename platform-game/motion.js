
function overlap(actor1, actor2) {
  return [ actor1.pos.x + actor1.size.x > actor2.pos.x &&
         actor1.pos.x < actor2.pos.x + actor2.size.x,
        actor1.pos.y + actor1.size.y > actor2.pos.y &&
         actor1.pos.y < actor2.pos.y + actor2.size.y, 
         Math.min(Math.abs(actor1.pos.x + actor1.size.x - actor2.pos.x), Math.abs(- actor1.pos.x + actor2.pos.x + actor2.size.x)), 
         Math.min(Math.abs(actor1.pos.y + actor1.size.y - actor2.pos.y), Math.abs(- actor1.pos.y + actor2.pos.y + actor2.size.y)) ]
}

Coin.prototype.collide = function(state) {
  let filtered = state.actors.filter(a => a != this);
  let status = state.status;
  if (!filtered.some(a => a.type == "coin")) status = "won";
  return new State(state.level, filtered, status);
};

const wobbleSpeed = 8, wobbleDist = 0.07;

Coin.prototype.update = function(time) {
  let wobble = this.wobble + time * wobbleSpeed;
  let wobblePos = Math.sin(wobble) * wobbleDist;
  return new Coin(this.basePos.plus(new Vec(0, wobblePos)),
                  this.basePos, wobble);
};

const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

Player.prototype.update = function(time, state, keys) {
  let xSpeed = 0;
  if (keys.ArrowLeft) xSpeed -= playerXSpeed;
  if (keys.ArrowRight) xSpeed += playerXSpeed;
  let pos = this.pos;
  let movedX = pos.plus(new Vec(xSpeed * time, 0));
  if (!state.level.touches(movedX, this.size, "wall")) {
    pos = movedX;
  }

  let ySpeed = this.speed.y + time * gravity;
  let movedY = pos.plus(new Vec(0, ySpeed * time));
  if (!state.level.touches(movedY, this.size, "wall")) {
    pos = movedY;
  } else if (keys.ArrowUp && ySpeed > 0) {
    ySpeed = -jumpSpeed;
  } else {
    ySpeed = 0;
  }
  return new Player(pos, new Vec(xSpeed, ySpeed));
};

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

const arrowKeys =
  trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) return;
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  console.log(level)
  let state = State.start(level);
  let ending = 1;
  let pausedFlag = 0;
  function pause(){
    if(event.key=='Escape'){
      pausedFlag = !pausedFlag;
      if (pausedFlag){document.querySelector('#paused').innerHTML = "Game paused"}
        else {document.querySelector('#paused').innerHTML = ""}
    }

  }
  window.addEventListener("keydown", pause);

  return new Promise(resolve => {
    runAnimation(time => {
     if(!pausedFlag){
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
     } 
    });
  });
}

async function runGame(plans, Display) {
  var lives=3;
  for (let level = 0; level < plans.length;) {
    document.querySelector('#live-left').textContent = `Lives left: ${lives--}${lives==-1? ", You lost!":""}`
    let status = await runLevel(new Level(plans[level]),
                                Display);

    if (status == "won") {level++; lives=3;}
  }
  console.log("You've won!");
}