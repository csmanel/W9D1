class MovingObject {
  constructor(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.stroke();
    // ctx.closePath();
    console.log('ive been drawn');
  }

  move(ctx) {
    const [vel1, vel2] = this.vel;
    this.pos[0] += vel1;
    this.pos[1] += vel2;
    this.draw(ctx);
  }
}

export default MovingObject;
