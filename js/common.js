function checkLink(){
	if (typeof (_MICHAT) != 'undefined' && typeof (_MICHAT.floatClick) == 'function') {
		_MICHAT.floatClick();
	}else{
		window.open('http://dev.miduoke.net/Web/im.aspx?_=t&accountid=100000');
	}
}

