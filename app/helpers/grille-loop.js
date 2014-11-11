import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(input) {
  	var grille = '',
  		i, j,
  		cell_class = 'odd'
  	;


  	grille += '<table>';
  	for(i = 1; i <= 8; i++) {
  		grille += '<tr>';
  		for(j = 1; j <= 8; j++) {
  			grille += '<td class="'+cell_class+'"></td>';
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