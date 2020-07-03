"use strict";
const tools = {
    splitMeWell: function(str ='') {
        // THX -> https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters/7888303#7888303
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
};