
// ----------------------------------------------- TRIER, REDUIRE +
monObject.injectionhtml = function() {
    var ArbolTree = document.createElement('div')                           // div surcouche 
    ArbolTree.id = 'ArbolTree'
    var TreeDiv = document.createElement('div')                             // div en inline-block
    TreeDiv.id = 'TreeDiv'
    tools.injection(arbolTreeData,ArbolTree);                               // j'inject un div avec les attributs stockés dans arbolTreeData dans le div 'ArbolTree' 
    tools.injection(treeDiv,TreeDiv);                                       // j'inject un div avec les attributs stockés dans treeDiv dans le div 'TreeDiv' 
    ArbolTree.prepend(TreeDiv)                                              // Je met tous dans 'ArbolTree' avant de le return
    return ArbolTree 
}
// ----------------------------------------------- REDUIRE +
monObject.InjectionFooter = function() {
    var FooterDiv = document.createElement('div')                           // un footer ?
    FooterDiv.id = charte.footerid
    FooterDiv.className = charte.footerclass

    // ---------------------------------------------------------
    var inputfooter = document.createElement('input')                      // un input pour faire le input logique ?
    inputfooter.id = charte.inputid
    inputfooter.className = charte.inputclass
    inputfooter.placeholder = charte.placeholder
    inputfooter.value = monObject.mydata.urlinput
    // ---------------------------------------------------------
    var submitfooter = document.createElement('div')                                 // un div pour fair le submit ?
    //submitfooter.type = 'submit'
    submitfooter.id = charte.submitid
    submitfooter.className = charte.submitclass
    submitfooter.innerHTML = charte.submitinner
    submitfooter.addEventListener(
        'click',
        function soumission(e){
            var FormUrlInput = document.querySelector('#'+charte.inputid)
            // if (CL) console.log(charte.inputid)
            // patch secu needed to reg(FormUrlInput)
            if (FormUrlInput.value && FormUrlInput.value!='') {
                console.log('Go xhr avec : ' + FormUrlInput.value)
                var xhr = new XMLHttpRequest()
                
                xhr.open('GET', FormUrlInput.value, true);
                //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // << rajout
                
                if ('withCredentials' in xhr) {
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == 4) {
                                switch(xhr.status) {
                                case 200 :



                                        if (CL) console.log('ok !')    
                                        monObject.mydata.urlinput = FormUrlInput.value                                
                                        monObject.clear() // si le div existe on le vire
                                        // BIG THX -> Rémi (Pour la Horde !)
                                        monObject.mydata.mescases = []
                                        const maVar = new DOMParser().parseFromString(xhr.responseText, "text/html");
                                        // BIG THX -> Rémi : XMLHttpRequest.responseType = document;
                                        // innerHTML work but node was a real mess
                                        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
                                        
                                        monObject.Arbol = maVar.body
                                        monObject.ParsingBody(0,monObject.Arbol,0,0);
                                        // document.head.prepend(monObject.InjectionCss())
                                    // document.body.prepend(monObject.injectionhtml())

                                        monObject.RemakeBody(monObject.mydata.mescases)
                                        //monObject.InjectionFullScreen()

                                        monObject.InjectionFooter()
                                        monObject.mydata.CleardBody = true
                                        console.log('charte.max_x:'+charte.max_x)



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
                    }
                };
                xhr.send();
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
    // document.querySelector('#TreeDiv').appendChild(FooterDiv) 
    document.body.prepend(FooterDiv) 
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
            Skreen.activated = true
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