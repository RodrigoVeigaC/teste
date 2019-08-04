var canvas, ctx, ALTURA, LARGURA, frames = 0,

player = {

	x: 100,
	y: 700,
	altura: 100,
	largura: 100,
	imagem: "blue",


	desenha: function(){
		ctx.fillStyle = this.imagem;
		ctx.fillRect(this.x, this.y, this.largura, this.altura);

	},

}

enemy = {

	x: 100,
	y: 100,
	altura: 100,
	largura: 100,
	imagem: "red",


	desenha: function(){
		ctx.fillStyle = this.imagem;
		ctx.fillRect(this.x, this.y, this.largura, this.altura);

	}

};

var mousePosX, mousePosY = 0;

function clique(event){

	mousePosX = event.clientX;
	mousePosY = event.clientY;

	mouseX = (800 / window.innerWidth) * mousePosX;
	mouseY = (800 / window.innerHeight) * mousePosY;

	player.x = mouseX;
	player.y = mouseY;

	

	player.desenha();

}

function main(){

	ALTURA = window.innerHeight;
	LARGURA = window.innerWidth;

	if (LARGURA >= 800){

		ALTURA = 800;
		LARGURA = 800;
	}

	else if (LARGURA <= 400){
		ALTURA = 400;
		LARGURA = 400;
	}

	canvas = document.createElement("canvas");
	canvas.width = LARGURA;
	canvas.height = ALTURA;
	canvas.style.border = "3px solid #000";

	ctx = canvas.getContext('2d');

	var body = document.querySelector("body");
	document.body.appendChild(canvas);

	document.addEventListener("mousedown", clique);

	roda();

}



function roda(){

	atualiza();
	desenha();
	para();
	enemy_spawn();

	window.requestAnimationFrame(roda);
}

function atualiza(){

	frames++;
}

function desenha(){

	ctx.fillStyle = "#E6D774";
	ctx.fillRect(0, 0, ALTURA, LARGURA);

	player.desenha();
	enemy.desenha();
}

function para(){
	if (player.x <= 0){

		player.x = 0;
		player.desenha();

	}

	else if	(player.x >= 700){

		player.x = 700;
		player.desenha();

	};

	if (player.y <= 0){

		player.y = 0;
		player.desenha();

	}

	else if(player.y >= 700){
		player.y = 700;
		player.desenha();
	};


}

function enemy_spawn(){

	var i = 0;

	while (i < 3){

		enemy.x = Math.random() * (700 - 0) + 0;
		enemy.y = Math.random() * (700 - 0) + 0;

		enemy.desenha();

		atualiza();

		if (enemy.x <= 0){

			enemy.x = 0;
			enemy.desenha();

		}

		else if	(enemy.x >= 700){

		enemy.x = 700;
			enemy.desenha();

		};

		if (enemy.y <= 0){

			enemy.y = 0;
			enemy.desenha();

		}

		else if(enemy.y >= 700){
			enemy.y = 700;
			enemy.desenha();
		};

		i++;

	}
	

}

main();

