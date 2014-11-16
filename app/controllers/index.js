import Ember from 'ember';

export default Ember.Controller.extend({
	isSelected: false,
	cases_accessibles: [],
	actions: {
		prepare: function(x, y, id) {
			if(this.isSelected == false) {
				this.set('isSelected', true);
				var pions = this.get('model.pions'),
					plateau = this.get('model.plateau'),
					i,
					deplacements = [];

				for(i = 0; i < pions.length; i++) {
					if(pions[i].id === id) {
						deplacements = additionMatrice(x, y, pions[i], plateau);
						this.couleur_pion = pions[i].id < 7 ? 'B' : 'N';
						break;
					}
				}

				resetSelected();
				var t = '<table>';
				for(var j = 0; j < deplacements.length; j++) {
					t += '<tr>';
					for(var k = 0; k < deplacements.length; k++) {
						t += '<td>'+deplacements[j][k]+'</td>';
						if(deplacements[j][k] == 0) {
							this.cases_accessibles.push('#case_'+k+'_'+j);

							$('#case_'+k+'_'+j).addClass('selected');
						}
					}
					t += '</tr>';
				}
				t += '</table>';

				$('.deuxieme').html(t);
			} else {
				this.set('isSelected', false);
			}
		},
		reset: function() {
			this.set('isSelected', false);
			resetSelected();
		}
	}
});

function resetSelected() {
	$('td').removeClass('selected');
}

function additionMatrice(x, y, pion, plateau) {
	var deplacementPossible = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0]
	],
	i, j;

	if(pion.id < 7){
		var couleur = "B";
	}else{
		var couleur = "N";
	}

	for(i = 0; i < 8; i++) {
		for(j = 0; j < 8; j++) {

			var valeur = 0;

			if((plateau[j][i] == "N" && couleur == "N") || (plateau[j][i] == "B" && couleur == "B")){
				valeur = 3; //Mes pions
				pion.matrice[7 - x + i][7 - y + j];
			}
			if((plateau[j][i] == "B" && couleur == "N") || (plateau[j][i] == "N" && couleur == "B")){
				if(pion.matrice[7 - x + i][7 - y + j] == 0 || pion.matrice[7 - x + i][7 - y + j] == 2){
					valeur = 1; //pion adverse mais déplacement possible
				}else{
					valeur = 2; //déplacement impossible
				}
			}
			if(plateau[j][i] == 0){
				if(pion.matrice[7 - x + i][7 - y + j] == 0){
					valeur = 0; //case vide et déplacement possible
				}else{
					valeur = 2; //déplacement impossible
				}
			}
			deplacementPossible[j][i] =  valeur;
		}
	}


	var fouTourOuReine = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
	if(fouTourOuReine[pion.id] == 1){
		for(i = 0; i < 8; i++) {
			for(j = 0; j < 8; j++) {
				//si case possible pour le moment
				if(deplacementPossible[j][i] == 0 || deplacementPossible[j][i] == 1){
					deplacementPossible[j][i] = 0;
					if(j-y == 0){
						//cas vertical
						if(i-x > 1 || x-i > 1){
							if(i<x){
								var depart = i + 1;
								var fin = x - 1;
							}else{
								var depart = x + 1;
								var fin = i - 1;
							}
							for(var z = depart; z < fin; z++){
								if(deplacementPossible[j][z] != 0){
									deplacementPossible[j][i] = 1;
								}
							}
						}

					}else if(i-x == 0){
						//cas horizontal
						if(j-y > 1 || y-j > 1){
							if(j<y){
								var depart = j + 1;
								var fin = y - 1;
							}else{
								var depart = y + 1;
								var fin = j - 1;
							}

							for(var z = depart; z <= fin; z++){
								if(deplacementPossible[z][i] != 0){
									deplacementPossible[j][i] = 1;
								}
							}

						}

					}
					/*else{
						//cas diagonal
						if((i-x > 1 || x-i > 1) && (j-y > 1 || y-j > 1)){
							if(i<x){
								var depart = i + 1;
								var fin = x - 1;
							}else{
								var depart = x + 1;
								var fin = i - 1;
							}
							if(j<y){
								var depart2 = j + 1;
								var fin2 = y - 1;
							}else{
								var depart2 = y + 1;
								var fin2 = j - 1;
							}
							for(var z = depart; z <= fin; z++){
								for(var z2 = depart2; z2 <= fin2; z2++){
									if(deplacementPossible[z][z2] != 0){
										deplacementPossible[j][i] = 1;
									}
								}
							}
						}
					}*/
				}
			}
		}
	}

	return deplacementPossible;
}
