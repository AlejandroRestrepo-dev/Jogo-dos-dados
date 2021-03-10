//inicio cadastro

		  function cadastrarjogadores() {
		    	var jog1 = document.getElementById("nome_id1").value;
				var jog2 = document.getElementById("nome_id2").value;
				  document.getElementById("jogador1").innerHTML = "Jogador 1: " + jog1;
				  document.getElementById("jogador2").innerHTML = "Jogador 2: " + jog2;	  
}

		    document.getElementById("btn_cadastrar").addEventListener("click", function(){
				var jog1 = document.getElementById("nome_id1").value;
				var jog2 = document.getElementById("nome_id2").value;
							

					if (jog1 == "" || jog2 == ""){
					alert("Por favor preencha os dados!!");
					location.href = jogodados.html;
				}	

					var x = document.getElementById("parte1");
				if (x.style.display === "none") {
					x.style.display = "block";
				} else {
					x.style.display = "none"
				}

			var x = document.getElementById("parte2");
				if (x.style.display === "none") {
					x.style.display = "block";
				} else {
					x.style.display = "none"
				}
			}

			);

//fim cadastro

// Inicio jogo
			function getRandomInt(min,max){
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
				
			var pontos1 = 10;
			var pontos2 = 10;
			document.getElementById("ptsjog1").innerHTML="Sua pontuação: " + pontos1;
			document.getElementById("ptsjog2").innerHTML="Sua pontuação: " + pontos2;
			
			function comparacao(){
				var delay = 50;
				var valor_dado1=getRandomInt(1,6);
				var valor_dado2=getRandomInt(1,6);

				if(valor_dado1==1) document.getElementById("Img1").src="newdado1.png";
					else if (valor_dado1==2) document.getElementById("Img1").src="newdado2.png";
						else if (valor_dado1==3) document.getElementById("Img1").src="newdado3.png";
							else if (valor_dado1==4) document.getElementById("Img1").src="newdado4.png";
								else if (valor_dado1==5) document.getElementById("Img1").src="newdado5.png";
									else document.getElementById("Img1").src="newdado6.png";
								
				
				if(valor_dado2==1) document.getElementById("Img2").src="newdado1.png";
					else if (valor_dado2==2) document.getElementById("Img2").src="newdado2.png";
						else if (valor_dado2==3) document.getElementById("Img2").src="newdado3.png";
							else if (valor_dado2==4) document.getElementById("Img2").src="newdado4.png";
								else if (valor_dado2==5) document.getElementById("Img2").src="newdado5.png";
									else document.getElementById("Img2").src="newdado6.png";
			
				if (valor_dado1 == valor_dado2){
					pontos1 = pontos1;
					pontos2 = pontos2;
					document.getElementById("resultado").innerHTML = "Esta rodada empatou!"
				}	
				else if (valor_dado1 < valor_dado2) {
						pontos1 = pontos1 - 1;
						document.getElementById("resultado").innerHTML = "O jogador 2 venceu esta rodada!"
				}
				else if (valor_dado1 > valor_dado2){
						pontos2 = pontos2 - 1;
						document.getElementById("resultado").innerHTML = "O jogador 1 venceu esta rodada!"
				}

				document.getElementById("ptsjog1").innerHTML="Sua pontuação: " + pontos1;
				document.getElementById("ptsjog2").innerHTML="Sua pontuação: " + pontos2;
				

				if (pontos1 == 0) {
					document.getElementById("resultado").innerHTML = "O jogador 2 venceu o jogo!"
					setTimeout(function(){
        				alert('Fim do jogo!');
							location.reload();
							},delay);

				}	
				else if (pontos2 == 0) {
					document.getElementById("resultado").innerHTML = "O jogador 1 venceu o jogo!"
					setTimeout(function(){
        				alert('Fim do jogo!');
							location.reload();
							},delay);
				}
				}
				function reset(){
					location.reload()	
			};

//fim jogo


