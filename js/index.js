$(document).ready(function(){
    $("#mustBtn").click(function(){
        htmlobj=$.ajax({url:"/a/schedulePlan/getCourseSelectPhone.json",async:false});
        $("#demo").html(htmlobj.responseText);
    });
});

//点击必修按钮
// function clicMust(){
//     //请求接口获取必修课程
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(xhttp.status===200){
//             document.getElementById("demo").innerHTML=this.responseText;
//         }
//     }; 
//     xhttp.open('GET',"/a/schedulePlan/getCourseSelectPhone.json",true);
//     xhttp.send();
//     document.getElementById("target").onclick;
// }
// //点击选修按钮
// function clicChoose(){
    
// }
