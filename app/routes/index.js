import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return [
			Ember.Object.create({
				id: 1,
				nom: 'pion',
				image: '&#9817;'
			}),
			Ember.Object.create({
		  		id: 2,
		  		nom: 'tour',
		  		image: '&#9814;'
		  	}),
		  	Ember.Object.create({
		  		id: 3,
		  		nom: 'cavalier',
		  		image: '&#9816;'
		  	}),
		  	Ember.Object.create({
		  		id: 4,
		  		nom: 'fou',
		  		image: '&#9815;'
		  	}),
		  	Ember.Object.create({
		  		id: 5,
		  		nom: 'roi',
		  		image: '&#9812;'
		  	}),
		  	Ember.Object.create({
		  		id: 6,
		  		nom: 'reine',
		  		image: '&#9813;'
		  	}),
		  	Ember.Object.create({
				id: 7,
				nom: 'pion',
				image: '&#9823;',
			}),
			Ember.Object.create({
		  		id: 8,
		  		nom: 'tour',
		  		image: '&#9820;'
		  	}),
		  	Ember.Object.create({
		  		id: 9,
		  		nom: 'cavalier',
		  		image: '&#9822;'
		  	}),
		  	Ember.Object.create({
		  		id: 10,
		  		nom: 'fou',
		  		image: '&#9821;'
		  	}),
		  	Ember.Object.create({
		  		id: 11,
		  		nom: 'roi',
		  		image: '&#9818;'
		  	}),
		  	Ember.Object.create({
		  		id: 12,
		  		nom: 'reine',
		  		image: '&#9819;'
		  	})
		];
	}
});

