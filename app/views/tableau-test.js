import Ember from 'ember';

export default Ember.View.extend({
	templateName: 'tableau-test',
	pion: null,
	old: null,
	click: function(e) {
		var clicked = e.target,
			td_parent = $(e.target).parent('td'),
			cases_accessibles = this.get('controller.cases_accessibles'),
			plateau = this.get('controller.model.plateau');

		if($(clicked).hasClass('pion') && cases_accessibles.indexOf('#'+td_parent.attr('id')) == -1) {
			this.set('pion', $(clicked));
			this.set('old', td_parent);
		}

		if(td_parent.hasClass('selected')) {
			plateau = deplacePion(clicked, this.pion, this.old, plateau, this.get('controller.couleur_pion'));
			this.set('controller.model.plateau', plateau);

			this.get('controller').send('reset');
			this.set('pion', null);
			this.set('old', null);
		}
	}
});

function deplacePion(clicked, pion, old, plateau, couleur_pion) {
	var x_old = old.data('x'),
		y_old = old.data('y'),
		x_new = $(clicked).parent('td').data('x'),
		y_new = $(clicked).parent('td').data('y');


	old.html('<a href="#"></a>');
	$(clicked).parent('td').empty().html(pion);

	plateau[y_old][x_old] = 0;
	plateau[y_new][x_new] = couleur_pion;

	return plateau;
}