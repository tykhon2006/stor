function show_active_link(menu){
    try{
        let elem = document.getElementById(menu).querySelectorAll("a")
        let url = document.location.href
        for(link in elem){
            if (elem[link].href != url) {
                console.log(elem[link].href)
                console.log(url)
                elem[link].classList.add("text-secondary")
            }
        }
    } catch{}
}
show_active_link("menu")
