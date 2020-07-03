
monObject.ParsingBody = function(o, CurrentNode, x, y) {
    // BIG BIG THX -> LordGrrr
    let data = monObject.mydata;
    let width = 0;

    for (let i = 0; i < CurrentNode.children.length; i++) {
        width += this.ParsingBody(i,CurrentNode.children[i],x+width, y + 1)
    }

    if (CurrentNode.children.length == 0) { width = 1; }
    if (CL) console.log(CurrentNode.nodeName)


    // A METTRE DEHORS - Pour remplir la case d'info
    let TagContent = ''
        //TagContent += '<br>' + CurrentNode.id
        //TagContent += '<br>' + 'o:' + o + ',w:' + width
        // if (CurrentNode.children.length>0)
        //     {TagContent += '<br>' + CurrentNode.children.length +' childs'}
        // else {TagContent += '<br>' + 'No childs !'}
    //if (CL) console.log(CurrentNode.nodeName)
        // TagContent += '<br>' + '[' + monObject.tags[CurrentNode.nodeName].contenu + ']'
    let morecontent=''
        // if (CurrentNode.nodeName == 'IMG') {morecontent='<br>'+CurrentNode.src +''}
        // if (CurrentNode.nodeName == 'H1') {morecontent='<br>'+CurrentNode.texte +''}
        // if (CurrentNode.nodeName == 'A') {morecontent='<br>'+CurrentNode+''}
    // --------------------------------------------------------

    data.mescases.push({   
            // données de placement x, y & affichage
            x:              x * charte.cs_x, 
            y:              y * charte.cs_y,
            id:             data.compteur,
            BgColor:        monObject.tags[CurrentNode.nodeName].bgcolor,
            // données de retour d'info
            NodeId:         CurrentNode.id,
            NodeClassName:  CurrentNode.className,
            NodeName:       CurrentNode.nodeName,
            NbChild:        CurrentNode.children.length,
            // contenu à mettre dans la case
            texte:          TagContent+morecontent // vide
    }) 
    return  width;                   
};