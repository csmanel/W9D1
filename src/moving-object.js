class MovingObject {
  constructor(params) {
    for (let key in params) {
      this.key = params.key
    }
    // this.pos = params.pos;
    // this.vel = params.vel;
    // this.radius = params.vel
    // this.color = params.color
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true)
    ctx.fillStyle = this.color; 
    ctx.fill()
  }
}

export default MovingObject;