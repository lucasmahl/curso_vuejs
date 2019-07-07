new Vue({
	el: "#app", 
	data:{ 		
		playerLife: 100,
		monsterLife: 100,
		running: false,
		qtdeEspecial: 3,
		qtdeCura: 3,
		logs: [],
	},
	methods:{
		startGame(){
			this.running = true
			this.playerLife = 100
			this.monsterLife = 100
			this.log = []
		},
		attack(especial){
			console.log(especial, this.getRandom(5, 10))
			this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
			if (this.monsterLife > 0) {
				this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
			}

		},
		hurt(atr, min, max, especial, source, target, cls){
			const plus = especial? 5: 0
			const hurt = this.getRandom(min + plus, max+plus)
			this[atr] = Math.max(this[atr] - hurt, 0)
			this.registerLog(`${source} atingiu ${target} com ${hurt}.`,cls)
			console.log({source} , ' ' , {target} , ' ' ,{hurt}, {cls})
		},
		getRandom(min, max){
			const value = Math.random() * (max - min) + min /*de 5 a 10*/
			return Math.round(value)
		},
		healAndHurt(){
			this.heal(10, 15)
			this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
		},
		heal(min,max){
			const heal = this.getRandom(min, max)
			this.playerLife = Math.min(this.playerLife + heal, 100)
			this.registerLog(`Jogador ganhou força de ${heal}.`, `player`)
		},
		registerLog(text, cls){
			this.logs.unshift({text,cls}) /*unshift vai pra primeira posição do array*/
		},
	},
	computed:{
		hasResult(){
			return this.playerLife == 0 || this.monsterLife == 0
		},
	},
	watch:{
		hasResult(value){
			if (value) this.running = false
		},
	}
})
