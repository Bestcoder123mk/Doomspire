var namestu= [];
function Submit() {
    var name1= document.getElementById("stu.1").value;
    var name2= document.getElementById("stu.2").value;
    var name3= document.getElementById("stu.3").value;
    var name4= document.getElementById("stu.4").value;
    namestu.push(name1);
    namestu.push(name2);
    namestu.push(name3);
    namestu.push(name4);
    console.log(namestu);
    document.getElementById("disname").innerHTML=namestu;
    document.getElementById("submit").style.display="none";
    document.getElementById("tors").style.display="inline-block";
}
function sort() {
    namestu.sort();
    console.log(namestu);
    document.getElementById("disname").innerHTML=namestu;
}