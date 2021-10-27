var name_div = document.getElementById("search_result") ;
var timerId ;
search = async (ele) => {    
    let res = await fetch(`https://swapi.dev/api/people?search=${ele}&format=json`) ;
    let data = await res.json() ;
    console.log(data.results);
    return data.results;
}
append_search = async (el) => {
    // name_div.innerHTML = null ;
    el.forEach(({name , mass , eye_color , birth_year , gender , hair_color , height}) => {
        let sw_char = document.createElement('p') ;
        sw_char.innerText = name ;
        sw_char.setAttribute('class' , 'sub_div');
        sw_char.onclick = function(){
            console.log("hi");
        } ;
        // name_div.append(sw_char) ;
    });
}
main = async () => {
    var n = document.getElementById("query").value ;
    console.log(n);
    if(n.length < 1){
        name_div.innerHTML = null ;
        return false ;
    }
    let characters = await search(n) ;
    if(characters === undefined){
            return false;
        }
    append_search(characters)
}
debounce = () => {
    var n = document.getElementById("query").value ;
    if(timerId){
        clearTimeout(timerId)
    }
    timerId = setTimeout( () => {
        main();
    }, 1000)
}


export default debounce