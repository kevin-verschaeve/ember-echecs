import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(pions) {
  	var grille = '',
  		i, j,
  		cell_class = 'odd',
  		matrice_pions = [
        [pions[7], pions[8], pions[9], pions[11], pions[10], pions[9], pions[8], pions[7]],
        [pions[6], pions[6], pions[6], pions[6], pions[6], pions[6], pions[6], pions[6]],
        [pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12]],
        [pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12]],
        [pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12]],
        [pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12], pions[12]],
        [pions[0], pions[0], pions[0], pions[0], pions[0], pions[0], pions[0], pions[0]],
        [pions[1], pions[2], pions[3], pions[5], pions[4], pions[3], pions[2], pions[1]]
      ]
  	;
  	grille += '<table id="echecs">';
  	for(i = 0; i < 8; i++) {
  		grille += '<tr>';
  		for(j = 0; j < 8; j++) {
  			grille += '<td id="case_'+j+'_'+i+'" class="'+cell_class+'" data-x="'+j+'" data-y="'+i+'">';
  			grille += '<a href="#" class="pion" data-id_pion="'+matrice_pions[i][j].id+'">'+matrice_pions[i][j].image+'</a>';
  			grille += '</td>';
  			cell_class = changeClass(cell_class);
  		}
  		cell_class = changeClass(cell_class);
  		grille += '</tr>';
  	}
  	grille += '</table>';
  	return grille.htmlSafe();
});

function changeClass(cell_class) {
	return cell_class == 'odd' ? 'even' : 'odd';
}