document.getElementById("formulario").onsubmit=function(event){
  var alunos = document.getElementsByName("avalia");
  var aprovados = 0;
  var reprovados = 0;

  for(var i = 0; i < alunos.length; i++){
    if(alunos[i].type == 'radio' && alunos[i].value == 'aprovados' && alunos[i].checked){
      aprovados++;
    }
    else if(alunos[i].type == 'radio' && alunos[i].value == 'reprovados' && alunos[i].checked){
      reprovados++;
    }
  }
  
  if(aprovados <= 60 && aprovados >= 20){
  alert("O número de alunos aprovados é de: " + aprovados + "\nO número de alunos reprovados é de: " + reprovados);
      return true;
    }else if(aprovados >= 60 || aprovados <= 20){
      alert("Número de aprovados inválido: \nMínimo de aprovados: 20 \nMáximo de aprovados: 60");
      return false;
    }
};