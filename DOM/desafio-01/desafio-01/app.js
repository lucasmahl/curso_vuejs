new Vue({
	el: "#desafio", 
	data:{ 		
		nome: "Lucas",
		idade: 27,//tem q ter http:// 
		linkImagem: 'https://cdn-images-1.medium.com/max/1600/1*OrjCKmou1jT4It5so5gvOA.jpeg'
	},
	methods:{
		multiplicaIdade(){
			nova_idade = this.idade*3
			return nova_idade
		},
		rand(){
			num = Math.floor(Math.random() * 2)//gera números aleatórios entre 0 e 1
			return num
		}
	}
})
