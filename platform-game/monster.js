class Monster {
  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
  }

  get type() {
    return "monster";
  }

  static create(pos, ch) {
      return new Monster(pos.plus(new Vec(0, -1)), new Vec(3, 0) );
  }
}

Monster.prototype.size = new Vec(1.2, 2);

Monster.prototype.collide = function(state) {
  return new State(state.level, state.actors, "lost");
};

Monster.prototype.kill = function(state) {
  let filtered = state.actors.filter(a => a != this);
  let status = state.status;
  // if (!filtered.some(a => a.type == "coin")) status = "won";
  return new State(state.level, filtered, status);
};


Monster.prototype.update = function(time, state) {
  let newPos = this.pos.plus(this.speed.times(time));
  if (!state.level.touches(newPos, this.size, "wall")) {
    return new Monster(newPos, this.speed);
  } else {
    return new Monster(this.pos, this.speed.times(-1));
  }
};