"use strict";
const CL = false // If (CL) console.log
// datas for graphics 
const charte = {
    max_x:0,
    max_y:0,
    rooturl: '',
    imageurl: '',
    fullscreenimg: 'assets/img/fullscreen.svg',
    normalscreenimg: 'assets/img/normalscreen.svg',
    logo: 'assets/img/treeup.svg',
    logoW: '25', // px
    logoH: '25', // px
    logoAlt: "Image d'un arbre tête en bas",
    //fullscreen button
    fstimehover: .4,
    titleoff: 'Mode Plein écran',
    titleon: 'Mode normal',
    fssize: '25', // px
    fsratio: 1.5,
    Hoverbuttonsize: 1.5,
    FSclass: 'fullscreenbutton',
    //footer div
    footerH:30, // px
    footerid: 'footer',
    footerclass: 'Arbol_footer',
    inputid: 'urlArbol',
    inputH: 25,
    oanclassH: 25, // petit logo avant la recherche
    inputclass: 'urlinput',
    placeholder: 'index.html',
    // inputdefaultvalue: 'https://google.fr',
    // inputdefaultvalue: window.location.href,
    submitid: 'SubArbol',
    submitclass: 'subinput',
    submitinner: 'GET',
    oanclass: 'Arbol_oan',
    touclass: 'Arbol_tou',
    touclassH: 25, // en PX
    // Cases
    marge: 8,           // marge entre les cases
    cs_x: 50,           // largeur cases
    cs_y: 50,           // hauteur cases
    mx: 60,             // marge top en px
    my: 60,              // marge left en px
    poptimehover: .2,
    RatioTypo: '10',        // taille texte au survol
    RatioTypoHover: '7',    // taille texte au survol rappor au ratio
    ratiohovercases: 2,     // ratio taille de la case au survol
    bezierhovercases: 2.5,
    pop_bgcolor: 'rgba(255,255,255, 0.60)',
    transp: '0.8',
    CellBorder: 0,
    CellBorderHover: 2,
    CellBorderRadius: 12,

    // css
    z_index: 12 // max ?
}
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
// ----------------------------------------------- A MIEUX TRIER +