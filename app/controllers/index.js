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
	var deplacementPossible = [],
		i, j;

	for(i = 0; i < 15; i++) {
		deplacementPossible[i] = new Array(15);
		for(j = 0; j < 15; j++) {
			deplacementPossible[i][j] = pion.matrice[i][j] + plateau[i+x][j+y];
		}
	}
	return deplacementPossible;
}