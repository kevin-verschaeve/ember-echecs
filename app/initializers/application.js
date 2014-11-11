
export default {
  name: 'echec-initializer',
  after: 'store',
  initialize: function(container, application) {
  	var store = container.lookup('store:main');
  	store.push('piece', {
  		id: 1,
  		nom: 'pion',
  		x: 0,
  		y: 2,
  		image_blanc: '&#9817;',
  		image_noir: '&#9823;',

  	});
  	store.push('piece', {
  		id: 2,
  		nom: 'tour',
  		x: 8,
  		y: 8,
  		image_blanc: '&#9814;',
  		image_noir: '&#9820;'
  	});
  	store.push('piece', {
  		id: 3,
  		nom: 'cavalier',
  		x: 3,
  		y: 1,
  		image_blanc: '&#9816;',
  		image_noir: '&#9822;'
  	});
  	store.push('piece', {
  		id: 4,
  		nom: 'fou',
  		x: 8,
  		y: 8,
  		image_blanc: '&#9815;',
  		image_noir: '&#9821;'
  	});
  	store.push('piece', {
  		id: 5,
  		nom: 'roi',
  		x: 1,
  		y: 1,
  		image_blanc: '&#9812;',
  		image_noir: '&#9818;'
  	});
  	store.push('piece', {
  		id: 6,
  		nom: 'reine',
  		x: 8,
  		y: 8,
  		image_blanc: '&#9813;',
  		image_noir: '&#9819;'
  	});
  }
};
