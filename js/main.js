
$('.header_list li').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active');
});


var open = document.getElementById('open');
var close = document.getElementById('close');
var menu_mobile_block = document.getElementById('menu_mobile_block');
var menu_mobile_btn = document.getElementById('menu_mobile_btn');

open.onclick = function() {
	menu_mobile_block.style.display = "block";
	open.style.display = "none";
	close.style.display = "block";
	menu_mobile_btn.style.background = "#44c0c2";
}

close.onclick = function() {
	menu_mobile_block.style.display = "none";
	open.style.display = "block";
	close.style.display = "none";
	menu_mobile_btn.style.background = "#fff";
}


// $('.blog_list li').on('click', function() {
//   $(this).addClass('blog_item_active').siblings().removeClass('blog_item_active');
// });



var blog_title = document.getElementById('blog_title_one');
var buy_now = document.getElementById('buy_now_one');

buy_now.onmouseover = function() {
	this.style.backgroundColor = "#49cbcd";
	blog_title.style.backgroundColor = "#49cbcd";
}

buy_now.onmouseout = function() {
	this.style.backgroundColor = "#788492";
	blog_title.style.backgroundColor = "#485460";
}

var blog_title_two = document.getElementById('blog_title_two');
var buy_now_two = document.getElementById('buy_now_two');

buy_now_two.onmouseover = function() {
	this.style.backgroundColor = "#49cbcd";
	blog_title_two.style.backgroundColor = "#49cbcd";
}

buy_now_two.onmouseout = function() {
	this.style.backgroundColor = "#788492";
	blog_title_two.style.backgroundColor = "#485460";
}



var blog_title_three = document.getElementById('blog_title_three');
var buy_now_three = document.getElementById('buy_now_three');

buy_now_three.onmouseover = function() {
	this.style.backgroundColor = "#49cbcd";
	blog_title_three.style.backgroundColor = "#49cbcd";
}

buy_now_three.onmouseout = function() {
	this.style.backgroundColor = "#788492";
	blog_title_three.style.backgroundColor = "#485460";
}