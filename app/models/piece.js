import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	x: DS.attr('number'),
	y: DS.attr('number'),
	image_blanc: DS.attr('string'),
	image_noir: DS.attr('string')
});