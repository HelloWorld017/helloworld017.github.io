import Color from "color";

const FPS = 30;
const msPerFrame = 1000 / FPS;

class Ripple {
	constructor({x, y, accelerate, finishY, color, radius}) {
		this.x = x;
		this.y = y;
		this.accelerate = accelerate;
		this.speed = 0;
		this.finishY = finishY;
		this._color = Color(color);
		this.radius = radius;
		this.size = Math.random() * (radius - 1) + 1;
	}

	update(){
		this.speed += this.accelerate;
		this.y += this.speed;

		if(this.y >= this.finishY) return false;
		return true;
	}

	get color(){
		return this._color.alpha(
			Math.max(0, Math.min(1, Math.abs((this.y - this.finishY) / 200)))
		).string();
	}
}

class RippleCreator {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.boundRender = this.render.bind(this);
		this.stopped = false;
		this.ripples = [];
		this.previous = -10;

		this.render(0);
	}

	render(now){
		if(!this.stopped) requestAnimationFrame(this.boundRender);

		if(now - this.previous < msPerFrame) return;
		this.previous = now - now % msPerFrame;

		((ctx, canvas) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			this.ripples = this.ripples.filter((v) => {
				if(!v.update()) return false;

				ctx.strokeStyle = v.color;
				ctx.lineWidth = v.size;

				ctx.beginPath();
				ctx.arc(v.x, canvas.height - v.y, v.radius, 0, 2 * Math.PI);
				ctx.stroke();

				return true;
			});

			this.ripples.push(new Ripple({
				x: Math.random() * canvas.width,
				y: 0,
				accelerate: 3 + Math.random(),
				finishY: canvas.height * (Math.random() / 2 + 0.5),
				color: '#fff',
				radius: (Math.random() / 2 + 0.5) * 5
			}));
		})(this.ctx, this.canvas);
	}
}

export default RippleCreator;
