(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[93,4117],{"+6XX":function(e,t,r){var n=r("y1pI")
function i(e){return n(this.__data__,e)>-1}e.exports=i},"2gN3":function(e,t,r){var n=r("Kz5y")
var i=n["__core-js_shared__"]
e.exports=i},"3Fdi":function(e,t){var r=Function.prototype
var n=r.toString
function i(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}e.exports=i},"40dz":function(e,t,r){"use strict"
r.r(t)
r.d(t,"default",(function(){return T}))
var n=r("RtDj")
var i=r("HGxv")
var a=r("ouhR")
var o=r.n(a)
var s=r("q1tI")
var c=r("i8i4")
var u=r.n(c)
r("aq8L")
var l=r("mwIZ")
var d=r.n(l)
const p=e=>Object.assign({assignment:{toggleWrapperSelector:{show:".assignment-buttons",edit:".header-bar .header-bar-right .header-group-left"}[e.page],itemIdPath:{show:"ASSIGNMENT_ID",edit:"ASSIGNMENT.id"}[e.page]},quiz:{toggleWrapperSelector:{show:".header-group-left",edit:".header-bar .header-bar-right .header-group-left"}[e.page],toggleWrapperChildIndex:{edit:2}[e.page],itemIdPath:"QUIZ.id"},discussion_topic:{toggleWrapperSelector:{show:".form-inline .pull-right",edit:".discussion-edit-header .text-right"}[e.page],itemIdPath:{show:"DISCUSSION.TOPIC.ID",edit:"DISCUSSION_TOPIC.ATTRIBUTES.id"}[e.page]},wiki_page:{toggleWrapperSelector:{show:".blueprint-label"}[e.page],itemIdPath:"WIKI_PAGE.page_id"}}[e.itemType],e)
var h=p
var v=r("poaC")
r("17x9")
var g=r("L+/K")
var f=r("ZbPE")
r("r2Yr")
var m=r("wOvH")
r("tlDv")
const _=Object(i["useScope"])("blueprint_coursesLockBanner")
class b extends s["Component"]{static setupRootNode(){const e=document.createElement("div")
e.id="blueprint-lock-banner"
e.setAttribute("style","margin-bottom: 2em")
const t=document.querySelector("#content")
return t.insertBefore(e,t.firstChild)}componentDidUpdate(e){this.props.isLocked&&!e.isLocked&&o.a.screenReaderFlashMessage(_.t("%{attributes} locked",{attributes:Object(m["a"])(this.props.itemLocks)}))}render(){if(this.props.isLocked)return Object(n["a"])(g["a"],{},void 0,Object(n["a"])(f["a"],{weight:"bold",size:"small"},void 0,_.t("Locked:")," "),Object(n["a"])(f["a"],{size:"small"},void 0,Object(m["a"])(this.props.itemLocks)))
return null}}b.defaultProps={itemLocks:{content:false,points:false,settings:false,due_dates:false,availability_dates:false}}
var L=r("Xx/m")
var y=r("Zgll")
var k=r("bZJi")
var O=r("CO+y")
var j=r("6SzX")
var x=r("o/ft")
var C=r("kC3k")
var E=r("JGuX")
const w=Object(i["useScope"])("blueprint_coursesLockToggle")
const I={ADMIN_LOCKED:{label:w.t("Locked"),icon:x["a"],tooltip:w.t("Unlock"),variant:"primary"},ADMIN_UNLOCKED:{label:w.t("Blueprint"),icon:C["a"],tooltip:w.t("Lock"),variant:"default"},ADMIN_WILLUNLOCK:{label:w.t("Blueprint"),icon:C["a"],tooltip:w.t("Unlock"),variant:"default"},ADMIN_WILLLOCK:{label:w.t("Locked"),icon:x["a"],tooltip:w.t("Lock"),variant:"primary"},TEACH_LOCKED:{label:w.t("Locked"),icon:x["a"]},TEACH_UNLOCKED:{label:w.t("Blueprint"),icon:C["a"]}}
class S extends s["Component"]{static setupRootNode(e,t,r){const n=document.createElement("span")
n.className="bpc-lock-toggle-wrapper"
const i=setInterval(()=>{const a=document.querySelector(e)
if(a){clearInterval(i)
a.insertBefore(n,a.childNodes[t])
r(n)}},200)}constructor(e){super(e)
this.onEnter=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?I.ADMIN_WILLUNLOCK:I.ADMIN_WILLLOCK})}
this.onExit=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?I.ADMIN_LOCKED:I.ADMIN_UNLOCKED})}
this.state={}
this.toggleBtnRef=null
e.isToggleable?this.state.mode=e.isLocked?I.ADMIN_LOCKED:I.ADMIN_UNLOCKED:this.state.mode=e.isLocked?I.TEACH_LOCKED:I.TEACH_UNLOCKED}componentDidMount(){const e=Math.max(...Object.values(I).map(e=>e.label.length))
this.toggleBtnRef&&(this.toggleBtnRef.style.width=.845*e+"em")}render(){var e,t,r,i
const a=this.state.mode.icon
const o=Object(n["a"])("span",{className:"bpc-lock-toggle__label"},void 0,this.state.mode.label||"-")
let s=null
if(this.props.isToggleable){const c=this.state.mode.variant
const u=this.state.mode.tooltip
const l=this.props.isLocked?w.t("Locked. Click to unlock."):w.t("Unlocked. Click to lock.")
s=Object(n["a"])(k["a"],{renderTip:u,placement:"top",color:"primary",on:["hover","focus"]},void 0,this.props.breakpoints.miniTablet?Object(n["a"])(L["a"],{id:"lock-toggle-btn",elementRef:e=>this.toggleBtnRef=e,variant:c,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked},void 0,e||(e=Object(n["a"])(a,{})),t||(t=Object(n["a"])(O["a"],{},void 0,o)),r||(r=Object(n["a"])(j["a"],{},void 0,l))):Object(n["a"])(y["a"],{color:"primary"===c?c:null,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked,screenReaderLabel:l},void 0,i||(i=Object(n["a"])(a,{}))))}else s=Object(n["a"])("span",{className:"bpc__lock-no__toggle"},void 0,Object(n["a"])("span",{className:"bpc__lock-no__toggle-icon"},void 0,Object(n["a"])(a,{})),Object(n["a"])(f["a"],{size:"small"},void 0,o))
return Object(n["a"])("span",{className:"bpc-lock-toggle"},void 0,s)}}S.defaultProps={isToggleable:false,onClick:()=>{},breakpoints:{}}
const M=Object(E["a"])(S)
M.setupRootNode=S.setupRootNode
var R=M
const N=Object(i["useScope"])("blueprint_coursesLockManageer")
class T{constructor(){this.toggleLocked=()=>{const{itemType:e}=this.props
const{courseId:t,isLocked:r,itemId:n}=this.state
v["a"].toggleLocked({courseId:t,itemType:e,itemId:n,isLocked:!r}).then(e=>{e.data.success?this.setState({isLocked:!r}):this.showToggleError()}).catch(()=>{this.showToggleError()})}
this.state={isLocked:false,itemLocks:[],isMasterContent:false,isChildContent:false,itemId:""}}init(e){if(!this.shouldInit())return
this.props=h(e)
this.setupState()
void 0!==this.state.itemId&&this.render()}shouldInit(){return ENV.MASTER_COURSE_DATA&&(ENV.MASTER_COURSE_DATA.is_master_course_master_content||ENV.MASTER_COURSE_DATA.is_master_course_child_content)}setupState(){this.state={isLocked:ENV.MASTER_COURSE_DATA.restricted_by_master_course,itemLocks:ENV.MASTER_COURSE_DATA.master_course_restrictions||ENV.MASTER_COURSE_DATA.default_restrictions,isMasterContent:ENV.MASTER_COURSE_DATA.is_master_course_master_content,isChildContent:ENV.MASTER_COURSE_DATA.is_master_course_child_content,courseId:ENV.COURSE_ID,itemId:d()(ENV,this.props.itemIdPath)}}setState(e){this.state=Object.assign(this.state,e)
this.render()}getItemLocks(){return{...this.state.itemLocks}}isMasterContent(){return this.state.isMasterContent}isChildContent(){return this.state.isChildContent}showToggleError(){o.a.flashError(N.t("There was a problem toggling the content lock."))}setupToggle(e){if(!this.props.toggleWrapperSelector)return
this.toggleNode?e():R.setupRootNode(this.props.toggleWrapperSelector,this.props.toggleWrapperChildIndex||0,t=>{this.toggleNode=t
e()})}renderLockToggle(){if(!this.props.toggleWrapperSelector)return
this.setupToggle(()=>{u.a.render(Object(n["a"])(R,{isLocked:this.state.isLocked,isToggleable:"show"===this.props.page&&this.state.isMasterContent,onClick:this.toggleLocked}),this.toggleNode)})}renderBanner(){this.bannerNode||(this.bannerNode=b.setupRootNode())
u.a.render(Object(n["a"])(b,{isLocked:this.state.isLocked,itemLocks:this.state.itemLocks}),this.bannerNode)}render(){this.renderBanner()
this.renderLockToggle()}}},"44Ds":function(e,t,r){var n=r("e4Nc")
var i="Expected a function"
function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i)
var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache
if(a.has(i))return a.get(i)
var o=e.apply(this,n)
r.cache=a.set(i,o)||a
return o}
r.cache=new(a.Cache||n)
return r}a.Cache=n
e.exports=a},"4kuk":function(e,t,r){var n=r("SfRM"),i=r("Hvzi"),a=r("u8Dt"),o=r("ekgI"),s=r("JSQU")
function c(e){var t=-1,r=null==e?0:e.length
this.clear()
while(++t<r){var n=e[t]
this.set(n[0],n[1])}}c.prototype.clear=n
c.prototype["delete"]=i
c.prototype.get=a
c.prototype.has=o
c.prototype.set=s
e.exports=c},"4uTw":function(e,t,r){var n=r("Z0cm"),i=r("9ggG"),a=r("GNiM"),o=r("dt0z")
function s(e,t){if(n(e))return e
return i(e,t)?[e]:a(o(e))}e.exports=s},"7Y4T":function(e,t,r){"use strict"
r.d(t,"a",(function(){return I}))
var n=r("1OyB")
var i=r("vuIU")
var a=r("Ji7U")
var o=r("LK+K")
r("DEX3")
var s=r("q1tI")
var c=r.n(s)
var u=r("17x9")
var l=r.n(u)
var d=r("MObU")
var p=r.n(d)
var h=r("ODXe")
var v=r("HMVb")
function g(e,t){var r=[]
Object.keys(e).forEach((function(n){var i=e[n],a=i.minWidth,o=i.maxWidth,s=i.minHeight,c=i.maxHeight
r.push([n,{minWidth:Object(v["a"])(a,t)||0,maxWidth:Object(v["a"])(o,t)||Infinity,minHeight:Object(v["a"])(s,t)||0,maxHeight:Object(v["a"])(c,t)||Infinity}])}))
return function(e){var t=e.width,n=e.height
var i={}
r.forEach((function(e){var r=Object(h["a"])(e,2),a=r[0],o=r[1],s=o.minWidth,c=o.maxWidth,u=o.minHeight,l=o.maxHeight
i[a]=s<=t&&t<=c&&u<=n&&n<=l}))
return i}}var f=r("8o96")
var m=r("gCYW")
var _=r("QF4Q")
var b=r("eGSd")
function L(e,t,r){var n="function"===typeof t?t():t
var i=[]
var a=function(t){var a=y(e,n,i,t)
if(a){i=a
r(i)}}
var o=Object(b["a"])(a,100,{leading:false,trailing:true})
var s=Object(f["a"])(n,o)
var c=Object(m["a"])(n),u=c.width,l=c.height
var d=a({width:u,height:l},e,n,i)
if(d){i=d
r(i)}return{remove:function(){s&&s.remove()
o&&o.cancel()}}}function y(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
var n=arguments.length>3?arguments[3]:void 0
var i=Object(_["a"])(t)
var a=n||Object(m["a"])(i),o=a.width,s=a.height
var c=g(e,i)({width:o,height:s})
var u=Object.keys(c).filter((function(e){return c[e]})).map((function(e){return e}))
if(r.length!==u.length)return u
if(r.filter((function(e){return-1===u.indexOf(e)})).length>0)return u
return null}var k=r("i/8D")
var O=r("gpCx")
function j(e,t){var r=Object(_["a"])(t)||document
return k["a"]&&Object(O["a"])(r).matchMedia(e)}function x(e,t){var r=Object.keys(e)
if(1!==r.length)throw new Error("Expected exactly one key in query object.")
var n=r[0]
var i=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===i.indexOf(n))throw new Error("Invalid key `".concat(n,"` in query object. Valid keys should consist of one of the following: ")+"".concat(i.join(", ")," (case sensitive)"))
var a=e[n]
if("string"!==typeof a&&"number"!==typeof a)throw new Error("The value of the query object must be a string or number.")
if(!a)throw new Error("No value supplied for query object")
return"(".concat(C(n.toLowerCase()),": ").concat(Object(v["a"])(a,t),"px)")}function C(e){return e.slice(0,3)+"-"+e.slice(3)}function E(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:j
var i="function"===typeof t?t():t
var a=function(e){var t=Object.keys(e).filter((function(t){return e[t].matches})).map((function(e){return e}))
r(t)}
var o={}
var s=function(){a(o)}
Object.keys(e).forEach((function(t){var r=n(x(e[t],i),i)
r.addListener(s)
o[t]=r}))
a(o)
return{remove:function(){o&&Object.keys(o).forEach((function(e){o[e].removeListener(s)}))}}}var w={validQuery:function(e,t,r){try{x(e[t])}catch(e){return new Error("Invalid query prop supplied to `".concat(r,"`. ").concat(e.message))}}}
var I=function(e){Object(a["a"])(r,e)
var t=Object(o["a"])(r)
function r(){var e
Object(n["a"])(this,r)
for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e._matchListener=null
e.state={matches:[],hasRendered:false}
e.updateMatches=function(t,r){e.setState({matches:t},(function(){"function"===typeof r&&r()}))}
return e}Object(i["a"])(r,[{key:"componentDidMount",value:function(){this.props.render||this.props.children
if("element"===this.props.match){var e=y(this.props.query,this)||[]
this.setState({matches:e,hasRendered:true})}else this.setState({hasRendered:true})
this._matchListener=this.addMatchListener(this.props.query,this.updateMatches)}},{key:"componentWillUnmount",value:function(){this.removeMatchListener()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.match,n=t.query
if(r!==e.match||!p()(n,e.query)){this.removeMatchListener()
this._matchListener=this.addMatchListener(n,this.updateMatches,r)}}},{key:"addMatchListener",value:function(e,t){var r=this
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.match
var i="element"===n?L:E
return i(e,(function(){return Object(_["a"])(r)}),t)}},{key:"removeMatchListener",value:function(){this._matchListener&&this._matchListener.remove()}},{key:"mergeProps",value:function(e,t){if(!t)return null
var r={}
e.forEach((function(e){var n=t[e]
Object.keys(n).forEach((function(e){["[Responsive] The prop `".concat(e,"` is defined at 2 or more breakpoints"),"which are currently applied at the same time. Its current value, `".concat(r[e],"`,"),"will be overwritten as `".concat(n[e],"`.")].join(" ")
r[e]=n[e]}))}))
return r}},{key:"render",value:function(){var e=this.state,t=e.matches,r=e.hasRendered
var n=this.props,i=n.props,a=n.render,o=n.children
var s
r&&(s=o||a)
return c.a.createElement("div",null,s&&s(this.mergeProps(t,i),t))}}])
r.displayName="Responsive"
return r}(s["Component"])
I.propTypes={match:l.a.oneOf(["element","media"]),query:l.a.objectOf(w.validQuery).isRequired,props:l.a.objectOf(l.a.object),render:l.a.func,children:l.a.func}
I.defaultProps={children:null,render:void 0,match:"element",props:null}},"9Nap":function(e,t,r){var n=r("/9aa")
var i=1/0
function a(e){if("string"==typeof e||n(e))return e
var t=e+""
return"0"==t&&1/e==-i?"-0":t}e.exports=a},"9ggG":function(e,t,r){var n=r("Z0cm"),i=r("/9aa")
var a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/
function s(e,t){if(n(e))return false
var r=typeof e
if("number"==r||"symbol"==r||"boolean"==r||null==e||i(e))return true
return o.test(e)||!a.test(e)||null!=t&&e in Object(t)}e.exports=s},Cwc5:function(e,t,r){var n=r("NKxu"),i=r("Npjl")
function a(e,t){var r=i(e,t)
return n(r)?r:void 0}e.exports=a},E2jh:function(e,t,r){var n=r("2gN3")
var i=(a=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""),a?"Symbol(src)_1."+a:"")
var a
function o(e){return!!i&&i in e}e.exports=o},EpBk:function(e,t){function r(e){var t=typeof e
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=r},GNiM:function(e,t,r){var n=r("I01J")
var i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var a=/\\(\\)?/g
var o=n((function(e){var t=[]
46===e.charCodeAt(0)&&t.push("")
e.replace(i,(function(e,r,n,i){t.push(n?i.replace(a,"$1"):r||e)}))
return t}))
e.exports=o},H8j4:function(e,t,r){var n=r("QkVE")
function i(e,t){var r=n(this,e),i=r.size
r.set(e,t)
this.size+=r.size==i?0:1
return this}e.exports=i},Hvzi:function(e,t){function r(e){var t=this.has(e)&&delete this.__data__[e]
this.size-=t?1:0
return t}e.exports=r},I01J:function(e,t,r){var n=r("44Ds")
var i=500
function a(e){var t=n(e,(function(e){r.size===i&&r.clear()
return e}))
var r=t.cache
return t}e.exports=a},JGuX:function(e,t,r){"use strict"
var n=r("RtDj")
var i=r("q1tI")
var a=r.n(i)
var o=r("17x9")
var s=r.n(o)
var c=r("7Y4T")
const u={miniTablet:{minWidth:"500px"},tablet:{minWidth:"768px"},desktop:{minWidth:"992px"},desktopNavOpen:{minWidth:"1140px"},desktopOnly:{minWidth:"768px"},mobileOnly:{maxWidth:"767px"}}
const l=e=>{const t={}
e.forEach(e=>t[e]=true)
return t}
const d=e=>t=>window.matchMedia?Object(n["a"])(c["a"],{match:"media",query:u,render:(r,n)=>a.a.createElement(e,Object.assign({breakpoints:l(n)},t))}):a.a.createElement(e,Object.assign({breakpoints:{}},t))
s.a.shape({miniTablet:s.a.bool,tablet:s.a.bool,desktop:s.a.bool,desktopNavOpen:s.a.bool,desktopOnly:s.a.bool,mobileOnly:s.a.bool})
t["a"]=d},JHgL:function(e,t,r){var n=r("QkVE")
function i(e){return n(this,e).get(e)}e.exports=i},JSQU:function(e,t,r){var n=r("YESw")
var i="__lodash_hash_undefined__"
function a(e,t){var r=this.__data__
this.size+=this.has(e)?0:1
r[e]=n&&void 0===t?i:t
return this}e.exports=a},KMkd:function(e,t){function r(){this.__data__=[]
this.size=0}e.exports=r},L2KU:function(e,t,r){"use strict"
const n=/<(http.*?)>; rel="([a-z]*)"/g
const i=e=>{const t={}
const r=e.headers?e.headers.link:null
if(!r)return t
let i=n.exec(r)
while(i){t[i[2]]=i[1]
i=n.exec(r)}return t}
t["a"]=i},NKxu:function(e,t,r){var n=r("lSCD"),i=r("E2jh"),a=r("GoyQ"),o=r("3Fdi")
var s=/[\\^$.*+?()[\]{}|]/g
var c=/^\[object .+?Constructor\]$/
var u=Function.prototype,l=Object.prototype
var d=u.toString
var p=l.hasOwnProperty
var h=RegExp("^"+d.call(p).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
function v(e){if(!a(e)||i(e))return false
var t=n(e)?h:c
return t.test(o(e))}e.exports=v},Npjl:function(e,t){function r(e,t){return null==e?void 0:e[t]}e.exports=r},QkVE:function(e,t,r){var n=r("EpBk")
function i(e,t){var r=e.__data__
return n(t)?r["string"==typeof t?"string":"hash"]:r.map}e.exports=i},SfRM:function(e,t,r){var n=r("YESw")
function i(){this.__data__=n?n(null):{}
this.size=0}e.exports=i},Xi7e:function(e,t,r){var n=r("KMkd"),i=r("adU4"),a=r("tMB7"),o=r("+6XX"),s=r("Z8oC")
function c(e){var t=-1,r=null==e?0:e.length
this.clear()
while(++t<r){var n=e[t]
this.set(n[0],n[1])}}c.prototype.clear=n
c.prototype["delete"]=i
c.prototype.get=a
c.prototype.has=o
c.prototype.set=s
e.exports=c},YESw:function(e,t,r){var n=r("Cwc5")
var i=n(Object,"create")
e.exports=i},Z0cm:function(e,t){var r=Array.isArray
e.exports=r},Z8oC:function(e,t,r){var n=r("y1pI")
function i(e,t){var r=this.__data__,i=n(r,e)
if(i<0){++this.size
r.push([e,t])}else r[i][1]=t
return this}e.exports=i},ZWtO:function(e,t,r){var n=r("4uTw"),i=r("9Nap")
function a(e,t){t=n(t,e)
var r=0,a=t.length
while(null!=e&&r<a)e=e[i(t[r++])]
return r&&r==a?e:void 0}e.exports=a},Zgll:function(e,t,r){"use strict"
r.d(t,"a",(function(){return O}))
var n=r("Ff2n")
var i=r("1OyB")
var a=r("vuIU")
var o=r("Ji7U")
var s=r("LK+K")
var c=r("q1tI")
var u=r.n(c)
var l=r("17x9")
var d=r.n(l)
var p=r("oXx0")
var h=r("J2CL")
var v=r("jtGx")
var g=r("6SzX")
var f=r("C6Zt")
var m=r("tPrY")
var _,b,L,y,k
var O=(_=Object(p["a"])(),b=Object(h["j"])(m["a"]),_(L=b(L=(k=y=function(e){Object(o["a"])(r,e)
var t=Object(s["a"])(r)
function r(){var e
Object(i["a"])(this,r)
for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e._baseButton=null
return e}Object(a["a"])(r,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,r=t.children,i=t.renderIcon,a=t.screenReaderLabel,o=t.type,s=t.size,c=t.elementRef,l=t.as,d=t.interaction,p=t.color,h=t.focusColor,m=t.shape,_=t.withBackground,b=t.withBorder,L=t.margin,y=t.cursor,k=t.href,O=Object(n["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var j=this.theme
return u.a.createElement(f["a"],Object.assign({},Object(v["b"])(O),{type:o,size:s,elementRef:c,as:l,interaction:d,color:p,focusColor:h,shape:m,withBackground:_,withBorder:b,margin:L,cursor:y,href:k,renderIcon:r||i,theme:j,ref:function(t){e._baseButton=t}}),u.a.createElement(g["a"],null,a))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
r.displayName="IconButton"
return r}(c["Component"]),y.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]),renderIcon:d.a.oneOfType([d.a.node,d.a.func]),screenReaderLabel:d.a.string.isRequired,type:d.a.oneOf(["button","submit","reset"]),size:d.a.oneOf(["small","medium","large"]),elementRef:d.a.func,as:d.a.elementType,interaction:d.a.oneOf(["enabled","disabled","readonly"]),color:d.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:d.a.oneOf(["info","inverse"]),shape:d.a.oneOf(["rectangle","circle"]),withBackground:d.a.bool,withBorder:d.a.bool,margin:h["c"].spacing,cursor:d.a.string,href:d.a.string},y.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},k))||L)||L)},adU4:function(e,t,r){var n=r("y1pI")
var i=Array.prototype
var a=i.splice
function o(e){var t=this.__data__,r=n(t,e)
if(r<0)return false
var i=t.length-1
r==i?t.pop():a.call(t,r,1);--this.size
return true}e.exports=o},dt0z:function(e,t,r){var n=r("zoYe")
function i(e){return null==e?"":n(e)}e.exports=i},e4Nc:function(e,t,r){var n=r("fGT3"),i=r("k+1r"),a=r("JHgL"),o=r("pSRY"),s=r("H8j4")
function c(e){var t=-1,r=null==e?0:e.length
this.clear()
while(++t<r){var n=e[t]
this.set(n[0],n[1])}}c.prototype.clear=n
c.prototype["delete"]=i
c.prototype.get=a
c.prototype.has=o
c.prototype.set=s
e.exports=c},eUgh:function(e,t){function r(e,t){var r=-1,n=null==e?0:e.length,i=Array(n)
while(++r<n)i[r]=t(e[r],r,e)
return i}e.exports=r},ebwN:function(e,t,r){var n=r("Cwc5"),i=r("Kz5y")
var a=n(i,"Map")
e.exports=a},ekgI:function(e,t,r){var n=r("YESw")
var i=Object.prototype
var a=i.hasOwnProperty
function o(e){var t=this.__data__
return n?void 0!==t[e]:a.call(t,e)}e.exports=o},fGT3:function(e,t,r){var n=r("4kuk"),i=r("Xi7e"),a=r("ebwN")
function o(){this.size=0
this.__data__={hash:new n,map:new(a||i),string:new n}}e.exports=o},jDZg:function(e,t,r){"use strict"
r.d(t,"d",(function(){return a}))
r.d(t,"a",(function(){return s}))
r.d(t,"b",(function(){return c}))
r.d(t,"e",(function(){return u}))
r.d(t,"c",(function(){return o}))
var n=r("HGxv")
const i=Object(n["useScope"])("blueprint_settings_labels")
const a={get assignment(){return i.t("Assignment")},get assignment_group(){return i.t("Assignment Group")},get quiz(){return i.t("Quiz")},get discussion_topic(){return i.t("Discussion")},get wiki_page(){return i.t("Page")},get attachment(){return i.t("File")},get context_module(){return i.t("Module")},get announcement(){return i.t("Announcement")},get assessment_question_bank(){return i.t("Question Bank")},get calendar_event(){return i.t("Event")},get learning_outcome(){return i.t("Outcome")},get learning_outcome_group(){return i.t("Outcome Group")},get rubric(){return i.t("Rubric")},get context_external_tool(){return i.t("External Tool")},get folder(){return i.t("Folder")},get syllabus(){return i.t("Syllabus")},get settings(){return i.t("Settings")}}
const o={get assignment(){return i.t("Assignments")},get quiz(){return i.t("Quizzes")},get discussion_topic(){return i.t("Discussions")},get wiki_page(){return i.t("Pages")},get attachment(){return i.t("Files")}}
const s={get created(){return i.t("Created")},get updated(){return i.t("Updated")},get deleted(){return i.t("Deleted")},get initial_sync(){return i.t("Initial Sync Incomplete")}}
const c={get points(){return i.t("Points changed exceptions:")},get content(){return i.t("Content changed exceptions:")},get due_dates(){return i.t("Due Dates changed exceptions:")},get availability_dates(){return i.t("Availability Dates changed exceptions:")},get settings(){return i.t("Settings changed exceptions:")},get deleted(){return i.t("Deleted content exceptions:")}}
const u={get content(){return i.t("Content")},get points(){return i.t("Points")},get settings(){return i.t("Settings")},get due_dates(){return i.t("Due Dates")},get availability_dates(){return i.t("Availability Dates")}}},"k+1r":function(e,t,r){var n=r("QkVE")
function i(e){var t=n(this,e)["delete"](e)
this.size-=t?1:0
return t}e.exports=i},kC3k:function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r("VTBJ")
var i=r("1OyB")
var a=r("vuIU")
var o=r("Ji7U")
var s=r("LK+K")
var c=r("q1tI")
var u=r.n(c)
var l=r("hPGw")
var d=u.a.createElement("path",{d:"M790.5886,1750.588 L790.5886,1807.059 L847.0586,1807.059 L847.0586,1920 L677.6466,1920 L677.6466,1750.588 L790.5886,1750.588 Z M1208.383,1807.059 L1208.383,1920 L1027.721,1920 L1027.721,1807.059 L1208.383,1807.059 Z M1569.816,1807.059 L1569.816,1920 L1389.154,1920 L1389.154,1807.059 L1569.816,1807.059 Z M1920,1750.588 L1920,1920 L1750.588,1920 L1750.588,1807.059 L1807.059,1807.059 L1807.059,1750.588 L1920,1750.588 Z M1581.1771,338.8238 L1581.1771,564.7058 L1468.2351,564.7058 L1468.2351,451.7648 L451.7651,451.7648 L451.7651,1468.2358 L564.7061,1468.2358 L564.7061,1581.1768 L338.8241,1581.1768 L338.8241,338.8238 L1581.1771,338.8238 Z M1920,1389.265 L1920,1569.927 L1807.059,1569.927 L1807.059,1389.265 L1920,1389.265 Z M790.588,1389.154 L790.588,1569.816 L677.647,1569.816 L677.647,1389.154 L790.588,1389.154 Z M1242.353,0.0004 L1242.353,225.8824 L1129.412,225.8824 L1129.412,112.9414 L112.941,112.9414 L112.941,1129.4124 L225.882,1129.4124 L225.882,1242.3524 L5.68434189e-14,1242.3524 L5.68434189e-14,0.0004 L1242.353,0.0004 Z M1920,1027.831 L1920,1208.492 L1807.059,1208.492 L1807.059,1027.831 L1920,1027.831 Z M790.588,1027.721 L790.588,1208.383 L677.647,1208.383 L677.647,1027.721 L790.588,1027.721 Z M1920,677.6466 L1920,847.0586 L1807.059,847.0586 L1807.059,790.5886 L1750.588,790.5886 L1750.588,677.6466 L1920,677.6466 Z M847.0584,677.6466 L847.0584,790.5886 L790.5884,790.5886 L790.5884,847.0586 L677.6474,847.0586 L677.6474,677.6466 L847.0584,677.6466 Z M1208.492,677.647 L1208.492,790.588 L1027.831,790.588 L1027.831,677.647 L1208.492,677.647 Z M1569.927,677.647 L1569.927,790.588 L1389.265,790.588 L1389.265,677.647 L1569.927,677.647 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(r,e)
var t=Object(s["a"])(r)
function r(){Object(i["a"])(this,r)
return t.apply(this,arguments)}Object(a["a"])(r,[{key:"render",value:function(){return u.a.createElement(l["a"],Object.assign({},this.props,{name:"IconBlueprint",viewBox:"0 0 1920 1920"}),d)}}])
r.displayName="IconBlueprintSolid"
return r}(c["Component"])
p.glyphName="blueprint"
p.variant="Solid"
p.propTypes=Object(n["a"])({},l["a"].propTypes)},lSCD:function(e,t,r){var n=r("NykK"),i=r("GoyQ")
var a="[object AsyncFunction]",o="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]"
function u(e){if(!i(e))return false
var t=n(e)
return t==o||t==s||t==a||t==c}e.exports=u},ljhN:function(e,t){function r(e,t){return e===t||e!==e&&t!==t}e.exports=r},mwIZ:function(e,t,r){var n=r("ZWtO")
function i(e,t,r){var i=null==e?void 0:n(e,t)
return void 0===i?r:i}e.exports=i},"o/ft":function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r("VTBJ")
var i=r("1OyB")
var a=r("vuIU")
var o=r("Ji7U")
var s=r("LK+K")
var c=r("q1tI")
var u=r.n(c)
var l=r("hPGw")
var d=u.a.createElement("path",{d:"M1300.007,676.9996 C1485.521,676.9996 1636.515,827.9376 1636.515,1013.5066 L1636.515,1013.5066 L1636.515,1246.9996 L1779.015,1246.9996 L1779.015,1761.6316 C1779.015,1848.9856 1707.985,1920.0146 1620.632,1920.0146 L1620.632,1920.0146 L979.382,1920.0146 C892.029,1920.0146 821,1848.9856 821,1761.6316 L821,1761.6316 L821,1246.9996 L963.5,1246.9996 L963.5,1013.5066 C963.5,827.9376 1114.492,676.9996 1300.007,676.9996 Z M1581.1771,338.8234 L1581.1771,564.7054 L1468.2351,564.7054 L1468.2351,451.7644 L451.7651,451.7644 L451.7651,1468.2354 L564.7061,1468.2354 L564.7061,1581.1764 L338.8241,1581.1764 L338.8241,338.8234 L1581.1771,338.8234 Z M1300.007,780.0146 C1171.294,780.0146 1066.515,884.7936 1066.515,1013.5066 L1066.515,1013.5066 L1066.515,1246.9996 L1533.5,1246.9996 L1533.5,1013.5066 C1533.5,884.7936 1428.721,780.0146 1300.007,780.0146 Z M1242.353,0 L1242.353,225.882 L1129.412,225.882 L1129.412,112.941 L112.941,112.941 L112.941,1129.412 L225.882,1129.412 L225.882,1242.352 L5.68434189e-14,1242.352 L5.68434189e-14,0 L1242.353,0 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(r,e)
var t=Object(s["a"])(r)
function r(){Object(i["a"])(this,r)
return t.apply(this,arguments)}Object(a["a"])(r,[{key:"render",value:function(){return u.a.createElement(l["a"],Object.assign({},this.props,{name:"IconBlueprintLock",viewBox:"0 0 1920 1920"}),d)}}])
r.displayName="IconBlueprintLockSolid"
return r}(c["Component"])
p.glyphName="blueprint-lock"
p.variant="Solid"
p.propTypes=Object(n["a"])({},l["a"].propTypes)},pSRY:function(e,t,r){var n=r("QkVE")
function i(e){return n(this,e).has(e)}e.exports=i},poaC:function(e,t,r){"use strict"
var n=r("BrAc")
var i=r("L2KU")
var a=r("rf2n")
const o={_depaginate(e,t=Infinity,r=[]){return n["a"].get(e).then(e=>{const n=r.concat(e.data)
const a=t-1
if(e.headers.link&&a>0){const t=Object(i["a"])(e)
if(t.next)return this._depaginate(t.next,a,n)}e.data=n
return e})},_queryString:e=>e.map(e=>{const t=Object.keys(e)[0]
const r=e[t]
return r?`${t}=${r}`:null}).filter(e=>!!e).join("&"),getCourses({accountId:e},{search:t="",term:r="",subAccount:n=""}={}){const i=this._queryString([{per_page:"100"},{blueprint:"false"},{blueprint_associated:"false"},{"include[]":"term"},{"include[]":"teachers"},{teacher_limit:"5"},{search_term:t},{enrollment_term_id:r}])
return this._depaginate(`/api/v1/accounts/${n||e}/courses?${i}`,1)},getAssociations({masterCourse:e}){const t=this._queryString([{per_page:"100"},{teacher_limit:"5"}])
return this._depaginate(`/api/v1/courses/${e.id}/blueprint_templates/default/associated_courses?${t}`)},saveAssociations:({masterCourse:e,addedAssociations:t,removedAssociations:r})=>n["a"].put(`/api/v1/courses/${e.id}/blueprint_templates/default/update_associations`,{course_ids_to_add:t.map(e=>e.id),course_ids_to_remove:r.map(e=>e.id)}),getMigrations:({masterCourse:e})=>n["a"].get(`/api/v1/courses/${e.id}/blueprint_templates/default/migrations`),beginMigration({masterCourse:e,willSendNotification:t,willIncludeCustomNotificationMessage:r,notificationMessage:i,willIncludeCourseSettings:a,willPublishCourses:o}){const s={send_notification:t}
a&&(s.copy_settings=true)
r&&i&&(s.comment=i)
o&&(s.publish_after_initial_sync=true)
return n["a"].post(`/api/v1/courses/${e.id}/blueprint_templates/default/migrations`,s)},checkMigration(e){return this.getMigrations(e).then(e=>{let t=a["a"].void
e.data[0]&&(t=e.data[0].workflow_state)
e.data=t
return e})},getMigration:({course:e},{blueprintType:t="blueprint_templates",templateId:r="default",changeId:i})=>n["a"].get(`/api/v1/courses/${e.id}/${t}/${r}/migrations/${i}`),getMigrationDetails:({course:e},{blueprintType:t="blueprint_templates",templateId:r="default",changeId:i})=>n["a"].get(`/api/v1/courses/${e.id}/${t}/${r}/migrations/${i}/details`),getFullMigration({course:e},t){return this.getMigration({course:e},t).then(({data:r})=>this.getMigrationDetails({course:e},t).then(e=>Object.assign(r,{changeId:t.changeId,changes:e.data})))},getSyncHistory({masterCourse:e}){return this.getMigrations({masterCourse:e}).then(({data:t})=>Promise.all(t.slice(0,5).map(t=>this.getMigrationDetails({course:e},{changeId:t.id}).then(e=>Object.assign(t,{changes:e.data})))))},toggleLocked:({courseId:e,itemType:t,itemId:r,isLocked:i})=>n["a"].put(`/api/v1/courses/${e}/blueprint_templates/default/restrict_item`,{content_type:t,content_id:r,restricted:i}),loadUnsyncedChanges:({masterCourse:e})=>n["a"].get(`/api/v1/courses/${e.id}/blueprint_templates/default/unsynced_changes`)}
t["a"]=o},rf2n:function(e,t,r){"use strict"
const n=["queued","exporting","imports_queued"]
const i=["completed","exports_failed","imports_failed"]
const a=["void","unknown",...n,...i]
const o={statesList:a,states:a.reduce((e,t)=>Object.assign(e,{[t]:t}),{})}
o.isEndState=e=>i.includes(e)
o.isLoadingState=e=>n.includes(e)
o.getLoadingValue=e=>n.indexOf(e)+1
o.isSuccessful=e=>"completed"===e
o.maxLoadingValue=n.length+1
t["a"]=o},tMB7:function(e,t,r){var n=r("y1pI")
function i(e){var t=this.__data__,r=n(t,e)
return r<0?void 0:t[r][1]}e.exports=i},tlDv:function(e,t,r){"use strict"
var n=r("17x9")
var i=r.n(n)
var a=r("rf2n")
const{shape:o,string:s,arrayOf:c,oneOf:u,bool:l,instanceOf:d}=i.a
const p={}
p.migrationState=u(a["a"].statesList)
p.term=o({id:s.isRequired,name:s.isRequired})
p.termList=c(p.term)
p.account=o({id:s.isRequired,name:s.isRequired})
p.accountList=c(p.account)
p.course=o({id:s.isRequired,name:s.isRequired,course_code:s.isRequired,term:p.term.isRequired,teachers:c(o({display_name:s.isRequired})),teacher_count:s,sis_course_id:s})
p.courseList=c(p.course)
p.courseInfo=o({id:s.isRequired,name:s.isRequired,enrollment_term_id:s.isRequired,sis_course_id:s})
p.lockableAttribute=u(["points","content","due_dates","availability_dates","settings","deleted"])
p.lockableAttributeList=c(p.lockableAttribute)
p.migrationException=o({course_id:s.isRequired,conflicting_changes:p.lockableAttributeList})
p.migrationExceptionList=c(p.migrationException)
p.migrationChange=o({asset_id:s.isRequired,asset_type:u(["assignment","quiz","discussion_topic","wiki_page","attachment","context_module","learning_outcome","learning_outcome_group","announcement","rubric","syllabus"]).isRequired,asset_name:s.isRequired,change_type:u(["created","updated","deleted"]).isRequired,htnl_url:s,exceptions:p.migrationExceptionList})
p.migrationChangeList=c(p.migrationChange)
p.migration=o({id:s.isRequired,workflow_state:p.migrationState.isRequired,comment:s,created_at:s.isRequired,exports_started_at:s,imports_queued_at:s,imports_completed_at:s,changes:p.migrationChangeList})
p.migrationList=c(p.migration)
p.unsyncedChange=o({asset_id:s.isRequired,asset_type:s.isRequired,asset_name:s.isRequired,change_type:s.isRequired,html_url:s.isRequired,locked:l.isRequired})
p.unsyncedChanges=c(p.unsyncedChange)
p.notification=o({id:s.isRequired,message:s.isRequired,err:d(Error)})
p.notificationList=c(p.notification)
p.itemLocks=o({content:l,points:l,due_dates:l,availability_dates:l})
p.itemLocksByObject=o({assignment:p.itemLocks,discussion_topic:p.itemLocks,wiki_page:p.itemLocks,quiz:p.itemLocks,attachment:p.itemLocks})},u8Dt:function(e,t,r){var n=r("YESw")
var i="__lodash_hash_undefined__"
var a=Object.prototype
var o=a.hasOwnProperty
function s(e){var t=this.__data__
if(n){var r=t[e]
return r===i?void 0:r}return o.call(t,e)?t[e]:void 0}e.exports=s},wOvH:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=r("HGxv")
var i=r("jDZg")
const a=Object(n["useScope"])("blueprint_LockItemFormat")
function o(e){const t=e.map(e=>i["e"][e])
switch(t.length){case 0:return a.t("no attributes locked")
case 1:return t[0]
default:return`${t.slice(0,-1).join(", ")} & ${t.slice(-1)[0]}`}}function s(e){const t=Object.keys(e).filter(t=>e[t])
return o(t)}},y1pI:function(e,t,r){var n=r("ljhN")
function i(e,t){var r=e.length
while(r--)if(n(e[r][0],t))return r
return-1}e.exports=i},zoYe:function(e,t,r){var n=r("nmnc"),i=r("eUgh"),a=r("Z0cm"),o=r("/9aa")
var s=1/0
var c=n?n.prototype:void 0,u=c?c.toString:void 0
function l(e){if("string"==typeof e)return e
if(a(e))return i(e,l)+""
if(o(e))return u?u.call(e):""
var t=e+""
return"0"==t&&1/e==-s?"-0":t}e.exports=l}}])

//# sourceMappingURL=93-c-3988202e24.js.map