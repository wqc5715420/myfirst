var tplIntegral=require('../tpl/integral.string');
SPA.defineView('integral',{
	html:tplIntegral,
	plugins:['delegated'],
	init:{
		mySwiper:null
	},
	bindActions:{
		"swipe":function(e){
			var index=$(e.el).index();
			this.mySwiper.slideTo(index)
		},
	},
	bindEvents:{
	    'beforeShow': function () {
	      var self = this;
	      this.mySwiper = new Swiper('#integral-swiper', {
	        loop: false,
	        onSlideChangeStart: function () {
	          var $curLi = $('header li').eq(self.mySwiper.activeIndex);
	          $curLi.addClass('active').siblings().removeClass('active');
	        }
	      });
	    }	
	}
});
