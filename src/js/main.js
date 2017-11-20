$(function(){
    $('#content').fullpage({
        navigation:true,
        anchors:["page1","page2","page3","page4","page5"],
        // navigationPosition:right,
        afterLoad (anchorLink , index ) {
            if(index == 1){
                addClassPage1 ();
            }else if (index == 2){
                addClassPage2 ();
            }else if(index == 3){
                addClassPage3 ();
            }else if(index == 4){
                addClassPage4 ();
            }else if(index == 5){
                addClassPage5 ();
            }
        },
        onLeave (index ,nextIndex ,direction ) {
            if (index == 1) {
                removeClassPage1 ();
            }else if (index == 2){
                removeClassPage2 ();
            }else if(index == 3){
                removeClassPage3 ();
            }else if(index == 4){
                removeClassPage4 ();
            }else if(index == 5){
                removeClassPage5 ();
            }
        },
    })
    
});

function addClassPage1 () {
    $(".activeColor").removeClass("activeColor");
    $("#a1").addClass("activeColor");
    $(".page1-pic").addClass("FadeIn toggleShow");
    var t = setTimeout(function() {
    }, 2500);

}
function addClassPage2 () {
    $(".activeColor").removeClass("activeColor");
    $("#a2").addClass("activeColor");
}
function addClassPage3 () {
    $(".activeColor").removeClass("activeColor");
    $("#a3").addClass("activeColor");
}
function addClassPage4 () {
    $(".activeColor").removeClass("activeColor");
    $("#a4").addClass("activeColor");
}
function addClassPage5 () {
    $(".other").addClass("animated bounceInDown");
    $(".activeColor").removeClass("activeColor");
    $("#a5").addClass("activeColor");
}


function removeClassPage1 () {
    $(".page1-pic").removeClass("FadeIn toggleShow");
}
function removeClassPage2 () {
    
}
function removeClassPage3 () {
    
}
function removeClassPage4 () {
    $(".other").removeClass("animated bounceInDown");
}
function removeClassPage5 () {
    $(".other").removeClass("animated bounceInDown");
}




var ProSkills = echarts.init(document.getElementById('ProSkills'));

// 指定图表的配置项和数据
ProSkills.title = '专业技能';

option = {
    title: {
        text: '专业能力'
    },
    color: ['#404040'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['html', 'css', 'js', 'vue.js', 'webpack', 'jquery','grunt', 'node'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'掌握程度',
            type:'bar',
            barWidth: '40%',
            data:[100, 52, 20, 34, 90, 30,40, 20]
        }
    ]
};
ProSkills.setOption(option);



//雷达图

var othSkills = echarts.init(document.getElementById('othSkills'));
option2 = {
    title: {
        text: '其他能力'
    },
    radar: {
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '学习能力', max: 100},
           { name: '交际能力', max: 100},
           { name: '责任心', max: 100},
           { name: '适应力', max: 100},
           { name: '管理能力', max: 100},
           { name: '抗压能力', max: 100}
        ]
    },
    series: [{
        name: '其他能力',
        type: 'radar',
        data : [
            {
                value : [72, 65, 70, 45, 65, 87],
                name : '其他能力'
            },
            
        ]
    }]
};
othSkills.setOption(option2);


//联系方式
function opengithub () {
    window.open("https://github.com/liwend219")
}
function openmail () {
    window.open("mailto:987671764@qq.com")
}
function openweibo () {
    
    window.open("https://weibo.com/u/5128147886")
}
function openzhihu () {
    window.open("https://www.zhihu.com/people/li-wen-dong-63/activities")
}
//简历下载
function resumeDown () {
    var url = location.host;
    console.log(url)
    window.location.href="./src/resume/李文东web前端.doc";
}

//跳转锚点
function next () {
    location.hash="#page2";
}