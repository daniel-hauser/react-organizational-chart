import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";function i(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function a(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var o;function s(){return(s=t((()=>{o=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(a(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=i(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}()})))()}var c,l,u,d,f,p,m,h,g;function _(){return(_=t((()=>{c=`-ms-`,l=`-moz-`,u=`-webkit-`,d=`comm`,f=`rule`,p=`decl`,m=`@import`,h=`@keyframes`,g=`@layer`})))()}function v(e,t){return C(e,0)^45?(((t<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function y(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function S(e,t){return e.indexOf(t)}function C(e,t){return e.charCodeAt(t)|0}function w(e,t,n){return e.slice(t,n)}function T(e){return e.length}function E(e){return e.length}function ee(e,t){return t.push(e),e}function D(e,t){return e.map(t).join(``)}var te,O,ne;function k(){return(k=t((()=>{te=Math.abs,O=String.fromCharCode,ne=Object.assign})))()}function re(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:F,column:I,length:o,return:``}}function A(e,t){return ne(re(``,null,null,``,null,null,0),e,{length:-e.length},t)}function ie(){return R}function ae(){return R=L>0?C(z,--L):0,I--,R===10&&(I=1,F--),R}function j(){return R=L<he?C(z,L++):0,I++,R===10&&(I=1,F++),R}function M(){return C(z,L)}function oe(){return L}function N(e,t){return w(z,e,t)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function se(e){return F=I=1,he=T(z=e),L=0,[]}function ce(e){return z=``,e}function le(e){return y(N(L-1,fe(e===91?e+2:e===40?e+1:e)))}function ue(e){for(;(R=M())&&R<33;)j();return P(e)>2||P(R)>3?``:` `}function de(e,t){for(;--t&&j()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return N(e,oe()+(t<6&&M()==32&&j()==32))}function fe(e){for(;j();)switch(R){case e:return L;case 34:case 39:e!==34&&e!==39&&fe(R);break;case 40:e===41&&fe(e);break;case 92:j()}return L}function pe(e,t){for(;j()&&e+R!==57&&(e+R!==84||M()!==47););return`/*`+N(t,L-1)+`*`+O(e===47?e:j())}function me(e){for(;!P(M());)j();return N(e,L)}var F,I,he,L,R,z;function ge(){return(ge=t((()=>{k(),F=1,I=1,he=0,L=0,R=0,z=``})))()}function _e(e){return ce(ve(``,null,null,null,[``],e=se(e),0,[0],e))}function ve(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,w=a,E=r,D=y;g;)switch(m=v,v=j()){case 40:if(m!=108&&C(D,d-1)==58){S(D+=x(le(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:D+=le(v);break;case 9:case 10:case 13:case 32:D+=ue(m);break;case 92:D+=de(oe()-1,7);continue;case 47:switch(M()){case 42:case 47:ee(be(pe(j(),oe()),t,n),c);break;default:D+=`/`}break;case 123*h:s[l++]=T(D)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(D=x(D,/\f/g,``)),p>0&&T(D)-d&&ee(p>32?xe(D+`;`,r,n,d-1):xe(x(D,` `,``)+`;`,r,n,d-2),c);break;case 59:D+=`;`;default:if(ee(E=ye(D,t,n,l,u,i,s,y,b=[],w=[],d),a),v===123){if(u===0)ve(D,t,E,E,b,a,d,s,w);else switch(f===99&&C(D,3)===110?100:f){case 100:case 108:case 109:case 115:ve(e,E,E,r&&ee(ye(e,E,E,0,0,i,s,y,i,b=[],d),w),i,w,d,s,r?b:w);break;default:ve(D,E,E,E,[``],w,0,s,w)}}}l=u=p=0,h=_=1,y=D=``,d=o;break;case 58:d=1+T(D),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ae()==125)continue}switch(D+=O(v),v*h){case 38:_=u>0?1:(D+=`\f`,-1);break;case 44:s[l++]=(T(D)-1)*_,_=1;break;case 64:M()===45&&(D+=le(j())),f=M(),u=d=T(y=D+=me(oe())),v++;break;case 45:m===45&&T(D)==2&&(h=0)}}return a}function ye(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,p=i===0?a:[``],m=E(p),h=0,g=0,_=0;h<r;++h)for(var v=0,b=w(e,d+1,d=te(g=o[h])),S=e;v<m;++v)(S=y(g>0?p[v]+` `+b:x(b,/&\f/g,p[v])))&&(c[_++]=S);return re(e,t,n,i===0?f:s,c,l,u)}function be(e,t,n){return re(e,t,n,d,O(ie()),w(e,2,-2),0)}function xe(e,t,n,r){return re(e,t,n,p,w(e,0,r),w(e,r+1,-1),r)}function Se(){return(Se=t((()=>{_(),k(),ge()})))()}function B(e,t){for(var n=``,r=E(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Ce(e,t,n,r){switch(e.type){case g:if(e.children.length)break;case m:case p:return e.return=e.return||e.value;case d:return``;case h:return e.return=e.value+`{`+B(e.children,r)+`}`;case f:e.value=e.props.join(`,`)}return T(n=B(e.children,r))?e.return=e.value+`{`+n+`}`:``}function we(){return(we=t((()=>{_(),k()})))()}function Te(e){var t=E(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ee(e){return function(t){t.root||(t=t.return)&&e(t)}}function De(){return(De=t((()=>{k()})))()}function Oe(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}function ke(e,t){switch(v(e,t)){case 5103:return u+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+l+e+c+e+e;case 6828:case 4268:return u+e+c+e+e;case 6165:return u+e+c+`flex-`+e+e;case 5187:return u+e+x(e,/(\w+).+(:[^]+)/,u+`box-$1$2`+c+`flex-$1$2`)+e;case 5443:return u+e+c+`flex-item-`+x(e,/flex-|-self/,``)+e;case 4675:return u+e+c+`flex-line-pack`+x(e,/align-content|flex-|-self/,``)+e;case 5548:return u+e+c+x(e,`shrink`,`negative`)+e;case 5292:return u+e+c+x(e,`basis`,`preferred-size`)+e;case 6060:return u+`box-`+x(e,`-grow`,``)+u+e+c+x(e,`grow`,`positive`)+e;case 4554:return u+x(e,/([^-])(transform)/g,`$1`+u+`$2`)+e;case 6187:return x(x(x(e,/(zoom-|grab)/,u+`$1`),/(image-set)/,u+`$1`),e,``)+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,u+`box-pack:$3`+c+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+u+e+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,u+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-t>6)switch(C(e,t+1)){case 109:if(C(e,t+4)!==45)break;case 102:return x(e,/(.+:)(.+)-([^]+)/,`$1`+u+`$2-$3$1`+l+(C(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~S(e,`stretch`)?ke(x(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(C(e,t+1)!==115)break;case 6444:switch(C(e,T(e)-3-(~S(e,`!important`)&&10))){case 107:return x(e,`:`,`:`+u)+e;case 101:return x(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+u+(C(e,14)===45?`inline-`:``)+`box$3$1`+u+`$2$3$1`+c+`$2box$3`)+e}break;case 5936:switch(C(e,t+11)){case 114:return u+e+c+x(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return u+e+c+x(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return u+e+c+x(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return u+e+c+e+e}return e}var Ae,je,Me,Ne,Pe,Fe,Ie,Le;function Re(){return(Re=t((()=>{s(),ge(),k(),_(),we(),De(),Se(),Ae=function(e,t,n){for(var r=0,i=0;r=i,i=M(),r===38&&i===12&&(t[n]=1),!P(i);)j();return N(e,L)},je=function(e,t){var n=-1,r=44;do switch(P(r)){case 0:r===38&&M()===12&&(t[n]=1),e[n]+=Ae(L-1,t,n);break;case 2:e[n]+=le(r);break;case 4:if(r===44){e[++n]=M()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=O(r)}while(r=j());return e},Me=function(e,t){return ce(je(se(e),t))},Ne=new WeakMap,Pe=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if((e.props.length!==1||t.charCodeAt(0)===58||Ne.get(n))&&!r){Ne.set(e,!0);for(var i=[],a=Me(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Fe=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}},Ie=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:e.return=ke(e.value,e.length);break;case h:return B([A(e,{value:x(e.value,`@`,`@`+u)})],r);case f:if(e.length)return D(e.props,function(t){switch(b(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return B([A(e,{props:[x(t,/:(read-\w+)/,`:`+l+`$1`)]})],r);case`::placeholder`:return B([A(e,{props:[x(t,/:(plac\w+)/,`:`+u+`input-$1`)]}),A(e,{props:[x(t,/:(plac\w+)/,`:`+l+`$1`)]}),A(e,{props:[x(t,/:(plac\w+)/,c+`input-$1`)]})],r)}return``})}}],Le=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||Ie,i={},a,s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;s.push(e)});var c,l=[Pe,Fe],u,d=[Ce,Ee(function(e){u.insert(e)})],f=Te(l.concat(r,d)),p=function(e){return B(_e(e),f)};c=function(e,t,n,r){u=n,p(e?e+`{`+t.styles+`}`:t.styles),r&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new o({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return m.sheet.hydrate(s),m}})))()}function ze(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Be;function Ve(){return(Ve=t((()=>{Be={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}})))()}function V(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return H={name:i.name,styles:i.styles,next:H},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)H={name:o.name,styles:o.styles,next:H},o=o.next;return a.styles+`;`}return He(e,t,n);case`function`:if(e!==void 0){var s=H,c=n(e);return H=s,V(e,t,c)}}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function He(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=V(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Je(s)&&(r+=Ye(a)+`:`+Xe(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&We)throw Error(Ze);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Je(o[c])&&(r+=Ye(a)+`:`+Xe(a,o[c])+`;`);else{var l=V(e,t,o);switch(a){case`animation`:case`animationName`:r+=Ye(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}function Ue(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;H=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=V(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=V(n,t,e[o]),r&&(i+=a[o]);Qe.lastIndex=0;for(var s=``,c;(c=Qe.exec(i))!==null;)s+=`-`+c[1];return{name:ze(i)+s,styles:i,next:H}}var We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,H;function $e(){return($e=t((()=>{Ve(),We=!1,Ge=/[A-Z]|^ms/g,Ke=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qe=function(e){return e.charCodeAt(1)===45},Je=function(e){return e!=null&&typeof e!=`boolean`},Ye=Oe(function(e){return qe(e)?e:e.replace(Ge,`-$&`).toLowerCase()}),Xe=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Ke,function(e,t,n){return H={name:t,styles:n,next:H},t})}return Be[e]!==1&&!qe(e)&&typeof t==`number`&&t!==0?t+`px`:t},Ze=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`,Qe=/label:\s*([^\s;{]+)\s*(;|$)/g})))()}function et(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var tt,nt;function rt(){return(rt=t((()=>{tt=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},nt=function(e,t,n){tt(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}}})))()}function it(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function at(e,t,n){var r=[],i=et(e,r,n);return r.length<2?n:i+t(r)}var ot,st;function ct(){return(ct=t((()=>{Re(),$e(),rt(),ot=function(e){var t=Le(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){var e=Ue([...arguments],t.registered,void 0);return nt(t,e,!1),t.key+`-`+e.name};return{css:n,cx:function(){var e=[...arguments];return at(t.registered,n,st(e))},injectGlobal:function(){it(t,Ue([...arguments],t.registered))},keyframes:function(){var e=Ue([...arguments],t.registered),n=`animation-`+e.name;return it(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:et.bind(null,t.registered),merge:at.bind(null,t.registered,n)}},st=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n}})))()}var U,lt,W;function ut(){return(ut=t((()=>{ct(),U=ot({key:`css`}),U.flush,U.hydrate,lt=U.cx,U.merge,U.getRegisteredStyles,U.injectGlobal,U.keyframes,W=U.css,U.sheet,U.cache})))()}function G({children:e,label:t,className:n}){return dt.createElement(`li`,{className:lt(mt,ht,n)},t,dt.Children.count(e)>0&&dt.createElement(`ul`,{className:pt},e))}var dt,ft,pt,mt,ht;function gt(){return(gt=t((()=>{dt=e(n()),ut(),ft=W`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`,pt=W`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    ${ft};
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`,mt=W`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`,ht=W`
  ::before,
  ::after {
    ${ft};
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`,G.__docgenInfo={description:``,methods:[],displayName:`TreeNode`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`The node label`},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}}})))()}function K({children:e,label:t,lineHeight:n=`20px`,lineWidth:r=`1px`,lineColor:i=`black`,nodePadding:a=`5px`,lineStyle:o=`solid`,lineBorderRadius:s=`5px`}){return _t.createElement(`ul`,{className:W`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: ${n};
        --line-width: ${r};
        --line-color: ${i};
        --line-border-radius: ${s};
        --line-style: ${o};
        --node-padding: ${a};

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `},_t.createElement(G,{label:t},e))}var _t;function vt(){return(vt=t((()=>{_t=e(n()),ut(),gt(),K.__docgenInfo={description:`The root of the hierarchy tree`,methods:[],displayName:`Tree`,props:{label:{required:!0,tsType:{name:`TreeNodeProps['label']`,raw:`TreeNodeProps['label']`},description:`The root label`},lineHeight:{required:!1,tsType:{name:`string`},description:`The height of the line`,defaultValue:{value:`'20px'`,computed:!1}},lineWidth:{required:!1,tsType:{name:`string`},description:`The width of the line`,defaultValue:{value:`'1px'`,computed:!1}},lineColor:{required:!1,tsType:{name:`string`},description:`The color of the line`,defaultValue:{value:`'black'`,computed:!1}},lineStyle:{required:!1,tsType:{name:`union`,raw:`'dashed' | 'dotted' | 'double' | 'solid' | string`,elements:[{name:`literal`,value:`'dashed'`},{name:`literal`,value:`'dotted'`},{name:`literal`,value:`'double'`},{name:`literal`,value:`'solid'`},{name:`string`}]},description:`The line style for the tree`,defaultValue:{value:`'solid'`,computed:!1}},lineBorderRadius:{required:!1,tsType:{name:`string`},description:`The border radius of the line`,defaultValue:{value:`'5px'`,computed:!1}},nodePadding:{required:!1,tsType:{name:`string`},description:`The padding between siblings`,defaultValue:{value:`'5px'`,computed:!1}},children:{required:!0,tsType:{name:`TreeNodeProps['children']`,raw:`TreeNodeProps['children']`},description:``}}}})))()}function yt(){return(yt=t((()=>{vt(),gt()})))()}function q({children:e}){return(0,J.jsx)(`div`,{className:W`
        padding: 5px;
        border-radius: 8px;
        display: inline-block;
        border: 1px solid #ff0000;
      `,children:e})}function bt(e=`div`){return[(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Child 1`}),children:(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Grand Child`})})},`child-1`),(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Child 2`}),children:(0,J.jsxs)(G,{label:(0,J.jsx)(e,{children:`Grand Child`}),children:[(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Great Grand Child 1`})}),(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Great Grand Child 2`})})]})},`child-2`),(0,J.jsxs)(G,{label:(0,J.jsx)(e,{children:`Child 3`}),children:[(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Grand Child 1`})}),(0,J.jsx)(G,{label:(0,J.jsx)(e,{children:`Grand Child 2`})})]},`child-3`)]}var J,xt,Y,X,Z,Q,$,St;function Ct(){return(Ct=t((()=>{ut(),n(),yt(),J=r(),xt={title:`Example/Tree`,component:K,argTypes:{label:{control:`text`},lineColor:{control:`color`}},tags:[`autodocs`],args:{label:`Root`,children:void 0}},Y={render:e=>(0,J.jsx)(K,{...e,children:bt()})},X={render:Y.render,args:{lineWidth:`3px`,lineColor:`green`,lineBorderRadius:`10px`,lineHeight:`30px`,lineStyle:`dotted`}},Z={render:({label:e,...t})=>(0,J.jsx)(K,{label:(0,J.jsx)(q,{children:e}),...t,children:bt(q)})},Q={render:e=>(0,J.jsxs)(K,{...e,children:[(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`First`})}),(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`Second`})}),(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`Third`})})]})},$={render:e=>(0,J.jsxs)(K,{...e,children:[(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`Short`})}),(0,J.jsxs)(G,{label:(0,J.jsxs)(q,{children:[`A much wider label`,(0,J.jsx)(`br`,{}),`with a second line`]}),children:[(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`Nested left`})}),(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`Nested right`})})]}),(0,J.jsx)(G,{label:(0,J.jsx)(q,{children:`Last`})})]})},St=[`Basic`,`Styled`,`StyledNodes`,`Siblings`,`UnevenLabels`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <Tree {...args} children={getNodes()} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: Basic.render,
  args: {
    lineWidth: '3px',
    lineColor: 'green',
    lineBorderRadius: '10px',
    lineHeight: '30px',
    lineStyle: 'dotted'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    label,
    ...args
  }) => <Tree label={<StyledNode>{label}</StyledNode>} {...args} children={getNodes(StyledNode)} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <Tree {...args}>
      <TreeNode label={<StyledNode>First</StyledNode>} />
      <TreeNode label={<StyledNode>Second</StyledNode>} />
      <TreeNode label={<StyledNode>Third</StyledNode>} />
    </Tree>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <Tree {...args}>
      <TreeNode label={<StyledNode>Short</StyledNode>} />
      <TreeNode label={<StyledNode>
            A much wider label
            <br />
            with a second line
          </StyledNode>}>
        <TreeNode label={<StyledNode>Nested left</StyledNode>} />
        <TreeNode label={<StyledNode>Nested right</StyledNode>} />
      </TreeNode>
      <TreeNode label={<StyledNode>Last</StyledNode>} />
    </Tree>
}`,...$.parameters?.docs?.source}}}})))()}Ct();export{Y as Basic,Q as Siblings,X as Styled,Z as StyledNodes,$ as UnevenLabels,St as __namedExportsOrder,xt as default};