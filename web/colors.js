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
function nightDayHandler(self) { //�־��ڵ鷯 ��ư ����
    var target = document.querySelector('body'); //���� ������ Ÿ���� body�� ����, body�� ���뺯��
    if (self.value === 'night') { //��ư�� value�� �⺻ ����
        Body.setBackgroundColor('black'); //��ư�� Ŭ���� ���ȭ���� ���������� ����
        Body.setColor('white'); //�ؽ�Ʈ ������ ������� ����
        self.value = 'day'; //��ư �����ϸ� value�� day�� �ٲ�

        Links.setColor('white'); //night�� ��ũ �ؽ�Ʈ ����
    } else {
        Body.setBackgroundColor('white'); //��ư�� �ٽ� Ŭ���� ���ȭ���� ������� �ٲ�
        Body.setColor('black'); //�ؽ�Ʈ ������ ���������� ����
        self.value = 'night'; //��ư�� value���� night�� ��

        Links.setColor('blue'); //day�� ��ũ �ؽ�Ʈ ����
    }
}
