import Ember from 'ember';

export default Ember.Controller.extend({
	isSelected: false,
	actions: {
		prepare: function(x, y, id) {
			this.isSelected = true;
			var pions = this.get('model.pions'),
				plateau = this.get('model.plateau'),
				i,
				deplacements = [];

			for(i = 0; i < pions.length; i++) {
				if(pions[i].id === id) {
					deplacements = additionMatrice(x, y, pions[i], plateau);
				}
			}
		}
	}
});

function additionMatrice(x, y, pion, plateau) {
	console.log(pion.matrice);

	
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

	for(i = 0; i < 8; i++) {
		for(j = 0; j < 8; j++) {
			deplacementPossible[i][j] = pion.matrice[7 - x + i][7 - y + j] + plateau[i][j];
		}
	}
	return deplacementPossible;
}
