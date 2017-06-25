const SPIN_LEFT = 0;
const SPIN_RIGHT = 1;

//Yaw to
const YAW_N = 0;
const YAW_NE = -60 / 180 * Math.PI;
const YAW_NW = 30 / 180 * Math.PI;

class World {
	constructor({canvas, width, height, xUnit, initialColor} = {
		width: window.innerWidth,
		height: window.innerHeight,
		xUnit: window.innerWidth / 12,
		initialColor: '#00C0A0'
	}){
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.width = width;
		this.height = height;
		this.xUnit = xUnit;
		this.yUnit = xUnit / Math.sqrt(3);
		this.xCount = window.innerWidth / this.xUnit;
		this.yCount = window.innerHeight / this.yUnit;
		this.fragments = [];

		for(let x = 0; x < this.xCount; x++){
			for(let y = 0; y < this.yCount; y++){
				this.fragments.push(new Fragment(this, {
					x, y, color: initialColor
				}));
			}
		}
	}
}

class Fragment{
	constructor(world, {x, y, color}){
		this.world = world;
		this.x = x;
		this.y = y;
		this.spin =
			(((x % 2 === 0) && (y % 2 === 0)) ||
			((x % 2 === 1) && (y % 2 === 1))) ?
			SPIN_LEFT :
			SPIN_RIGHT;

		this.color = color;

		this.units = (this.spin === SPIN_LEFT) ? [
			{xUnit: this.x + 1, yUnit: this.y},
			{xUnit: this.x, yUnit: this.y + 1},
			{xUnit: this.x + 1, yUnit: this.y + 2}
		] : [
			{xUnit: this.x, yUnit: this.y + 2},
			{xUnit: this.x + 1, yUnit: this.y + 1},
			{xUnit: this.x, yUnit: this.y}
		];

		this.alternating = undefined;
		this.altPitch = 0;
		this.altYaw = undefined;
		this.altSpin = SPIN_LEFT;
		this.altCallback = undefined;
	}

	getNearFragments() {
		return [
			{
				x: this.x,
				y: this.y + 1,
				yaw: (!this.spin) ? YAW_NE : YAW_NW
			},
			{
				x: this.x,
				y: this.y - 1,
				yaw: (this.spin) ? YAW_NE : YAW_NW
			},
			{
				x: this.x + Math.sign(+!this.spin - 0.5),
				y: this.y,
				yaw: YAW_N
			}
		];
	}

	render(ctx) {
		//Original Fragment Rendering
		ctx.beginPath();
		ctx.moveTo(this.units[2].x, this.units[2].y);
		this.units.forEach(({xUnit, yUnit}) => ctx.lineTo(
			xUnit * this.world.xUnit, yUnit * this.world.yUnit
		));
		ctx.fillStyle = this.color;
		ctx.fill();

		if(this.alternating) {
			//Shadow Rendering

			//Alternating Fragment Rendering
			const altScala = -Math.sign(this.spin - 0.5)
				* Math.cos(this.altPitch / 180 * Math.PI);

			const deltaX = Math.cos(this.altSpin) * -altScala;
			const deltaY = Math.sin(this.altSpin) * -altScala;

			//SPIN_LEFT: altScala < 0 when 0~90, altScala > 0 when 90~180
			//SPIN_RIGHT: altScala > 0 when 0~90, altScala < 0 when 90~180
			let triangle;

			switch(this.altSpin) {
				case YAW_N:
					//SPIN_LEFT: TO RIGHT
					//SPIN_RIGHT: TO LEFT
					triangle = [this.units[0], this.units[2]];
					triangle.push({
						xUnit: this.x + (+!this.spin) * 1 + altScala,
						yUnit: this.y + 1
					});
					break;

				case YAW_NE:
					//SPIN_LEFT: TO UP
					//SPIN_RIGHT: TO DOWN
					triangle = [this.units[0], this.units[1]];
					if(this.spin === SPIN_LEFT) {
						triangle.push({
							xUnit: this.x + 0.5 + Math.cos(YAW_NE) * -altScala,
							yUnit: this.y - 0.5 + Math.sin(YAW_NE) * -altScala
						});
					} else {
						triangle.push({
							xUnit: this.x + 0.5 + Math.cos(YAW_NE) * -altScala,
							yUnit: this.y + 0.5 + Math.sin(YAW_NE) * -altScala
						});
					}
					break;

				case YAW_NW:
					//SPIN_LEFT: TO DOWN
					//SPIN_RIGHT: TO UP
					break;
			}

			ctx.beginPath();
		}
	}

	alternateTo(yaw, color, spin, cb = () => {}) {
		this.alternating = color;
		this.altSpin = Math.sign(spin - 0.5);
		this.altPitch = 0;
		this.altYaw = yaw;
		this.altCallback = cb;
	}

	update() {
		if(this.alternating) {
			this.altPitch += 3;
		}

		if(this.altPitch >= 180) {
			this.color = this.alternating;
			this.alternating = undefined;
			if(this.altCallback) {
				this.altCallback();
			}
		}
	}
}

export {Fragment, World};
