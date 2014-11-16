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
						if(deplacements[j][k] <= 1) {
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
	return deplacementPossible;
}
