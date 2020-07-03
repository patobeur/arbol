"use strict";
monObject.InjectionCss = function() {
    let Moncss = document.createElement('style') 
    Moncss.type = 'text/css'  
        let css =  '#ArtbolTree{z-index:'+charte.z_index+';}'
            css += '.Arbol_item{position:absolute;width:'+charte.cs_x+'px;height:'+charte.cs_y+'px;}'
            css += '.Arbol_popup{display:flex;justify-content:center;text-align:center;align-items:center;cursor:pointer;'
                css += 'overflow:hidden;'
                css += 'width:'+(charte.cs_x-(charte.CellBorder*2))+'px;height:'+(charte.cs_x-(charte.CellBorder*2))+'px;'
                css += 'font-size:'+charte.RatioTypo+'px}'
            css += '.Arbol_popup:hover{margin:2px;margin-top:5px;margin-bottom:5px;z-index:'+(charte.z_index+1)+';'
                css += 'transition: '+charte.poptimehover+'s cubic-bezier(0, 0, 0, '+charte.bezierhovercases+');transform: scale('+charte.ratiohovercases+');align-text:center;'
                css += 'overflow:auto;'
                css += 'justify-content:center;text-align:center;align-items:center;'
                css += 'border-radius:'+charte.CellBorderRadius+';'
                css += 'font-size:'+charte.RatioTypoHover+'px;'
                css += 'border:'+charte.CellBorderHover+'px solid '+charte.pop_bgcolor+';}'
            //
            css += '.Arbol_item.lecture{background-color:rgba(0,0,0,.7);position:absolute;top:0;margin-left:auto;margin-right:auto;width:50%;height:50%;}'
            //
            css += '.'+charte.FSclass+'{background-size:cover;position:absolute;top:0;right:0;width:'+charte.fssize+'px;height:'+charte.fssize+'px;}'
                css += '.'+charte.FSclass+':hover{transition: '+charte.fstimehover+'s cubic-bezier(0, 0, 0, '+charte.fsratio+');width:'+(charte.fssize * charte.fsratio)+'px;height:'+(charte.fssize * charte.fsratio)+'px;}'
            //
            css += '.'+charte.footerclass+'{z-index:'+(charte.z_index+1)+';position:fixed;bottom:0;border:1px solid #black;display:flex;flex-wrap:wrap;flex-direction:rows;justify-content:space-between;align-items:center;align-content: center;width:100%;height:'+charte.footerH+'px;background-color:rgba(0,0,0,.5);}'
            css += '.'+charte.oanclass+'{margin-left:5px;width:25px;height:'+charte.oanclassH+'px;background-image: url('+charte.logo+');background-position:center center;background-size: cover;}'
            css += '.'+charte.touclass+'{width:calc(100% - 35px);margin-right:5px;font-size:15px;line-height:15px;height:'+charte.touclassH+'px;display:flex;justify-content:right;}'
            css += '.'+charte.inputclass+'{height:'+charte.inputH+'px;margin:0;padding:0;margin-left:10px;min-width:calc(100% - 50px);max-width:calc(100% - 25px);color:rgba(0,0,0,.7);font-family:Arial;border:0;padding-left:.5rem;font-weight:600;font-size:14px;line-height:15px;border-radius:9px 0 0 9px;background-color:rgba(200,200,255,.8);}'
            css += '.'+charte.submitclass+'{width:25px;color:white;padding-right:.5rem;padding-left:.5rem;font-weight:600;font-size:14px;line-height:15px;border-radius:0 9px 9px 0;display:flex;flex-direction:rows;justify-content:center;align-items:center;background-color:rgba(0,200,0,.5);cursor:pointer;}'

    Moncss.innerHTML += css
    //document.head.appendChild(Moncss) 
    return Moncss
}
