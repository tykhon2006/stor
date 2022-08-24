function show_menu_class(posts_in_case){
    try{
        block = document.getElementById('incase')
        num = document.getElementById('amount').textContent;
        if(num > 0){
           block.classList.add("btn-success");
        }else{
           block.classList.add("btn-secondary");
        }
        }
    catch{}
}
show_menu_class("amount")
