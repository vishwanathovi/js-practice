class State {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors; 
    this.status = status;
  }
  static start(level) { 
    return new State(level, level.startActors, "playing");
  }
  get player() {
    return this.actors.find(a => a.type == "player");
  }
}

State.prototype.update = function(time, keys) {
  let actors = this.actors
    .map(actor => actor.update(time, this, keys));
  let newState = new State(this.level, actors, this.status);

  if (newState.status != "playing") return newState;

  let player = newState.player;
  if (this.level.touches(player.pos, player.size, "lava")) {
    return new State(this.level, actors, "lost");
  }
  for (let actor of actors) {
    if (actor != player && actor instanceof Monster && overlap(actor, player)[0] && overlap(actor, player)[1]){
      if (overlap(actor,player)[2]>overlap(actor,player)[3]){
        newState = actor.kill(newState);  
      }      
      else {
        newState = actor.collide(newState)
      }
    } else if (actor != player && overlap(actor, player)[0] && overlap(actor, player)[1]) {
      console.log(overlap(actor, player)[2],overlap(actor, player)[3])
      newState = actor.collide(newState);
    }
  }
  return newState;
};