var test = [
    
    {
        image:'2a.bmp',
        object:'양',
        answer: [58, 137, 35, 35]
    },
    
    {
        image:'3a.bmp',
        object:'곰',
        answer:[146, 259, 40, 70]
    },
    
    {
        image:'4a.PNG',
        object:'달걀',
        answer:[45, 278, 28, 30]
    },
    
    {
        image:'9a.bmp',
        object:'네잎클로버',
        answer:[300, 68, 25, 25]
    },
    
    {
        image:'10a.bmp',
        object:'판다',
        answer:[277, 215, 40, 40]
    },
    
    {
        image:'11a.PNG',
        object:'발레리나',
        answer:[51, 291, 40, 80]
    },
    
    {
        image:'13a.bmp',
        object:'강아지',
        answer:[218, 173, 55, 55]
    },
    
    {
        image:'14a.bmp',
        object:'강아지',
        answer:[236, 246, 43, 105]
    },
    
    {
        image:'15a.bmp',
        object:'판다',
        answer:[270, 136, 37, 80]
    },
    
    {
        image:'16a.PNG',
        object:'판다',
        answer:[149, 320, 45, 45]
    },
    
    {
        image:'18a.bmp',
        object:'판다',
        answer:[318, 198, 35, 50]
    },
    
    {
        image:'20a.bmp',
        object:'판다',
        answer:[315, 135, 25, 28]
    },
    
    {
        image:'21a.bmp',
        object:'화난 라이언',
        answer:[293, 258, 25, 75]
    },
    
    {
        image:'22a.bmp',
        object:'방귀 뀌는 어피치',
        answer:[341, 236, 30, 60]
    },
    
    {
        image:'25a.bmp',
        object:'무언가 다른 카카오 프렌즈',
        answer:[216, 270, 40, 70]
    },
    
    {
        image:'26a.PNG',
        object:['다르게 생긴 호랑이'],
        answer:[68, 363, 40, 50]
    },
    
    {
        image:'27a.PNG',
        object:['다르게 생긴 스파이더 맨'],
        answer:[261, 64, 45, 60]
    },
    
    {
        image:'28a.bmp',
        object:['K'],
        answer:[190, 186, 20, 20]
    },
    
    {
        image:'29a.bmp',
        object:['스페이드♠'],
        answer:[56, 241, 30, 30]
    },
    
    {
        image:'30a.bmp',
        object:['애플 로고'],
        answer:[170, 191, 40, 40]
    },
    
    {
        image:'32a.PNG',
        object:['왼손'],
        answer:[332, 233, 40, 40]
    },
    
    {
        image:'33a.bmp',
        object:['스폰지밥'],
        answer:[301, 121, 35, 35]
    },
    
    {
        image:'34a.PNG',
        object:['고양이'],
        answer:[293, 276, 50, 50]
    },
    
    {
        image:'35a.bmp',
        object:['다른 국기'],
        answer:[262, 227, 40, 40]
    },
    
    {
        image:'37a.bmp',
        object:['크기가 다른 다이아몬드'],
        answer:[109, 193, 30, 30]
    },
    
    {
        image:'38a.bmp',
        object:['다르게 생긴 펭귄'],
        answer:[276, 176, 40, 50]
    },
    
    {
        image:'39a.bmp',
        object:['판다'],
        answer:[33, 260, 45, 55]
    },
    
    {
        image:'42a.PNG',
        object:['피카츄'],
        answer:[282, 259, 30, 40]
    },
    
    {
        image:'43a.PNG',
        object:['회색점'],
        answer:[102, 301, 20, 20]
    },
    
    {
        image:'44a.bmp',
        object:['다른 것'],
        answer:[246, 287, 45, 45]
    },
    
    {
        image:'45a.bmp',
        object:['다른 것'],
        answer:[270, 152, 40, 40]
    }
    

    
    // {
    //     image:'.bmp',
    //     object:[''],
    //     answer:''
    // },
    
];


// alert(test.length);
test.shuffle();

var aerr = [3, 5, 10, 15, 20, 25, 30]; //문제 개수 선택 항목

var howmany = 1; // 선택한문제개수
var eye = 0;

// var imgBox = box().append().size(windowWidth()-50).click(qwerqtqwet);
// var textBox = box().append().size('100%', '20%').textSize(20);
// var nnn = 0;

// function lasdjfl () {
//     var now = test[nnn];
//     imgBox.image(now.image);
//     textBox.text(now.object);
// }

// lasdjfl();

// function qwerqtqwet () {
//     nnn++;
//     lasdjfl();
// }



// for (var i=0; i<test.length; i++) {
//     box().append().size('25%').image(test[i].image);
//     box().append().size('auto').text(test[i].object);
// }







var bgBox = box().append().size(400, 510).border(0).disableSelection();//전체 박스

var startBox = box().appendTo(bgBox).size('100%').border(0).show();//시작화면 박스
var testBox = box().appendTo(bgBox).size('100%').border(0).hide();//테스트 화면 담는 박스
var endBox = box().appendTo(bgBox).size('100%').border(0).hide();//끝났을 때!
var finishBox = box().appendTo(endBox).size('90%', 'auto').textSize(35).border(0).marginTop(40).hide();//끝났을 때 훌륭해요 or 다시해보세요
var nnn = 0;//현재 진행 횟수
var ppp = 5;//목숨





box().appendTo(startBox).size('100%', 'auto').text('관찰력 테스트', 40).border(0).marginTop(10);//시작화면에 앱 이름
var eyeBox = box().appendTo(startBox).size('37%').image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJFS_ALkXzi_Fw_Kl5LmQMnW5NQdFmr5RSvVICJretobsvnYQ')//시작화면 눈 사진
.marginTop(20).border(0).click(clickEye);//눈 사진

box().appendTo(startBox).size('90%', 'auto').text('시작', 60).border(0).click(startClick);//시작 버튼




box().appendTo(startBox).size('90%', 'auto').text('문제 개수', 20).align('left').border(0).marginTop(10);//'문제 개수' 글자 박스 
var howBox = box().appendTo(startBox).size('30%', 'auto').text(1, 30).align('left').padding('0 3 0 20').marginTop(15);//문재개수 나오는 박스 전체
var updownBox = box().appendTo(howBox).size('40%', '100%').float('right');//올리고 내리기 박스 담는 박스
box().appendTo(updownBox).size('100%', '45%').icon('chevron-up').click(clickUp);// 숫자 올리기 박스
box().appendTo(updownBox).size('100%', '45%').icon('chevron-down').click(clickDown);// 숫자 내리기 박스

var howmanyBox = box().appendTo(startBox).size('50%', 'auto').border(0).marginTop(0);//문제 개수 선택 담는 박스
for (var y=0; y<aerr.length; y++) {
    box().appendTo(howmanyBox).size('20%', 'auto').text(aerr[y], 20, 'fireBrick').margin(5).click(clickhowmany);//문제 수 선택 항목
}










var hpBox = box().appendTo(testBox).size('95%', '10%');//목숨담는 박스
var imgBox = box().appendTo(testBox).size(350).border(2).marginTop(10).click(checkAnswer);//검사 사진 박스
box().appendTo(testBox).size('80%', 'auto').text('찾아야 할것 :', 20).align('left').marginTop(14).border(0);//찾아야 할것 글자
var objectBox = box().appendTo(testBox).size('70%', 'auto').textSize(25).align('left').marginTop(10).border(0);//찾아야 할것 알려주는 박
box().appendTo(testBox).size('10%').image('back').marginTop(0).marginLeft(0).border(0).click(clickBack);



box().appendTo(endBox).size(160, 200).image('광고!.PNG').margin('30 5 0 0');
box().appendTo(endBox).size(160, 200).image('광고3.PNG').margin('30 0 0 5');

box().appendTo(endBox).size('40%', 'auto').text('색맹 검사 해보기', 15, 'green').margin('3 5').border(0);
box().appendTo(endBox).size('40%', 'auto').text('다른 색깔 찾기 하기', 15, 'orange').margin('3 5').border(0);





// box().appendTo(endBox).size('50%', '50%').image('광고!.PNG').marginTop(10);//색맹검사 광고
// var paoerier = box().appendTo(endBox).size('auto').text('색맹검사 해보기', 15).block().margin('auto').border(0).marginTop(5).timer(onTimer, 500);//광고 글귀
box().appendTo(endBox).size('auto').text('홈으로', 25).padding(8).marginTop(40).padding('10 20').border(1, 'black', 15).click(clickend2);//끝화면에서 홈으로




finishBox.text('훌륭해요~~!');

function clickBack () {
    startBox.show();
    testBox.hide();
    endBox.hide();
}


function onTimer () {//글자 깜박이게 하기
    
    if (paoerier.textColor() == 'red')
        paoerier.textColor('black');
    
    else {
        paoerier.textColor('red');
    }
    
}



function clickHome () {
    windowOpen('http://www.realcoding.co/vvv/qRGCPpRlJYm8WNdIaylwpbWPcgYXrMUv2J55vVCg65Y');
}



function startClick () {//시작 눌렀을 때
    
    if (howmany !=0) {//선택 했을 떄 진행
        startBox.hide();
        testBox.show();
        maketest();
    }
    
    else {
        alert('문제 개수를 선택해 주세요');//선택 안 했으면 메세지
        return;
    }
}

function clickEye () {//눈 사진 클릭 했을 떄 (중요하지 않음
    
    if (eye == 0) {//눈이 뜨고 있을 때
        eyeBox.image('https://media.istockphoto.com/vectors/false-simple-eyelash-vector-icon-black-eyelash-illustration-on-white-vector-id833711222');
        eye = 1;
        return;
    }
    
    else if (eye == 1) {//눈 이 감고 있을 때 
        eyeBox.image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJFS_ALkXzi_Fw_Kl5LmQMnW5NQdFmr5RSvVICJretobsvnYQ');
        eye = 0;
        return;
    }
}

function clickhowmany (bx) {//문제 개수 눌렀을 때
    
    // var array = howmanyBox.children();

    // for(var i=0; i<array.length; i++) {//일단 색깔을 모두 하얗게 
    //     array[i].color('white');
    // }
    
    bx.blink('SpringGreen', 200);//그리고 선택한것 색깔 바꾸기
    howBox.text(bx.text());
    howmany = bx.text();//문제 개수 저장
}


function maketest () {//문제 만들기
    
    if (nnn >= howmany) {//선택한 문제 수 만큼 풀었으면 끝내기
        finish();
    }
    
    if(findBox('answer')) {//이전 문제 정답박스 있으면 지우기
        findBox('answer').remove();
    }
    
    var now = test[nnn];//현재 문제의 JSON 불러오기
    imgBox.image(now.image);//사진 띄우기
    objectBox.text(now.object);//찾아야 할것 띄우기
    makeAnswer();//정답 박스 만들기
    makeHP();//목숨 만들기
}


function makeHP () {//목숨만들기
    hpBox.clear();//일단 없애기
    
    if (ppp <= 0) {//목숨이 없으면 끝내기
        finish2();
    }
    
    for (var i=0; i<ppp; i++) {//목숨 만들기
        box().appendTo(hpBox).size(40).image('/assets/599_하트.png').border(0).margin('0 10').marginTop(3);
    }
}


function makeAnswer () {//정답 만들기
    var now = test[nnn].answer;//현재 문제의 정답 배열
    
    var answerBox = box().appendTo(imgBox).size(now[2], now[3]).moveTo(testBox.left() + now[0] , testBox.top() + now[1]).border(0).click(checkAnswer).id('answer');//정답 박스의 크기 위치 만들기
}


function checkAnswer (bx) {//정답이라 생각되는걸 눌렀을 때
    if (bx == imgBox) {//잘못 누르면 목숨 깎기
        ppp -- ;
        makeHP();
    }
    
    if (bx.id() == 'answer') {//맞는걸 눌렀을 때
        nnn++;
        findBox('answer').border(3, 'red', 50).timerOnce(maketest, 2000);//2초동안 정답을 보여주고 다음문제 만들기
    }
}

function finish () {//끝났을 때
    startBox.hide();
    testBox.hide();
    endBox.show();
    finishBox.text('훌륭해요~~!');
}

function finish2 () {
    startBox.hide();
    testBox.hide();
    endBox.show();
    finishBox.text('저런... 다시해보세요');
}

// function clickend1 () {
    
//     nnn = 0;
//     ppp = 5;
//     test.shuffle();
//     startBox.hide();
//     endBox.hide();
//     testBox.show();
//     maketest();
// }

function clickend2 () {//홈으로 눌렀을 때
    
    nnn = 0;
    ppp = 5;
    test.shuffle();
    testBox.hide();
    endBox.hide();
    
    // var array = howmanyBox.children();

    // for(var i=0; i<array.length; i++) {
    //     array[i].color('white');
    // }
    howmany = 0;
    howBox.text(howmany);
    startBox.show();
}

function clickUp (bx) {//올리기 눌렀을 때
    
    bx.blink('DarkTurquoise', 200);//선택한것 깜빡이게
    
    if (howmany == test.length) {//최대가 되면 return
        return;
    }
    
    howmany++;//개수 늘리기
    howBox.text(howmany);//늘린 개수를 글자로 보여주기
    howmany = howBox.text();
    
}

function clickDown (bx) {//내리기 눌렀을 때
    
    bx.blink('Tomato', 200);//선택한것 깜빡이게
    
    if (howmany <= 1) {// 0일때 내리기 누르면 return
        return;
    }
    
    howmany--;
    var Text = howBox.text();
    howBox.text(howmany);//늘린 개수를 글자로 보여주기
    
}