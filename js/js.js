;(function($){

    var tema = {
       
        init: function(){
            this.section1Fn();
        },
        section1Fn: function(){
            var $textP = $('#wrap .wrap .gap .content p')

            $textP.on({
                click:function(){
                    alert('클릭되었습니다.');
                }
            })
        }
    }


    tema.init();

})(jQuery);