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

  // move() {
  //   this.pos += this.vel;
  //   console.log('i have been moved!!!!!!!!!');
  // }
}

export default MovingObject;
