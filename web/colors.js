var Links = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //   alist[i].style.color = color;
        //   i = i + 1;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) { //주야핸들러 버튼 설정
    var target = document.querySelector('body'); //쿼리 선택자 타겟은 body로 지정, body는 공통변수
    if (self.value === 'night') { //버튼의 value값 기본 설정
        Body.setBackgroundColor('black'); //버튼을 클릭시 배경화면은 검은색으로 설정
        Body.setColor('white'); //텍스트 색상은 흰색으로 설정
        self.value = 'day'; //버튼 선택하면 value가 day로 바뀜

        Links.setColor('white'); //night시 링크 텍스트 색상
    } else {
        Body.setBackgroundColor('white'); //버튼을 다시 클릭시 배경화면은 흰색으로 바뀜
        Body.setColor('black'); //텍스트 색상은 검은색으로 설정
        self.value = 'night'; //버튼의 value값이 night로 됨

        Links.setColor('blue'); //day시 링크 텍스트 색상
    }
}
