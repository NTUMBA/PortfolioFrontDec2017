$(document).ready(main);

function main() {
  $('.autor_nom').hide();
  $('.portfolio').on('click', function() {
  $('.autor_nom').toggle();
	});
  $('.cognito').hide();
  $('.cognito').fadeIn(15000);
  $('.logo').hide();
  $('.logo').fadeIn(3000);
  $('.triangle_1').hide();
  $('.triangle_1').fadeIn(15000);
  $('.triangle_2').hide();
  $('.triangle_2').fadeIn(15000);
  $('.triangle_3').hide();
  $('.triangle_3').fadeIn(15000);
  $('.triangle_4').hide();
  $('.triangle_4').fadeIn(15000);
  $('.triangle_5').hide();
  $('.triangle_5').fadeIn(15000);
  $('.triangle_6').hide();
  $('.triangle_6').fadeIn(15000);
  $('.triangle_7').hide();
  $('.triangle_7').fadeIn(15000);
  $('.triangle_8').hide();
  $('.triangle_8').fadeIn(15000);
  $('.triangle_9').hide();
  $('.triangle_9').fadeIn(15000);
  $('.triangle_10').hide();
  $('.triangle_10').fadeIn();
  $('.triangle_11').hide();
  $('.triangle_11').fadeIn(15000);
  $('.container').hide();
  $('.container').fadeIn(2000);
  $('.welcomEffect').hide();
  $('.welcomEffect').fadeIn(4000);
  $('.dev').hide();
  $('.dev').fadeIn(15000);
  $('.welcomEffect_contact').hide();
  $('.welcomEffect_contact').fadeIn(6000);
  $('.presentation_projects').hide();
  $('.presentation').on('click', function() {
  $(this).next().toggle();
  $(this).toggleClass('active');
	});
}
