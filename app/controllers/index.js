import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		additionMatrice: function(x, y, pion){
			var deplacementPossible = [];
			for(var i = 0; i < 15; i++) {
  				for(var j = 0; j < 15; j++) {
  					if((x + i) > 7 && (y + j) > 7 && (x + i) < 16 && (y + j) < 16){
  						deplacementPossible[x + i - 7][y + j - 7] = pion.matrice[i][j] + plateau[i+x][j+y]
  					}
  					
  				}
  			}
  			return deplacementPossible;
		}
	}
});