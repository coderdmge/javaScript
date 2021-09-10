function move(obj,speed,target,attr,callback){
				clearInterval(obj.timer)	
				var current=parseInt(getStyle(obj,attr)) 
				speed=target-current>0?speed:-speed
					obj.timer=setInterval(function(){
						var oldValue=parseInt(getStyle(obj,attr)) 
						var newValue=oldValue+speed
						if(newValue>target&&speed>0||newValue<target&&speed<0){
							newValue=target
						}
						obj.style[attr]=newValue+"px"
						if(newValue===target){
							clearInterval(obj.timer)
							callback&&callback()
						}
					},30)
			}
			
			/*
			 * 定义一个函数，用来获取指定元素的当前的样式
			 * 参数：
			 * 		obj 要获取样式的元素
			 * 		name 要获取的样式名
			 */
			function getStyle(obj , name){
				
				if(window.getComputedStyle){
					//正常浏览器的方式，具有getComputedStyle()方法
					return getComputedStyle(obj , null)[name];
				}else{
					//IE8的方式，没有getComputedStyle()方法
					return obj.currentStyle[name];
				}
				
			}
				function addClass(obj,cn){
					if(!hasClass(obj,cn)){
						obj.className+=" "+cn
					}
				}
				function hasClass(obj,cn){
					var reg=new RegExp("\\b"+cn+"\\b")
					return reg.test(obj.className)
				}
				function removeClass(obj,cn){
					var reg=new RegExp("\\b"+cn+"\\b")
					obj.className=obj.className.replace(reg,"")
				}
				function toggleClass (obj,cn){
					if(hasClass(obj,cn)){
						removeClass(obj,cn)
					}else{
						addClass(obj,cn)
					}
				}