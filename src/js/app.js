// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}


$( '[data-fancybox]' ).fancybox({
	caption : function( instance, item ) {
    // console.log($(this).find('figcaption').html())
    // console.log(item)
		return $(this).find('figcaption').html();
	}
});

$(document).ready(function(){
  $('.carousel').slick({
    adaptiveHeight: true,
    appendArrows: 'div.carousel'
  });
});