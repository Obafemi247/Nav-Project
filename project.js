 new Vue({

	el: '#test',

	data: {
		active: 'home'
	},

	methods: {
		beActive: function(item){
		
			this.active = item;
		}
	}
});