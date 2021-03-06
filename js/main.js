/**
 * Created by lenovo on 17/12/5 005.
 */
/*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    params: {
        debugger: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
});
/*音乐处理开始*/
var musci=document.getElementById("music");
var musicbg=document.querySelectorAll(".musicbg")[0];
var musicImg=document.querySelectorAll(".musicImg")[0];
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag==1){
        musicbg.style.display="none";/*改变样式隐藏*/
        musicImg.style.animation="none";/*停止动画*/
        audio.pause();
        flag=0;
    }else{
        musicbg.style.display="block";/*改变样式显示*/
        musicImg.style.animation="music 2s linear infinite";/*动画执行*/
        audio.play();
        flag=1;
    }
}
/*音乐结束*/

/*百度地图*/
//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.5776,38.082711),15);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
    var markers = [
        {content:"微场景",title:"我泊头职业学院",imageOffset: {width:0,height:3},position:{lat:38.081745,lng:116.576163}}
    ];
    for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
    };
}
//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:0});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:false});
    map.addControl(overviewControl);
}
var map;
initMap();
/*百度地图结束*/

/*表单验证开始*/
function checkName(){
    var name=document.getElementById("name").value;
    if(name.length<2){
        document.getElementById("nameSpan").innerHTML="不能少于两位";
    }else{
        document.getElementById("nameSpan").innerHTML="正确";
    }
}
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var a=/^1\d{10}$/;
    if(!a.test(phone)){
        document.getElementById("phoneSpan").innerHTML="不符合规范";
    }else{
        document.getElementById("phoneSpan").innerHTML="正确"
    }
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(email)){
        document.getElementById("emailSpan").innerHTML="不符合规范"
    }else{
        document.getElementById("emailSpan").innerHTML="正确"
    }
}
function checkAll(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    if(name==""||phone==""){
        alert("用户名和手机号必填")
    }else{
        alert("提交成功");
        return false; //页面不跳转、
    }
}
/*表单验证结束*/
