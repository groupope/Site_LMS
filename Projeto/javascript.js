function valida_cpf(){
	var cpf = document.getElementById("cpf").value;
	var dig1 = 0;
	var dig2 = 0;
	var tmn = cpf.length;
	var i = 0;
	tmn -= 2;
	while(tmn>0 && tmn<=9){
		dig1+=(parseInt(cpf[i])*(tmn+1));
		tmn -= 1;
		i+=1;
	}
	dig1=(dig1*10)%11;
	tmn = cpf.length;
	tmn -= 1;
	i = 0;
	while(tmn>0 && tmn<=10){
		dig2+=(parseInt(cpf[i])*(tmn+1));
		tmn -= 1;
		i+=1;
	}
	dig2=(dig2*10)%11;
	if(dig2==10){
		dig2=0;
		if(dig1 == parseInt(cpf[9]) && dig2 == parseInt(cpf[10])){
			return true; 
		}else{
			return false;
		}
	}
	
	if(dig1 == parseInt(cpf[9]) && dig2 == parseInt(cpf[10])){
		return true; 
	}else{
		return false;
	}
}

function calcula_idade(data){
	var dt = new Date(data);
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
            	return false
            }
        }else{
        	return false;
        }
    }else{
    	return false;
    }
}

function cadastrar_aluno(){
	var obrigatorio1 = document.getElementById("login").value;
	var obrigatorio2 = document.getElementById("nome").value;
	var obrigatorio3 = document.getElementById("email").value;
	var obrigatorio4 = document.getElementById("nascimento").value;
	var obrigatorio5 = document.getElementById("cpf").value;
	var obrigatorio6 = document.getElementById("senha").value;
	var obrigatorio7 = document.getElementById("confsenha").value;
	var vSenha = document.getElementById("senha").value;
	var vConfsenha = document.getElementById("confsenha").value;
	
	var validacao = document.getElementById("senha");
	var regex = /(?=.*[0-9])(?=.*[a-z])/;

	if(obrigatorio1 == "" || obrigatorio2 == "" || obrigatorio3 == "" || obrigatorio4 == "" || obrigatorio5 == "" || obrigatorio6 == "" || obrigatorio7 == "" || vSenha == "" || confsenha == ""){
		alert("Preencha todos os campos!");
	}else if(valida_cpf() == false){
        alert("CPF inválido!");
	}else if(!regex.exec(validacao.value)){
		alert("A senha deve conter no mínimo 1 número e 1 letra!");
		return regex.test(str);
	}else if(vSenha != vConfsenha){
		alert("Senhas não conferem!");
    }else if(calcula_idade(document.getElementById("nascimento").value) == false){
		alert("Idade insuficiente!");
	}else{
		alert("Cadastrado com sucesso!");
		window.location.reload();
	}
}
