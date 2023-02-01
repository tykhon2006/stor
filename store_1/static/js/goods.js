goods += 1;
document.getElementById("goods").innerHTML = goods;
g = document.getElementById("goods");
if(goods == 0){
    g.classList.add("d-none");
}else{
    g.classList.add("d-block");
}