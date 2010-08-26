/*
---

name: Locale.en-US.Number

description: Number messages for US English.

license: MIT-style license

authors:
  - Arian Stolwijk

requires:
  - /Locale

provides: [Locale.en-US.Number]

...
*/

Locale.define('en-US', 'Number', {
	
	decimal: '.',
	group: ',',
/*	
	decimals: 0,
	precision: 0,
	scientific: null,
	
	prefix: null,
	suffic: null,
*/	
	// Negative/Currency/percentage will mixin Number
	negative: {
		prefix: '-'
	},
	
	currency: {
		decimals: 2,
		prefix: '$ ',
		'scientific': false	
	},
	
	percentage: {
		decimals: 2,
		suffix: '%'		
	}

});


