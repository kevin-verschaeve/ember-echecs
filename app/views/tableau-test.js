import Ember from 'ember';

export default Ember.View.extend({
	templateName: 'tableau-test',
	pion: null,
	old: null,
	click: function(e) {
		var clicked = e.target,
			td_parent = $(e.target).parent('td');

		if($(clicked).hasClass('pion')) {
			this.pion = $(clicked);
			this.old = td_parent;
		}

		if(td_parent.hasClass('selected')) {
			deplacePion(clicked, this.pion, this.old);
		}
	}
});

function deplacePion(clicked, pion, old) {
	old.html('<a href="#"></a>');
	$(clicked).html(pion);
}