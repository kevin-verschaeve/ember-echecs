import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		additionMatrice: function(x, y, pion){
			var deplacementPossible = [];
			for(i = 0; i < 15; i++) {
  				for(j = 0; j < 15; j++) {
  					deplacementPossible[i][j] = pion.matrice[i][j] + plateau[i+x][j+y]
  				}
  			}
  			return deplacementPossible;
		}
	}
});