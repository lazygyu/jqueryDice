// jQuery Rolling Dice Plugin
// LazyGyu

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

(function($){
    window._dices = [];

    function Dice(tar, opt){

        var def = {
            diceSize : 50,
            value:1,
            duration:500,
            imageUrl:'dice.png'
        };

        var setting = $.extend(def, opt);

        this.width = $(tar).width();
        this.height = $(tar).height();
        this.inRoll = false;
        this.setting = setting;
        this.rollFrame = 0;

        this.value = 3;

        this.targetValue = 0;

        $(tar).css({overflow:'hidden'});

        var that = this;
        var diceSize = setting.diceSize;
        that.diceSize = diceSize;

        var diceImage = $("<div class='dice'></div>");
        that.diceImage = diceImage;

        var imgCont = new Image();
        imgCont.onload = function(){
            imgCont.removeAttribute("width");
            imgCont.removeAttribute("height");
        }
        imgCont.src = setting.imageUrl;



        that.imgCont = imgCont;

        diceImage.append(imgCont);
        $(imgCont).css({width:"100%", marginTop:-((that.value-1) * diceSize) + "px"});

        diceImage.css({
            width:diceSize + "px",
            height:diceSize + "px",
            position:"relative",
            left:0,
            top:0,
            marginLeft:((that.width - setting.diceSize)/2) + "px",
            marginTop:((that.height - setting.diceSize)/2) + "px" ,
            overflow:"hidden"
        });

        $(diceImage).appendTo(tar);
    }

    Dice.prototype.showValue = function(v){
        var that = this;
        var size = that.diceImage.width()
        var tmpTop = -((v -1) * size);
        that.tmpValue = v;
        $(this.imgCont).css({
            width:size + "px",
            marginTop:tmpTop + "px"
        });
    };

    Dice.prototype.option = function(opt){
        var that = this;
        that.setting = $.extend(that.setting, opt);
        that.value = that.setting.value;
        that.diceSize = that.setting.diceSize;
        that.duration = that.setting.duration;

        $(that.imgCont).css({
            width:that.setting.diceSize + "px",
            marginTop: -((that.value-1) * that.setting.diceSize) + "px"
        });

        that.diceImage.css({
            width:that.setting.diceSize + "px",
            height:that.setting.diceSize + "px",
            marginLeft:((that.width - that.setting.diceSize) / 2) + "px",
            marginTop:((that.height - that.setting.diceSize) / 2) + "px"
        });
    }

    Dice.prototype.roll = function(v, cb){
        var that = this;
        if( that.inRoll ) return false;
        if( cb == undefined && typeof v == "function" ) { cb = v; v = null; }
        if(v){
            that.targetValue = v;
        }else{
            that.targetValue = Math.floor((Math.random() * 6)) + 1;
        }



        that.inRoll = true;

        $(that.diceImage).css({
            marginTop:-(that.diceSize*4),
            marginLeft:-(that.diceSize*4),
            width:(that.diceSize*4) + "px",
            height:(that.diceSize*4) + "px"

        }).animate({
                width:that.diceSize + "px",
                height:that.diceSize + "px",
                marginTop:((that.height - that.setting.diceSize) / 2) + "px",
                marginLeft:((that.width - that.setting.diceSize) / 2) + "px",
            }, {duration:that.setting.duration, specialEasing:{marginTop:'easeOutBounce'}, step:function(num, tween){
                if( that.rollFrame++ % 9 != 0 ) {
                    that.showValue(that.tmpValue);
                }else{
                    var rnd = Math.floor(Math.random() * 6) + 1;
                    that.showValue(rnd);
                }
            }, complete:function(){
                that.inRoll = false;
                that.value = that.targetValue;
                that.showValue(that.targetValue);
                if(cb && typeof cb === "function") cb(that.targetValue);
            }});
    }

    $.fn.dice = function(elems, opt, cb){
        if( typeof elems == "string"){
            switch(elems){
                case "roll":
                    $(this).data("lz_dice").roll(opt, cb);
                    break;
                case "option":
                    $(this).data("lz_dice").option(opt);
                    break;
            }
        }else{
            return $(this).each(function(){
                var dice = new Dice(this, elems);
                window._dices.push(dice);
                $(this).data("lz_dice", dice);
            });
        }
    }


})(jQuery);