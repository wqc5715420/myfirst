var tplChance=require('../tpl/chance.string');
SPA.defineView('chance',{
	html:tplChance,
	 init: {
    getData: function (vm) {
    	
      $.ajax({
        url: "/works/api/dataList.do",
        type: "get",
        success: function (res) { 
        	console.log(res)
            vm.datalist = res;
            console.log(vm.datalist)
           
        }
      });
    }
  },
	plugins:['delegated',
		{
    name: 'avalon',
    options: function (vm) {
      vm.datalist = [];
//    vm.page = 0;
//    vm.str = "abc";
//    vm.isShow = true;
    }
  }
	],
//	modules:[{
//		name:'indexContent',
//		container:'.m-index-body',
//		views:['search','chance','integral','my','nearby']		
//	}],
	bindEvents:{
		"beforeShow":function(){
			var self=this;
			var mySwiper = new Swiper('#chance-swiper',{
			pagination : '.swiper-pagination',
			autoplay : 3000,
			speed:1000,
			//pagination : '#swiper-pagination1',
			});
		      var vm = self.getVM();
		      self.getData(vm);
//		      vm.$watch('page', function (newValue, oldValue) {
//		        vm.page = newValue;
//		        self.getData(vm);
//		      });
		    
			
			
		}
	},
	bindActions:{
		"show.searcher":function(){
		SPA.open("searcher");
	}
	}
	
});

