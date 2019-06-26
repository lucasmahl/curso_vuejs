new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
    	exibirAlerta(){
    		alert("ALERTA")
    	},
    	inputKeydown(event){
    		this.valor = event.target.value
    	}
    }
})