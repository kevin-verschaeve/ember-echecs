import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(model) {
  	var grille = '',
  		i, j,
  		cell_class = 'odd',
  		pions = [
  			['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],
  			['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
  			['', '', '', '', '', '', '', ''],
  			['', '', '', '', '', '', '', ''],
  			['', '', '', '', '', '', '', ''],
  			['', '', '', '', '', '', '', ''],
  			['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'],
  			['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
  		]
  	;

  	grille += '<table>';
  	for(i = 0; i < 8; i++) {
  		grille += '<tr>';
  		for(j = 0; j < 8; j++) {
  			// console.log(pions[i][j]);
  			grille += '<td class="'+cell_class+'">';
  			grille += '<a href="#" class="js-pion">'+pions[i][j]+'</a>';
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