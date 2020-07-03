//https://developer.mozilla.org/fr/docs/Web/HTML/Element
//A lot missing
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
    WBR:        {type: 'wbr',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'wbr<br>new',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    CENTER:     {type: 'center',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'center',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    svg:        {type: 'svg',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'svg',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    //google.fr
    'G-LOADING-ICON':       {type: 'G-LOADING-ICON',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'G-LOADING-ICON',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    'G-DIALOG':             {type: 'G-DIALOG',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'G-DIALOG',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    'G-FLAT-BUTTON':        {type: 'G-FLAT-BUTTON',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'G-FLAT-BUTTON',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    'G-RAISED-BUTTON':      {type: 'G-RAISED-BUTTON',bgcolor:'rgba(255,0,127,'+charte.transp+')',color:'rgba(0,0,255,.5)',contenu:'G-RAISED-BUTTON',bgcolor:'rgba(0,255,128,'+charte.transp+')'},
    path:                   {type: 'path',bgcolor:'rgba(0,0,0,'+charte.transp+')',color:'rgba(255,255,255,.5)',contenu:'path',bgcolor:'rgba(0,255,128,'+charte.transp+')'}
}