(function($){

  $(function() {

    $('#user_name').text(localStorage.getItem('user_name'));
    $('#user_phone').text(localStorage.getItem('user_phone'));

    $('#call_me').each(function(){
      var form = $(this),
      btn = form.find('input[type=submit]');

      form.find('input[class*=validates-as-required]').addClass('empty_field');

      function checkInput(){
        form.find('input[class*=validates-as-required]').each(function(){
          if($(this).val() != ''){
	          $(this).removeClass('empty_field');
          } else {
	          $(this).addClass('empty_field');
          }
        });
      }

      function lightEmpty(){
        form.find('.empty_field').css({'border-color':'#d8512d'});
        setTimeout(function(){
          form.find('.empty_field').removeAttr('style');
        },500);
      }

      setInterval(function(){
	      checkInput();
        var sizeEmpty = form.find('.empty_field').size();
        if(sizeEmpty > 0){
          if(btn.hasClass('disabled')){
            return false
          } else {
            btn.addClass('disabled')
          }
        } else {
          btn.removeClass('disabled')
        }
      },500);

      btn.click(function(){
        if($(this).hasClass('disabled')){
	        lightEmpty();
          return false
        } else {
	        localStorage.setItem('user_name', $('#call_me .user_name').val());
	        localStorage.setItem('user_phone', $('#call_me .user_phone').val());
          form.submit();
        }
      });
    });

    $('.gohome').click(function(){
	    localStorage.clear();
    });

  });

})( jQuery );
