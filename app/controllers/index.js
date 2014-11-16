import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		prepare: function(x, y, id) {
			var pions = this.get('model.pions'),
				plateau = this.get('model.plateau'),
				i;

			for(i = 0; i < pions.length; i++) {
				if(pions[i].id === id) {
					console.log(additionMatrice(x, y, pions[i], plateau));
				}
			}
		}
	}
});

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

	for(i = 0; i < 8; i++) {
		for(j = 0; j < 8; j++) {
			deplacementPossible[i][j] = pion.matrice[7 - x + i][7 - y + j] + plateau[i][j];
		}
	}
	return deplacementPossible;
}
