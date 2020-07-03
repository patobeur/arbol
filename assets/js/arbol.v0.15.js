
window.onload = function () {
    //monObject.Arbol = document.body.children
    //monObject.ParsingBody(0,document.body,0,0);
    document.head.prepend(monObject.InjectionCss())
    //document.body.prepend(monObject.injectionhtml());
    // monObject.RemakeBody(monObject.mydata.mescases)
    //monObject.InjectionFullScreen()
    monObject.InjectionFooter()
    
}
// Mon Objet
const monObject = {}
// datas
monObject.mydata = {
    Arbol: document.body,
    compteur: 0,
    urlinput: 'https://patobeur.apteo.org',

    myId: 1,
    contenu: 'Hello',
    bgcolor: '',
    HoverCaseSize: 3,
    mescases: [],
    CleardBody: false
}
// Methods --------------------------- A CLEAN + --------------------------------------
monObject.RemakeBody = function(domdubody) { 
    for (let i = 0; i < domdubody.length; i++) {
        

        let margex = ((domdubody[i].x/charte.cs_x)*charte.marge)
        let margey = ((domdubody[i].y/charte.cs_y)*charte.marge)
        // div en absolute dans le div DivSolo qui est en display:inline-block
        let DivSolo = document.createElement('div')
        DivSolo.id = 'Arbol_item' + '_' + i
        DivSolo.myownid = i
        DivSolo.className = 'Arbol_item'
        DivSolo.style.left =  margex + charte.mx + domdubody[i].x + 'px'
        DivSolo.style.top =  margey + charte.my + domdubody[i].y + 'px'

        if (charte.max_x<=margex + charte.mx + domdubody[i].x) charte.max_x = margex + charte.mx + domdubody[i].x
        if (charte.max_y<=margey + charte.my + domdubody[i].y) charte.max_y = margey + charte.my + domdubody[i].y

        let DivClick = document.createElement('h3')
        DivClick.innerHTML = domdubody[i].NodeName+'<br>'+domdubody[i].NodeClassName

        DivClick.addEventListener(
            'click',
            function fullscreen(e){
                // console.log(e.target)
                console.log(domdubody[i])
                // if (e.target.activated) {
                //     // on passe en normal
                //     quer.classList.remove("lecture");
                //     e.target.activated = false
                // } else {
                //     // on passe en mode lecture
                //     e.target.classList.add("lecture");
                //     e.target.activated = true
                // }
            }//,{once:true}
        )


        // ---------------------------------------------------------
        let DivPopup = document.createElement('div')   
        DivPopup.id = 'Arbol_popup' + '_' + i
        DivPopup.activated = false
        DivPopup.className = 'Arbol_popup'
        DivPopup.style.backgroundColor = domdubody[i].BgColor
        // DivPopup.style.color = SwitchType(xtext)['fontcolor']
        // DivPopup.innerHTML = '#'+i+' ' + domdubody[i].NodeName + '<br>' + domdubody[i].texte
        // DivPopup.innerHTML = domdubody[i].texte
        DivPopup.prepend(DivClick)
        DivSolo.appendChild(DivPopup)
        document.body.appendChild(DivSolo)
        // document.querySelector('#TreeDiv').appendChild(DivSolo)
    }
    let margeadroiteDiv = document.createElement('div')   
    margeadroiteDiv.id = 'margeadroiteDiv'
    margeadroiteDiv.className = 'Arbol_item'
    margeadroiteDiv.style.backgroundColor = 'none'
    margeadroiteDiv.innerHTML = ''
    margeadroiteDiv.style.left =  charte.max_x + charte.cs_x + 'px'
    margeadroiteDiv.style.top =  charte.max_y + charte.footerH + 'px'
    document.body.appendChild(margeadroiteDiv)
}


monObject.clear = function(){
    document.body.innerHTML = ''
}