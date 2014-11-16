import Ember from 'ember';

export default Ember.Controller.extend({
	isSelected: false,
	actions: {
		prepare: function(x, y, id) {
			// this.set('isSelected', true);
			var pions = this.get('model.pions'),
				plateau = this.get('model.plateau'),
				i,
				deplacements = [],
				table = htmlTableToArray();

			for(i = 0; i < pions.length; i++) {
				if(pions[i].id === id) {
					deplacements = additionMatrice(x, y, pions[i], plateau);
					break;
				}
			}

			var t = '<table>';
			for(var j = 0; j < deplacements.length; j++) {
				t += '<tr>';
				for(var k = 0; k < deplacements.length; k++) {
					t += '<td>'+deplacements[j][k]+'</td>';
					// if(deplacements[k][j] == 0 || deplacements[k][j] == 3) {
					// 	console.log('background', k, j);
					// } else {
					// 	console.log('var');
					// }
				}
				t += '</tr>';
			}
			t += '</table>';

			$('.deuxieme').html(t);
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
			deplacementPossible[j][i] = pion.matrice[7 - x + i][7 - y + j] + plateau[j][i];
		}
	}
	return deplacementPossible;
}

function htmlTableToArray() {
	var myTableArray = [];
	$("table tr").each(function() {
	    var arrayOfThisRow = [];
	    var tableData = $(this).find('td');
	    if (tableData.length > 0) {
	        tableData.each(function() {
	        	arrayOfThisRow.push($(this).text());
	        });
	        myTableArray.push(arrayOfThisRow);
	    }
	});
	return myTableArray;
}
