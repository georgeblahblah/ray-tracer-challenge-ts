import { makePoint, makeVector, Position } from "./position";

type Projectile = {
	position: Position;
	velocity: Position;
};

type Environment = {
	gravity: Position;
	wind: Position;
};

const tick = (environment: Environment, projectile: Projectile): Projectile => {
	const position = projectile.position.add(projectile.velocity);
	const velocity = projectile.velocity
		.add(environment.gravity)
		.add(environment.wind);
	return {
		position,
		velocity,
	};
};

function play() {
	const p: Projectile = {
		position: makePoint(0, 1, 0),
		velocity: makeVector(1, 1, 0).normalize().multiplyBy(5),
	};

	const e: Environment = {
		gravity: makeVector(0, -0.1, 0),
		wind: makeVector(-0.01, 0, 0),
	};

	let projectile = p;
	let count = 0;
	while (projectile.position.y >= 0) {
		console.log(
			`Position: (${projectile.position.x} ${projectile.position.y} ${projectile.position.z})`,
		);
		projectile = tick(e, projectile);
		count++;
	}
	console.log(`It took ${count} steps`);
}

play();

export { play };
