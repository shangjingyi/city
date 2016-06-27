var tplHome=require ('../templates/home.string');
SPA.defineView('home',{
	html:tplHome,
	
    plugins: ['delegated', {
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
    }
    }],
    
	bindEvents:{
		'show':function(){
			this.bannerSwiper = new Swiper ('#home-banner', {
			    loop: true,
			    autoplay:1000,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    autoplayStopOnLast : false
			})
			this.griddingSwiper = new Swiper ('#gridding-swiper',{
			    loop: true,
			    autoplay:1000,				
				slidesPerView : 2.5,
				spaceBetween : 20,
				//slidesPerGroup : 2.5
			})
			this.griddingSwiper = new Swiper ('#swiper-main',{
			    loop: false,
			    //autoplay:1000,				
			})
			
			
			
			
			
			
			
			
			
			
		},
		beforeshow:function(){
			var vm = this.getVM();
			$.ajax({
				url : '/city-dish/mork/mork.json',
				type : 'get',
				data : {
					rtype:'refersh'
				},
				success : function(rs){
					vm.livelist=rs.data;
				}
			})
		}	
	}	
})
