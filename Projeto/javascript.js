document.getElementById("formulario").onsubmit=function(event){
var obrigatorio1 = document.getElementById("login");
var obrigatorio2 = document.getElementById("nome");
var obrigatorio3 = document.getElementById("email");
var obrigatorio4 = document.getElementById("nascimento");
var obrigatorio5 = document.getElementById("cpf");
var obrigatorio6 = document.getElementById("senha");
var obrigatorio7 = document.getElementById("confsenha");
var vSenha = document.getElementById("senha");
var vConfsenha = document.getElementById("confsenha");

    if (obrigatorio2.value == ""){
        alert("Campo obrigatório não preenchido.");
		return false;
	}
	if (obrigatorio3.value == ""){
		alert("Campo obrigatório não preenchido.");
		return false;
	}
	if (obrigatorio4.value == ""){
		alert("Campo obrigatório não preenchido.");
		return false;
	}
	if (obrigatorio5.value == ""){
		alert("Campo obrigatório não preenchido.");
		return false;
	}
	if (obrigatorio6.value == ""){
		alert("Campo obrigatório não preenchido.");
		return false;
	}
	if (obrigatorio7.value == ""){
		alert("Campo obrigatório não preenchido.");
		return false;
	}
	if (senha.value != confsenha.value) {
		alert("As senhas não correspondem!");
		return false;
		} 

	var validacao = document.getElementById("senha");
	var regex = /(?=.*[0-9])(?=.*[a-z])/;
    if (obrigatorio1.value == ""){
        alert("Campo obrigatório não preenchido.");
		return false;
	}
	
	if(!regex.exec(validacao.value)){
		alert("A senha deve conter no mínimo 1 número e 1 letra!");
		return regex.test(str);
		
	}
	
	var dt = new Date(nascimento.value);
	var dia = dt.getDate()+1;
	var mes = dt.getMonth()+1;
	var ano = dt.getFullYear();
	var dt_atual = new Date();
	var dia_atual = dt_atual.getDate();
	var mes_atual = dt_atual.getMonth()+1;
	var ano_atual = dt_atual.getFullYear();
	
	if(ano < (ano_atual-17)){
		return true;
	}else if(ano == (ano_atual-17)){
		if(mes < mes_atual){
			return true;
		}else if(mes == mes_atual){
			if(dia < dia_atual){
				return true;
			}else if(dia == dia_atual){
				return true;
			}else{
				alert("Idade menor que 17 anos");
				return false;
			}
		}else{
			alert("Idade menor que 17 anos");
			return false;
		}
	}else{
		alert("Idade menor que 17 anos");
		return false;
	}
	

};
