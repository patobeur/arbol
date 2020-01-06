"use strict";
window.onload = function () {
    monObject.Arbol = document.body.children
    monObject.ParsingBody(0,document.body,0,0);
    document.head.prepend(monObject.InjectionCss())
    document.body.prepend(monObject.injectionhtml('Ici, vous etes en absolu ! Abandonnez tout espoirs relatifs'));
    monObject.RemakeBody(monObject.mydata.mescases)
    monObject.InjectionFullScreen()
    monObject.InjectionFooter()
    
    //console.log(monObject.mydata.mescases);
}
// L'Objet
const CL = true
const monObject = {}
// data
const MePage = {
    my: 50,
    mx: 50,
    marge: 2,
    cs_x: 50,
    cs_y: 50,
    mx: 100, // px marge top
    my: 100 // px marge left
}
monObject.mydata = {
    Arbol: document.body,
    compteur: 0,

    myId: 1,
    contenu: 'Hello',
    bgcolor: '',
    HoverCaseSize: 1.5,
    mescases: []
}

// Methods with a litle BIG Hand from my friend
monObject.ParsingBody = function(o, CurrentNode, x, y) {

    let data = monObject.mydata;
    let width = 0;

    for (let i = 0; i < CurrentNode.children.length; i++) {
        width += this.ParsingBody(i,CurrentNode.children[i],x+width, y + 1)
    }

    if (CurrentNode.children.length == 0) { width = 1; }
    if (monObject.mydata.CL) console.log(CurrentNode.nodeName)
    // A METTRE DEHORS
    let texte = CurrentNode.nodeName
        texte += '<br>' + CurrentNode.id
        texte += '<br>' + 'o:' + o + ',w:' + width
        if (CurrentNode.children.length>0)
            {texte += '<br>' + CurrentNode.children.length +' childs'}
            else {texte += '<br>' + 'No childs !'}
        texte += '<br>' + '[' + monObject.tags[CurrentNode.nodeName].contenu + ']'

    data.mescases.push({   
            // données de placement x, y & affichage
            x:              x * MePage.cs_x, 
            y:              y * MePage.cs_y,
            id:             data.compteur,
            BgColor:        monObject.tags[CurrentNode.nodeName].bgcolor,
            // données de retour d'info
            NodeId:         CurrentNode.id,
            NodeClassName:  CurrentNode.id,
            NodeName:       CurrentNode.nodeName,
            NbChild:        CurrentNode.children.length,
            // contenu à mettre dans la case
            texte:          texte //monObject.tags[CurrentNode.nodeName].contenu// + CurrentNode.id + '<br> i:' + o + ',width:' + width+ '<br> childs:'+CurrentNode.children.length
    }) 
    return  width;                   
};   
// Methods --------------------------- A CLEAN + --------------------------------------
monObject.RemakeBody = function(domdubody) { 


    for (let i = 0; i < domdubody.length; i++) {
        let margex = ((domdubody[i].x/MePage.cs_x)*MePage.marge)
        let margey = ((domdubody[i].y/MePage.cs_y)*MePage.marge)

        // div en absolute dans le div DivSolo qui est en display:inline-block
        let DivSolo = document.createElement('div')
        DivSolo.id = 'Arbol_item' + '_' + i
        DivSolo.myownid = i
        DivSolo.className = 'Arbol_item'
        DivSolo.style.left =  margex + MePage.mx + domdubody[i].x + 'px'
        DivSolo.style.top =  margey + MePage.my + domdubody[i].y + 'px'
        // ---------------------------------------------------------
        let DivPopup = document.createElement('div')   
        DivPopup.id = 'Arbol_popup' + '_' + i
        DivPopup.className = 'Arbol_popup'
        DivPopup.style.backgroundColor = domdubody[i].BgColor
        // DivPopup.style.color = SwitchType(xtext)['fontcolor']
        // DivPopup.innerHTML = '#'+i+' ' + domdubody[i].NodeName + '<br>' + domdubody[i].texte
        DivPopup.innerHTML = domdubody[i].texte
        DivSolo.appendChild(DivPopup)
        document.querySelector('#TreeDiv').appendChild(DivSolo)
    }
};
// ✔️ BIEN CLEAN DEJA (ne me reste plus qu'a etre vraiment sur de comprendre comment ça marche ;)  
const tools = {
    splitMeWell: function(str ='') {
        var tmp = str.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1);
        var cssProp = '';
        for (let i = 1;i < tmp.length; i++)
            cssProp += tmp[i];
        
        let result = [tmp[0], cssProp];
            
        return result;
    },
    injection: function(item, elt) {
                
        if (elt != undefined) {
            let itemKeys = Object.keys(item);
            for (let i=0; i < itemKeys.length;i++) {
                let key = itemKeys[i]
                let eltKeys = tools.splitMeWell(key);
                //console.log(key, eltKeys, item[key])
                if (eltKeys[0] == 'class') {
                    elt.classList.add(item[key]); 
                }
                else {
                    let eltProp = eltKeys[0];
                    let cssProp = eltKeys[1].charAt(0).toLowerCase() + eltKeys[1].slice(1);
                    elt[eltProp][cssProp] = item[key]; 
                }
            }
            return elt; 
        }
        else
            return elt;
    }
    // MERCI -> Loran & https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters/7888303#7888303
};

// ----------------------------------------------- A MIEUX TRIER +
const arbolTreeVar = {
    ArbolTreeW: 100, // en %
    ArbolTreeH: 100, // en vh
    ArbolTree_bgcolor:'rgba(255,255,255,.5)', // par exemple
    TreeDivH: 90, // en vh
    TreeDivW: 80,// en %
    TreeDivPadding: 0,
    TreeDivMargin: 2, 
    TreeDiv_bgcolor:'rgba(255,255,255,.5)' // par exemple
};
const arbolTreeData = {
    styleDisplay: 'flex',
    stylePosition: 'fixed',
    styleHeight: arbolTreeVar.ArbolTreeH + 'vh',
    styleWidth: arbolTreeVar.ArbolTreeW + '%',
    styleJustifyContent: 'center',
    styleAlignItems: 'center',
    styleBackgroundColor: arbolTreeVar.ArbolTree_bgcolor
}
const treeDiv = {
    styleFlexDirection: 'column',
    styleDisplay: 'flex',
    stylePosition: 'relative',
    styleDisplay: 'inline-block',
    styleOverflow: 'auto',
    styleWidth: arbolTreeVar.TreeDivW + '%',
    styleHeight: arbolTreeVar.TreeDivH + 'vh',
    stylePadding: arbolTreeVar.TreeDivPadding,
    styleMargin: arbolTreeVar.TreeDivMargin,
    styleBackgroundColor: arbolTreeVar.TreeDiv_bgcolor,
    styleJustifyContent: 'top',
    styleOutline: '1px solid #000',
    styleAlignItems: 'center'
}
// ----------------------------------------------- REDUIRE +
monObject.injectionhtml = function(unpaquet='') {
    let killerdiv = document.querySelector('ArbolTree')
    if (killerdiv) killerdiv.remove()
    
    var ArbolTree = document.createElement('div') // div surcouche dans le quel on mettra le cadre
    ArbolTree.id = 'ArbolTree'
        tools.injection(arbolTreeData,ArbolTree);

    var TreeDiv = document.createElement('div')
    TreeDiv.id = 'TreeDiv'
    tools.injection(treeDiv,TreeDiv);
    
    ArbolTree.prepend(TreeDiv) 
    return ArbolTree 
}
// ----------------------------------------------- A MIEUX TRIER +
const charte = {
    rooturl: '',
    imageurl: '',
    fullscreenimg: 'fullscreen.svg',
    normalscreenimg: 'normalscreen.svg',
    logo: 'treeup.svg',
    logoW: '64', // px
    logoH: '64', // px
    logoAlt: "Image d'un arbre tête en bas",
    //fullscreen
    fstimehover: .4,
    fullscreenimg: 'fullscreen.svg',
    normalscreenimg: 'normalscreen.svg',
    titleoff: 'Mode Plein écran',
    titleon: 'Mode normal',
    fssize: '25', // px
    fsratio: 1.5,
    Hoverbuttonsize: 1.5,
    FSclass: 'fullscreenbutton',
    //footer
    footerH:25,
    footerid: 'footer',
    footerclass: 'Arbol_footer',
    inputid: 'urlArbol',
    inputclass: 'urlinput',
    placeholder: 'index.html',
    // inputdefaultvalue: window.location.pathname,
    inputdefaultvalue: window.location.href,
    submitid: 'SubArbol',
    submitclass: 'subinput',
    submitinner: 'GET',
    oanclass: 'Arbol_oan',
    touclass: 'Arbol_tou',
    // Cases
    poptimehover: .3,
    RatioTypo: '10',        // taille texte au survol
    RatioTypoHover: '7',    // taille texte au survol rappor au ratio
    rationhovercases: 1.8,  // ratio taille de la case au survol
    pop_bgcolor: 'rgba(255,255,255, 0.60)',
    transp: '0.8',
    CellBorder: 0,
    CellBorderHover: 2,
    CellBorderRadius: 12,

    // css
    z_index: 12 // max ?
}
// ----------------------------------------------- TRIER, REDUIRE +
monObject.InjectionCss = function() {
      
    let Moncss = document.createElement('style')                                                                                        // methode css dans le header !
    Moncss.type = 'text/css'  
        let css =  '#ArtbolTree{z-index:'+charte.z_index+';}'      // je voulais pas me prendre la tete avec les events addEventListener ;(
            css += '.Arbol_item{position:absolute;width:'+MePage.cs_x+'px;height:'+MePage.cs_y+'px;}'
            css += '.Arbol_popup{display:flex;justify-content:center;text-align:center;align-items:top;cursor:pointer;'
                css += 'overflow:hidden;'
                css += 'width:'+(MePage.cs_x-(charte.CellBorder*2))+'px;height:'+(MePage.cs_x-(charte.CellBorder*2))+'px;'
                css += 'font-size:'+charte.RatioTypo+'px}'
            css += '.Arbol_popup:hover{z-index:'+(charte.z_index+1)+';'
                css += 'transition: '+charte.poptimehover+'s cubic-bezier(0, 0, 0, '+charte.rationhovercases+');transform: scale(2.5);align-text:center;'
                css += 'overflow:auto;'
                css += 'justify-content:center;text-align:center;align-items:center;'
                css += 'border-radius:'+charte.CellBorderRadius+';'
                css += 'font-size:'+charte.RatioTypoHover+'px;'
                css += 'border:'+charte.CellBorderHover+'px solid '+charte.pop_bgcolor+';}'
            //
            css += '.'+charte.FSclass+'{background-size:cover;position:absolute;top:0;right:0;width:'+charte.fssize+'px;height:'+charte.fssize+'px;}'//;background-color:rgba(0,0,255,.5);}'
            css += '.'+charte.FSclass+':hover{transition: '+charte.fstimehover+'s cubic-bezier(0, 0, 0, '+charte.fsratio+');width:'+(charte.fssize * charte.fsratio)+'px;height:'+(charte.fssize * charte.fsratio)+'px;}'
            //
            css += '.'+charte.footerclass+'{position:absolute;bottom:0;border:1px solid #black;display:flex;flex-wrap:wrap;flex-direction:rows;justify-content:space-between;align-items:center;align-content: center;width:100%;height:60px;background-color:rgba(0,0,0,.5);}'
            css += '.'+charte.oanclass+'{margin-left:5px;width:'+charte.footerH+'px;height:'+charte.footerH+'px;background-image: url('+charte.logo+');background-position:center center;background-size: cover;}'//;background-color:rgba(255,0,0,.5);}'
            css += '.'+charte.touclass+'{width:calc(100% - 35px);margin-right:5px;font-size:15px;line-height:15px;height:'+charte.footerH+'px;display:flex;justify-content:right;}'//;background-color:rgba(0,255,0,.5);}'
            css += '.'+charte.inputclass+'{margin:0;padding:0;margin-left:10px;min-width:calc(100% - 50px);max-width:calc(100% - 25px);color:rgba(0,0,0,.7);font-family:Arial;border:0;padding-left:.5rem;font-weight:600;font-size:14px;line-height:15px;border-radius:9px 0 0 9px;background-color:rgba(200,200,255,.8);}'
            css += '.'+charte.submitclass+'{width:25px;color:white;padding-right:.5rem;padding-left:.5rem;font-weight:600;font-size:14px;line-height:15px;border-radius:0 9px 9px 0;display:flex;flex-direction:rows;justify-content:center;align-items:center;background-color:rgba(0,200,0,.5);cursor:not-allowed;}'//;background-color:rgba(0,0,255,.5);}'
               
    Moncss.innerHTML += css
    //document.head.appendChild(Moncss) 
    return Moncss
}
// ----------------------------------------------- TRIER, REDUIRE +
monObject.InjectionFooter = function() {
    
    var FooterDiv = document.createElement('div')                                                      // un footer ?
    FooterDiv.id = charte.footerid
    FooterDiv.className = charte.footerclass

    // --------------------------------------------------------- -------------------------------------------------- -------------------------------------------------------/
    var inputfooter = document.createElement('input')                      // un input pour faire le input logique ?
    inputfooter.id = charte.inputid
    inputfooter.className = charte.inputclass
    inputfooter.placeholder = charte.placeholder
    //inputfooter.value = window.location.pathname
    inputfooter.value = charte.inputdefaultvalue
    // --------------------------------------------------------- -------------------------------------------------- -------------------------------------------------------/
    var submitfooter = document.createElement('div')                                 // un div pour fair le submit ?
    //submitfooter.type = 'submit'
    submitfooter.id = charte.submitid
    submitfooter.className = charte.submitclass
    submitfooter.innerHTML = charte.submitinner
    submitfooter.addEventListener(
        'click',
        function soumission(e){
            var FormUrlInput = document.querySelector('#'+charte.inputid)
            console.log(charte.inputid)
            // patch secu needed to reg(FormUrlInput)
            if (FormUrlInput.value && FormUrlInput.value!='') {
                console.log('Go xhr avec : ' + FormUrlInput.value)
                var xhr = new XMLHttpRequest();
                xhr.open('GET', FormUrlInput.value, true);
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // << rajout
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                            switch(xhr.status) {
                            case 200 :
                                    console.log('ok Le fichier existe !')
                                    console.groupCollapsed('>xhr.responseText')
                                    console.log(xhr.responseText)
                                    console.log(xhr.response)
                                    console.groupEnd()
                                    // STOP ICI
                                    //console.log(xhr.responseText[0])









                                var objdOm = JSON.parse(xhr.responseText) // << bug
                                var zeBody= objdOm.body
                                var NewBody = zeBody.children
                                // Merci -> https://www.xul.fr/ajax/responseHTML.txt
                                // je creuse https://stackoverflow.com/questions/24546483/how-to-get-data-field-from-xhr-responsetext
                                // je creuse https://stackoverflow.com/questions/56694946/how-can-i-parse-an-html-response-text-of-an-xmlhttprequest-using-js
                                // je creuse https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/response

                                //  encore https://expressjs.com/en/resources/middleware/body-parser.html
                                // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse
                                // https://stackoverflow.com/questions/24202628/parsing-json-response-to-get-body-from-html
                            break;
                            case 404 :
                                console.log('404 ! Sans dec...')
                            break;
                            case 402 :
                                console.log("Y'a un truc louche !")
                            break;
                        }
                    } else {
                        console.log("je retente...")
                    }
                };
                xhr.send(null);
            }else{
                console.log('bug : ' + FormUrlInput.ATTRIBUTE_NODE)
            }


            
        }//,{once:true}
    )
    var oan = document.createElement('div') 
    var tou = document.createElement('div')
    oan.className = charte.oanclass
    tou.className = charte.touclass
    tou.appendChild(inputfooter)
    tou.appendChild(submitfooter)
    FooterDiv.appendChild(oan)
    FooterDiv.appendChild(tou)
    document.querySelector('#TreeDiv').appendChild(FooterDiv) 
}
// ----------------------------------------------- TRIER, REDUIRE +
monObject.InjectionFullScreen = function() {    
    var fullsc = document.createElement('div') // FULLSCREEN BUTTON ?
    fullsc.id = 'fullscreen'
    fullsc.className = 'fullscreenbutton'
    fullsc.innerHTML = ''
    fullsc.style.backgroundImage = "url('"+charte.fullscreenimg+"')"
    fullsc.title = charte.titleoff
    fullsc.addEventListener(
        'click',
        function fullscreen(e){
            let Skreen = document.querySelector('#TreeDiv')
            if (!Skreen.activated) {
                // on passe en full screen
                Skreen.style.width = '100%'
                Skreen.style.height = '100%'
                Skreen.activated = true
                fullsc.style.backgroundImage = "url('"+charte.normalscreenimg+"')"
                fullsc.title = charte.titleon
            } else {
                // on passe en normal
                Skreen.style.width = arbolTreeVar.TreeDivW + '%'
                Skreen.style.height = arbolTreeVar.TreeDivH + 'vh'
                Skreen.activated = false
                fullsc.style.backgroundImage = "url('"+charte.fullscreenimg+"')"
                fullsc.title = charte.titleoff
            }
        }//,{once:true}
    )
    document.querySelector('#TreeDiv').appendChild(fullsc) 
}
// couleurs par tag
monObject.tags = {
    DIV:        {type: 'div',bgcolor:'rgba(70,185,-58,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'div',bgcolor:'rgba(185,70,313,'+charte.transp+')'},
    H1:         {type: 'h1',bgcolor:'rgba(255,0,255,.5)',color:'rgba(0,0,255,.5)',contenu: 'h1',bgcolor:'rgba(253,3,380,'+charte.transp+')'},
    H2:         {type: 'h2',bgcolor:'rgba(0,255,255,.5)',color: 'rgba(0,0,255,.5)',contenu: 'h2',bgcolor:'rgba(253,3,380,'+charte.transp+')'},
    H3:         {type: 'h3',bgcolor:'rgba(255,255,0,.5)',color: 'rgba(0,0,255,.5)',contenu: 'h3',bgcolor:'rgba(253,3,380,'+charte.transp+')'},
    H4:         {type: 'h4',bgcolor:'rgba(255,100,100,.5)',color: 'rgba(0,0,255,.5)',contenu: 'h4',bgcolor:'rgba(253,3,380,'+charte.transp+')'},
    H5:         {type: 'h5',bgcolor:'rgba(100,100,255,.5)',color: 'rgba(0,0,255,.5)',contenu: 'h5',bgcolor:'rgba(253,3,380,'+charte.transp+')'},
    A:          {type: 'a',bgcolor:'rgba(2,252,-125,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'a',bgcolor:'rgba(253,3,380,'+charte.transp+')'},
    ABBR:       {type: 'abbr',bgcolor:'rgba(5,250,132,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'abbr',bgcolor:'rgba(250,5,123,'+charte.transp+')'},
    ADDRESS:    {type: 'address',bgcolor:'rgba(7,247,135,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'address',bgcolor:'rgba(248,8,120,'+charte.transp+')'},
    AREA:       {type: 'area',bgcolor:'rgba(10,245,137,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'area',bgcolor:'rgba(245,10,118,'+charte.transp+')'},
    ARTICLE:    {type: 'article',bgcolor:'rgba(12,242,140,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'article<br>new',bgcolor:'rgba(243,13,115,'+charte.transp+')'},
    ASIDE:      {type: 'aside',bgcolor:'rgba(15,240,142,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'aside<br>new',bgcolor:'rgba(240,15,113,'+charte.transp+')'},
    AUDIO:      {type: 'audio',bgcolor:'rgba(17,237,145,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'audio<br>new',bgcolor:'rgba(238,18,110,'+charte.transp+')'},
    B:          {type: 'b',bgcolor:'rgba(20,235,-108,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'b',bgcolor:'rgba(235,20,363,'+charte.transp+')'},
    BASE:       {type: 'base',bgcolor:'rgba(22,232,-105,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'base',bgcolor:'rgba(233,23,360,'+charte.transp+')'},
    BDO:        {type: 'bdo',bgcolor:'rgba(25,230,-103,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'bdo',bgcolor:'rgba(230,25,358,'+charte.transp+')'},
    BLOCKQUOTE: {type: 'blockquote',bgcolor:'rgba(27,227,155,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'blockquote',bgcolor:'rgba(228,28,100,'+charte.transp+')'},
    BODY:       {type: 'body',bgcolor:'rgba(30,225,157,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'body',bgcolor:'rgba(225,30,98,'+charte.transp+')'},
    BR:         {type: 'br',bgcolor:'rgba(35,220,-93,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'br',bgcolor:'rgba(220,35,348,'+charte.transp+')'},
    BUTTON:     {type: 'button',bgcolor:'rgba(37,217,165,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'button',bgcolor:'rgba(218,38,90,'+charte.transp+')'},
    CANVAS:     {type: 'canvas',bgcolor:'rgba(40,215,167,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'canvas<br>new',bgcolor:'rgba(215,40,88,'+charte.transp+')'},
    CAPTION:    {type: 'caption',bgcolor:'rgba(42,212,170,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'caption',bgcolor:'rgba(213,43,85,'+charte.transp+')'},
    CITE:       {type: 'cite',bgcolor:'rgba(45,210,-83,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'cite',bgcolor:'rgba(210,45,338,'+charte.transp+')'},
    CODE:       {type: 'code',bgcolor:'rgba(47,207,-80,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'code',bgcolor:'rgba(208,48,335,'+charte.transp+')'},
    COL:        {type: 'col',bgcolor:'rgba(50,205,-78,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'col',bgcolor:'rgba(205,50,333,'+charte.transp+')'},
    COLGROUP:   {type: 'colgroup',bgcolor:'rgba(52,202,180,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'colgroup',bgcolor:'rgba(203,53,75,'+charte.transp+')'},
    COMMAND:    {type: 'command',bgcolor:'rgba(55,200,182,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'command<br>new',bgcolor:'rgba(200,55,73,'+charte.transp+')'},
    DATALIST:   {type: 'datalist',bgcolor:'rgba(57,197,185,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'datalist<br>new',bgcolor:'rgba(198,58,70,'+charte.transp+')'},
    DD:         {type: 'dd',bgcolor:'rgba(60,195,-68,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'dd',bgcolor:'rgba(195,60,323,'+charte.transp+')'},
    DEL:        {type: 'del',bgcolor:'rgba(62,192,-65,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'del',bgcolor:'rgba(193,63,320,'+charte.transp+')'},
    DETAILS:    {type: 'details',bgcolor:'rgba(65,190,192,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'details<br>new',bgcolor:'rgba(190,65,63,'+charte.transp+')'},
    DFN:        {type: 'dfn',bgcolor:'rgba(67,187,-60,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'dfn',bgcolor:'rgba(188,68,315,'+charte.transp+')'},
    DL:         {type: 'dl',bgcolor:'rgba(72,182,-55,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'dl',bgcolor:'rgba(183,73,310,'+charte.transp+')'},
    DT:         {type: 'dt',bgcolor:'rgba(75,180,-53,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'dt',bgcolor:'rgba(180,75,308,'+charte.transp+')'},
    EM:         {type: 'em',bgcolor:'rgba(77,177,-50,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'em',bgcolor:'rgba(178,78,305,'+charte.transp+')'},
    EMBED:      {type: 'embed',bgcolor:'rgba(80,175,207,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'embed<br>new',bgcolor:'rgba(175,80,48,'+charte.transp+')'},
    FIELDSET:   {type: 'fieldset',bgcolor:'rgba(82,172,210,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'fieldset',bgcolor:'rgba(173,83,45,'+charte.transp+')'},
    FIGCAPTION: {type: 'figcaption',bgcolor:'rgba(85,170,212,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'figcaption<br>new',bgcolor:'rgba(170,85,43,'+charte.transp+')'},
    FIGURE:     {type: 'figure',bgcolor:'rgba(87,167,215,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'figure<br>new',bgcolor:'rgba(168,88,40,'+charte.transp+')'},
    FOOTER:     {type: 'footer',bgcolor:'rgba(90,165,217,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'footer<br>new',bgcolor:'rgba(165,90,38,'+charte.transp+')'},
    FORM:       {type: 'form',bgcolor:'rgba(92,162,-35,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'form',bgcolor:'rgba(163,93,290,'+charte.transp+')'},
    HEAD:       {type: 'head',bgcolor:'rgba(95,160,-33,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'head',bgcolor:'rgba(160,95,288,'+charte.transp+')'},
    HEADER:     {type: 'header',bgcolor:'rgba(97,157,225,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'header<br>new',bgcolor:'rgba(158,98,30,'+charte.transp+')'},
    HGROUP:     {type: 'hgroup',bgcolor:'rgba(100,155,227,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'hgroup<br>new',bgcolor:'rgba(155,100,28,'+charte.transp+')'},
    HR:         {type: 'hr',bgcolor:'rgba(102,152,-25,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'hr',bgcolor:'rgba(153,103,280,'+charte.transp+')'},
    HTML:       {type: 'html',bgcolor:'rgba(105,150,-23,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'html',bgcolor:'rgba(150,105,278,'+charte.transp+')'},
    I:          {type: 'i',bgcolor:'rgba(107,147,-20,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'i',bgcolor:'rgba(148,108,275,'+charte.transp+')'},
    IFRAME:     {type: 'iframe',bgcolor:'rgba(110,145,237,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'iframe',bgcolor:'rgba(145,110,18,'+charte.transp+')'},
    IMG:        {type: 'img',bgcolor:'rgba(112,142,-15,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'img',bgcolor:'rgba(143,113,270,'+charte.transp+')'},
    INPUT:      {type: 'input',bgcolor:'rgba(115,140,242,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'input',bgcolor:'rgba(140,115,13,'+charte.transp+')'},
    INS:        {type: 'ins',bgcolor:'rgba(117,137,-10,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'ins',bgcolor:'rgba(138,118,265,'+charte.transp+')'},
    KBD:        {type: 'kbd',bgcolor:'rgba(120,135,-8,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'kbd',bgcolor:'rgba(135,120,263,'+charte.transp+')'},
    KEYGEN:     {type: 'keygen',bgcolor:'rgba(122,132,250,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'keygen<br>new',bgcolor:'rgba(133,123,5,'+charte.transp+')'},
    LABEL:      {type: 'label',bgcolor:'rgba(125,130,252,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'label',bgcolor:'rgba(130,125,3,'+charte.transp+')'},
    LEGEND:     {type: 'legend',bgcolor:'rgba(127,127,255,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'legend',bgcolor:'rgba(128,128,0,'+charte.transp+')'},
    LI:         {type: 'li',bgcolor:'rgba(130,125,2,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'li',bgcolor:'rgba(125,130,253,'+charte.transp+')'},
    LINK:       {type: 'link',bgcolor:'rgba(132,122,5,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'link',bgcolor:'rgba(123,133,250,'+charte.transp+')'},
    MAP:        {type: 'map',bgcolor:'rgba(135,120,7,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'map',bgcolor:'rgba(120,135,248,'+charte.transp+')'},
    MARK:       {type: 'mark',bgcolor:'rgba(137,117,10,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'mark<br>new',bgcolor:'rgba(118,138,245,'+charte.transp+')'},
    MATH:       {type: 'math',bgcolor:'rgba(140,115,12,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'math<br>new',bgcolor:'rgba(115,140,243,'+charte.transp+')'},
    MENU:       {type: 'menu',bgcolor:'rgba(142,112,15,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'menu',bgcolor:'rgba(113,143,240,'+charte.transp+')'},
    META:       {type: 'meta',bgcolor:'rgba(145,110,17,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'meta',bgcolor:'rgba(110,145,238,'+charte.transp+')'},
    METER:      {type: 'meter',bgcolor:'rgba(147,107,275,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'meter<br>new',bgcolor:'rgba(108,148,-20,'+charte.transp+')'},
    NAV:        {type: 'nav',bgcolor:'rgba(150,105,22,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'nav<br>new',bgcolor:'rgba(105,150,233,'+charte.transp+')'},
    NOSCRIPT:   {type: 'noscript',bgcolor:'rgba(152,102,280,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'noscript',bgcolor:'rgba(103,153,-25,'+charte.transp+')'},
    OBJECT:     {type: 'object',bgcolor:'rgba(155,100,282,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'object',bgcolor:'rgba(100,155,-27,'+charte.transp+')'},
    OL:         {type: 'ol',bgcolor:'rgba(157,97,30,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'ol',bgcolor:'rgba(98,158,225,'+charte.transp+')'},
    OPTGROUP:   {type: 'optgroup',bgcolor:'rgba(160,95,287,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'optgroup',bgcolor:'rgba(95,160,-32,'+charte.transp+')'},
    OPTION:     {type: 'option',bgcolor:'rgba(162,92,290,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'option',bgcolor:'rgba(93,163,-35,'+charte.transp+')'},
    OUTPUT:     {type: 'output',bgcolor:'rgba(165,90,292,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'output<br>new',bgcolor:'rgba(90,165,-37,'+charte.transp+')'},
    P:          {type: 'p',bgcolor:'rgba(167,87,40,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'p',bgcolor:'rgba(88,168,215,'+charte.transp+')'},
    PARAM:      {type: 'param',bgcolor:'rgba(170,85,297,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'param',bgcolor:'rgba(85,170,-42,'+charte.transp+')'},
    PRE:        {type: 'pre',bgcolor:'rgba(172,82,45,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'pre',bgcolor:'rgba(83,173,210,'+charte.transp+')'},
    PROGRESS:   {type: 'progress',bgcolor:'rgba(175,80,302,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'progress<br>new',bgcolor:'rgba(80,175,-47,'+charte.transp+')'},
    Q:          {type: 'q',bgcolor:'rgba(177,77,50,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'q',bgcolor:'rgba(78,178,205,'+charte.transp+')'},
    RP:         {type: 'rp',bgcolor:'rgba(180,75,52,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'rp<br>new',bgcolor:'rgba(75,180,203,'+charte.transp+')'},
    RT:         {type: 'rt',bgcolor:'rgba(182,72,55,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'rt<br>new',bgcolor:'rgba(73,183,200,'+charte.transp+')'},
    RUBY:       {type: 'ruby',bgcolor:'rgba(185,70,57,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'ruby<br>new',bgcolor:'rgba(70,185,198,'+charte.transp+')'},
    SAMP:       {type: 'samp',bgcolor:'rgba(187,67,60,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'samp',bgcolor:'rgba(68,188,195,'+charte.transp+')'},
    SCRIPT:     {type: 'script',bgcolor:'rgba(190,65,317,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'script',bgcolor:'rgba(65,190,-62,'+charte.transp+')'},
    SECTION:    {type: 'section',bgcolor:'rgba(192,62,320,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'section<br>new',bgcolor:'rgba(63,193,-65,'+charte.transp+')'},
    SELECT:     {type: 'select',bgcolor:'rgba(195,60,322,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'select',bgcolor:'rgba(60,195,-67,'+charte.transp+')'},
    SMALL:      {type: 'small',bgcolor:'rgba(197,57,325,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'small',bgcolor:'rgba(58,198,-70,'+charte.transp+')'},
    SOURCE:     {type: 'source',bgcolor:'rgba(200,55,327,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'source<br>new',bgcolor:'rgba(55,200,-72,'+charte.transp+')'},
    SPAN:       {type: 'span',bgcolor:'rgba(202,52,75,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'span',bgcolor:'rgba(53,203,180,'+charte.transp+')'},
    STRONG:     {type: 'strong',bgcolor:'rgba(205,50,332,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'strong',bgcolor:'rgba(50,205,-77,'+charte.transp+')'},
    STYLE:      {type: 'style',bgcolor:'rgba(207,47,335,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'style',bgcolor:'rgba(48,208,-80,'+charte.transp+')'},
    SUB:        {type: 'sub',bgcolor:'rgba(210,45,82,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'sub',bgcolor:'rgba(45,210,173,'+charte.transp+')'},
    SUMMARY:    {type: 'summary',bgcolor:'rgba(212,42,340,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'summary<br>new',bgcolor:'rgba(43,213,-85,'+charte.transp+')'},
    SUP:        {type: 'sup',bgcolor:'rgba(215,40,87,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'sup',bgcolor:'rgba(40,215,168,'+charte.transp+')'},
    SVG:        {type: 'svg',bgcolor:'rgba(217,37,90,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'svg<br>new',bgcolor:'rgba(38,218,165,'+charte.transp+')'},
    TABLE:      {type: 'table',bgcolor:'rgba(220,35,347,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'table',bgcolor:'rgba(35,220,-92,'+charte.transp+')'},
    TBODY:      {type: 'tbody',bgcolor:'rgba(222,32,350,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'tbody',bgcolor:'rgba(33,223,-95,'+charte.transp+')'},
    TD:         {type: 'td',bgcolor:'rgba(225,30,97,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'td',bgcolor:'rgba(30,225,158,'+charte.transp+')'},
    TEXTAREA:   {type: 'textarea',bgcolor:'rgba(227,27,355,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'textarea',bgcolor:'rgba(28,228,-100,'+charte.transp+')'},
    TFOOT:      {type: 'tfoot',bgcolor:'rgba(230,25,357,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'tfoot',bgcolor:'rgba(25,230,-102,'+charte.transp+')'},
    TH:         {type: 'th',bgcolor:'rgba(232,22,105,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'th',bgcolor:'rgba(23,233,150,'+charte.transp+')'},
    THEAD:      {type: 'thead',bgcolor:'rgba(235,20,362,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'thead',bgcolor:'rgba(20,235,-107,'+charte.transp+')'},
    TIME:       {type: 'time',bgcolor:'rgba(237,17,110,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'time<br>new',bgcolor:'rgba(18,238,145,'+charte.transp+')'},
    TITLE:      {type: 'title',bgcolor:'rgba(240,15,367,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'title',bgcolor:'rgba(15,240,-112,'+charte.transp+')'},
    TR:         {type: 'tr',bgcolor:'rgba(242,12,115,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'tr',bgcolor:'rgba(13,243,140,'+charte.transp+')'},
    TRACK:      {type: 'track',bgcolor:'rgba(245,10,372,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'track<br>new',bgcolor:'rgba(10,245,-117,'+charte.transp+')'},
    UL:         {type: 'ul',bgcolor:'rgba(247,7,120,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'ul',bgcolor:'rgba(8,248,135,'+charte.transp+')'},
    VAR:        {type: 'var',bgcolor:'rgba(250,5,122,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'var',bgcolor:'rgba(5,250,133,'+charte.transp+')'},
    VIDEO:      {type: 'video',bgcolor:'rgba(252,2,380,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'video<br>new',bgcolor:'rgba(3,253,-125,'+charte.transp+')'},
    WBR:        {type: 'wbr',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'wbr<br>new',bgcolor:'rgba(0,255,128,'+charte.transp+')'}
}
