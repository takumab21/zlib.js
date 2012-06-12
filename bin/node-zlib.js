/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {'use strict';var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a)};
goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,c,b){a=a.split(".");b=b||goog.global;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(c)?b[d]=c:b=b[d]?b[d]:b[d]={}};
goog.getObjectByName=function(a,c){for(var b=a.split("."),d=c||goog.global,e;e=b.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,c){var b=c||goog.global,d;for(d in a)b[d]=a[d]};
goog.addDependency=function(a,c,b){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=goog.dependencies_,f=0;d=c[f];f++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;c=b[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][c]=true}}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var c=goog.getPathFromDeps_(a);if(c){goog.included_[c]=true;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return typeof a!="undefined"&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),c=a.length-1;c>=0;--c){var b=a[c].src,d=b.lastIndexOf("?"),
d=d==-1?b.length:d;if(b.substr(d-7,7)=="base.js"){goog.basePath=b.substr(0,d-7);break}}},goog.importScript_=function(a){var c=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&c(a)&&(goog.dependencies_.written[a]=true)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){goog.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in
d.visited)){d.visited[e]=true;if(e in d.requires)for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);}if(!(e in b)){b[e]=true;c.push(e)}}}var c=[],b={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<c.length;e++)if(c[e])goog.importScript_(goog.basePath+c[e]);else throw Error("Undefined script input");},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:
null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if(b=="[object Window]")return"object";if(b=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(b=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(c=="function"&&typeof a.call=="undefined")return"object";return c};goog.isDef=function(a){return a!==void 0};goog.isNull=function(a){return a===null};goog.isDefAndNotNull=function(a){return a!=null};goog.isArray=function(a){return goog.typeOf(a)=="array"};goog.isArrayLike=function(a){var c=goog.typeOf(a);return c=="array"||c=="object"&&typeof a.length=="number"};goog.isDateLike=function(a){return goog.isObject(a)&&typeof a.getFullYear=="function"};
goog.isString=function(a){return typeof a=="string"};goog.isBoolean=function(a){return typeof a=="boolean"};goog.isNumber=function(a){return typeof a=="number"};goog.isFunction=function(a){return goog.typeOf(a)=="function"};goog.isObject=function(a){var c=typeof a;return c=="object"&&a!=null||c=="function"};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(c){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var c=goog.typeOf(a);if(c=="object"||c=="array"){if(a.clone)return a.clone();var c=c=="array"?[]:{},b;for(b in a)c[b]=goog.cloneObject(a[b]);return c}return a};goog.bindNative_=function(a,c,b){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,c,b){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}};goog.bind=function(a,c,b){goog.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,c){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}};goog.mixin=function(a,c){for(var b in c)a[b]=c[b]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _et_ = 1;");if(typeof goog.global._et_!="undefined"){delete goog.global._et_;goog.evalWorksForGlobals_=true}else goog.evalWorksForGlobals_=false}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var c=goog.global.document,b=c.createElement("script");b.type="text/javascript";b.defer=false;b.appendChild(c.createTextNode(a));
c.body.appendChild(b);c.body.removeChild(b)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,c){var b=function(a){return goog.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),c=[],d=0;d<a.length;d++)c.push(b(a[d]));return c.join("-")},d=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?b:d:function(a){return a};return c?a+"-"+d(c):d(a)};
goog.setCssNameMapping=function(a,c){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=c};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,c){var b=c||{},d;for(d in b)var e=(""+b[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};goog.exportSymbol=function(a,c,b){goog.exportPath_(a,c,b)};goog.exportProperty=function(a,c,b){a[c]=b};
goog.inherits=function(a,c){function b(){}b.prototype=c.prototype;a.superClass_=c.prototype;a.prototype=new b;a.prototype.constructor=a};
goog.base=function(a,c,b){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=false,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[c]===d)f=true;else if(f)return g.prototype[c].apply(a,e);if(a[c]===d)return a.constructor.prototype[c].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var USE_TYPEDARRAY="function"===typeof Uint8Array&&"function"===typeof Uint16Array&&"function"===typeof Uint32Array;var Zlib={Adler32:function(a){"string"===typeof a&&(a=Zlib.Util.stringToByteArray(a));return Zlib.Adler32.update(1,a)}};Zlib.Adler32.update=function(a,c){for(var b=a&65535,d=a>>>16&65535,e=c.length,f,g=0;0<e;){f=e>Zlib.Adler32.OptimizationParameter?Zlib.Adler32.OptimizationParameter:e;e-=f;do b+=c[g++],d+=b;while(--f);b%=65521;d%=65521}return(d<<16|b)>>>0};Zlib.Adler32.OptimizationParameter=1024;Zlib.BitStream=function(){this.bitindex=this.index=0;this.buffer=new (USE_TYPEDARRAY?Uint8Array:Array)(Zlib.BitStream.DefaultBlockSize);this.blocks=[];this.totalpos=0};Zlib.BitStream.DefaultBlockSize=32768;Zlib.BitStream.prototype.expandBuffer=function(){var a=new (USE_TYPEDARRAY?Uint8Array:Array)(Zlib.BitStream.DefaultBlockSize);this.totalpos+=this.buffer.length;this.blocks.push(this.buffer);this.buffer=a;this.index=0;return this.buffer};
Zlib.BitStream.prototype.writeBits=function(a,c,b){var d=this.buffer,e=this.index,f=this.bitindex,g=d[e];b&&1<c&&(a=8<c?rev32_(a)>>32-c:Zlib.BitStream.ReverseTable[a]>>8-c);if(8>c+f)g=g<<c|a,f+=c;else for(b=0;b<c;++b)g=g<<1|a>>c-b-1&1,8===++f&&(f=0,d[e++]=Zlib.BitStream.ReverseTable[g],e===d.length&&(d=this.expandBuffer(),e=0),g=0);d[e]=g;this.buffer=d;this.bitindex=f;this.index=e};
function rev32_(a){return Zlib.BitStream.ReverseTable[a&255]<<24|Zlib.BitStream.ReverseTable[a>>>8&255]<<16|Zlib.BitStream.ReverseTable[a>>>16&255]<<8|Zlib.BitStream.ReverseTable[a>>>24&255]}
Zlib.BitStream.prototype.finish=function(){var a=this.buffer,c=this.index,b=new (USE_TYPEDARRAY?Uint8Array:Array)(this.totalpos+c+1),d,e,f,g,i,h;0<this.bitindex&&(a[c]<<=8-this.bitindex);a[c]=Zlib.BitStream.ReverseTable[a[c]];f=0;g=this.blocks.length;for(d=0;f<g;++f){e=this.blocks[f];i=0;for(h=e.length;i<h;++i)b[d++]=e[i]}for(f=0;f<=c;++f)b[d++]=a[f];return b};
Zlib.BitStream.ReverseTable=function(a){return a}(function(){var a=new (USE_TYPEDARRAY?Uint8Array:Array)(256),c;for(c=0;256>c;++c){for(var b=a,d=c,e=c,f=e,g=7,e=e>>>1;e;e>>>=1)f<<=1,f|=e&1,--g;b[d]=(f<<g&255)>>>0}return a}());Zlib.Heap=function(a){this.buffer=new (USE_TYPEDARRAY?Uint16Array:Array)(2*a);this.length=0};Zlib.Heap.prototype.getParent=function(a){return 2*((a-2)/4|0)};Zlib.Heap.prototype.getChild=function(a){return 2*a+2};Zlib.Heap.prototype.push=function(a,c){var b,d,e=this.buffer,f;b=this.length;e[this.length++]=c;for(e[this.length++]=a;0<b;)if(d=this.getParent(b),e[b+1]<e[d+1])f=e[b],e[b]=e[d],e[d]=f,f=e[b+1],e[b+1]=e[d+1],e[d+1]=f,b=d;else break;return this.length};
Zlib.Heap.prototype.pop=function(){var a,c,b=this.buffer,d,e,f;c=b[0];a=b[1];this.length-=2;b[0]=b[this.length];b[1]=b[this.length+1];for(f=0;;){e=this.getChild(f);if(e>=this.length)break;e+2<this.length&&b[e+3]<b[e+1]&&(e+=2);if(b[f+1]>b[e+1])d=b[f],b[f]=b[e],b[e]=d,d=b[f+1],b[f+1]=b[e+1],b[e+1]=d;else break;f=e}return{index:a,value:c,length:this.length}};var ZLIB_RAW_INFLATE_EXPORT=!1,ZLIB_BUFFER_BLOCK_SIZE=32768;
Zlib.RawInflate=function(a,c,b){this.blocks=[];this.blockSize=b?b:ZLIB_BUFFER_BLOCK_SIZE;this.totalpos=0;this.ip=void 0===c?0:c;this.bitsbuflen=this.bitsbuf=0;this.input=USE_TYPEDARRAY?new Uint8Array(a):a;this.bfinal=!1;this.mode=Zlib.RawInflate.Mode.ADAPTIVE;this.resize=!1;switch(this.mode){case Zlib.RawInflate.Mode.BLOCK:this.op=Zlib.RawInflate.MaxBackwardLength;this.output=new (USE_TYPEDARRAY?Uint8Array:Array)(Zlib.RawInflate.MaxBackwardLength+this.blockSize+Zlib.RawInflate.MaxCopyLength);break;
case Zlib.RawInflate.Mode.ADAPTIVE:this.op=0;this.output=new (USE_TYPEDARRAY?Uint8Array:Array)(this.blockSize);this.expandBuffer=this.expandBufferDynamic;this.concatBuffer=this.concatBufferDynamic;this.decodeHuffman=this.decodeHuffmanDynamic;break;default:throw Error("invalid inflate mode");}};Zlib.RawInflate.Mode={BLOCK:0,ADAPTIVE:1};Zlib.RawInflate.prototype.inflate=function(){for(;!this.bfinal;)this.parseBlock();return this.concatBuffer()};Zlib.RawInflate.MaxBackwardLength=32768;
Zlib.RawInflate.MaxCopyLength=258;Zlib.RawInflate.Order=function(a){return USE_TYPEDARRAY?new Uint16Array(a):a}([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);Zlib.RawInflate.LengthCodeTable=function(a){return USE_TYPEDARRAY?new Uint16Array(a):a}([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258]);Zlib.RawInflate.LengthExtraTable=function(a){return USE_TYPEDARRAY?new Uint8Array(a):a}([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]);
Zlib.RawInflate.DistCodeTable=function(a){return USE_TYPEDARRAY?new Uint16Array(a):a}([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]);Zlib.RawInflate.DistExtraTable=function(a){return USE_TYPEDARRAY?new Uint8Array(a):a}([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);
Zlib.RawInflate.FixedLiteralLengthTable=function(a){return a}(function(){var a=new (USE_TYPEDARRAY?Uint8Array:Array)(288),c,b;c=0;for(b=a.length;c<b;++c)a[c]=143>=c?8:255>=c?9:279>=c?7:8;return buildHuffmanTable(a)}());Zlib.RawInflate.FixedDistanceTable=function(a){return a}(function(){var a=new (USE_TYPEDARRAY?Uint8Array:Array)(30),c,b;c=0;for(b=a.length;c<b;++c)a[c]=5;return buildHuffmanTable(a)}());
Zlib.RawInflate.prototype.parseBlock=function(){var a=this.readBits(3);a&1&&(this.bfinal=!0);a>>>=1;switch(a){case 0:this.parseUncompressedBlock();break;case 1:this.parseFixedHuffmanBlock();break;case 2:this.parseDynamicHuffmanBlock();break;default:throw Error("unknown BTYPE: "+a);}};
Zlib.RawInflate.prototype.readBits=function(a){for(var c=this.bitsbuf,b=this.bitsbuflen,d=this.input,e=this.ip,f;b<a;){f=d[e++];if(void 0===f)throw Error("input buffer is broken");c|=f<<b;b+=8}f=c&(1<<a)-1;this.bitsbuf=c>>>a;this.bitsbuflen=b-a;this.ip=e;return f};
Zlib.RawInflate.prototype.readCodeByTable=function(a){for(var c=this.bitsbuf,b=this.bitsbuflen,d=this.input,e=this.ip,f=a[0],a=a[1],g;b<a;){g=d[e++];if(void 0===g)throw Error("input buffer is broken");c|=g<<b;b+=8}d=f[c&(1<<a)-1];f=d>>>16;this.bitsbuf=c>>f;this.bitsbuflen=b-f;this.ip=e;return d&65535};
Zlib.RawInflate.prototype.parseUncompressedBlock=function(){var a=this.input,c=this.ip,b=this.output,d=this.op,e,f,g,i=b.length;this.bitsbuflen=this.bitsbuf=0;e=a[c++];if(void 0===e)throw Error("invalid uncompressed block header: LEN (first byte)");f=e;e=a[c++];if(void 0===e)throw Error("invalid uncompressed block header: LEN (second byte)");f|=e<<8;e=a[c++];if(void 0===e)throw Error("invalid uncompressed block header: NLEN (first byte)");g=e;e=a[c++];if(void 0===e)throw Error("invalid uncompressed block header: NLEN (second byte)");
if(f===~(g|e<<8))throw Error("invalid uncompressed block header: length verify");if(c+f>a.length)throw Error("input buffer is broken");switch(this.mode){case Zlib.RawInflate.Mode.BLOCK:for(;d+f>=b.length;){e=i-d;f-=e;if(USE_TYPEDARRAY)b.set(a.subarray(c,c+e),d),d+=e,c+=e;else for(;e--;)b[d++]=a[c++];this.op=d;b=this.expandBuffer();d=this.op}break;case Zlib.RawInflate.Mode.ADAPTIVE:for(;d+f>b.length;)b=this.expandBuffer({fixRatio:2});break;default:throw Error("invalid inflate mode");}if(USE_TYPEDARRAY)b.set(a.subarray(c,
c+f),d),d+=f,c+=f;else for(;f--;)b[d++]=a[c++];this.ip=c;this.op=d;this.output=b};Zlib.RawInflate.prototype.parseFixedHuffmanBlock=function(){this.decodeHuffman(Zlib.RawInflate.FixedLiteralLengthTable,Zlib.RawInflate.FixedDistanceTable)};
Zlib.RawInflate.prototype.parseDynamicHuffmanBlock=function(){function a(a,b,c){for(var e,d,f=0,f=0;f<a;)switch(e=this.readCodeByTable(b),e){case 16:for(e=3+this.readBits(2);e--;)c[f++]=d;break;case 17:for(e=3+this.readBits(3);e--;)c[f++]=0;d=0;break;case 18:for(e=11+this.readBits(7);e--;)c[f++]=0;d=0;break;default:d=c[f++]=e}return c}var c=this.readBits(5)+257,b=this.readBits(5)+1,d=this.readBits(4)+4,e=new (USE_TYPEDARRAY?Uint8Array:Array)(Zlib.RawInflate.Order.length),f;for(f=f=0;f<d;++f)e[Zlib.RawInflate.Order[f]]=
this.readBits(3);d=buildHuffmanTable(e);e=new (USE_TYPEDARRAY?Uint8Array:Array)(c);f=new (USE_TYPEDARRAY?Uint8Array:Array)(b);this.decodeHuffman(buildHuffmanTable(a.call(this,c,d,e)),buildHuffmanTable(a.call(this,b,d,f)))};
Zlib.RawInflate.prototype.decodeHuffman=function(a,c){var b=this.output,d=this.op;this.currentLitlenTable=a;this.currentDistTable=c;for(var e=b.length-Zlib.RawInflate.MaxCopyLength,f,g,i;256!==(f=this.readCodeByTable(a));)if(256>f)d>=e&&(this.op=d,b=this.expandBuffer(),d=this.op),b[d++]=f;else{f-=257;i=Zlib.RawInflate.LengthCodeTable[f];0<Zlib.RawInflate.LengthExtraTable[f]&&(i+=this.readBits(Zlib.RawInflate.LengthExtraTable[f]));f=this.readCodeByTable(c);g=Zlib.RawInflate.DistCodeTable[f];0<Zlib.RawInflate.DistExtraTable[f]&&
(g+=this.readBits(Zlib.RawInflate.DistExtraTable[f]));d>=e&&(this.op=d,b=this.expandBuffer(),d=this.op);for(;i--;)b[d]=b[d++-g]}for(;8<=this.bitsbuflen;)this.bitsbuflen-=8,this.ip--;this.op=d};
Zlib.RawInflate.prototype.decodeHuffmanDynamic=function(a,c){var b=this.output,d=this.op;this.currentLitlenTable=a;this.currentDistTable=c;for(var e=b.length,f,g,i;256!==(f=this.readCodeByTable(a));)if(256>f)d===e&&(b=this.expandBuffer(),e=b.length),b[d++]=f;else{f-=257;i=Zlib.RawInflate.LengthCodeTable[f];0<Zlib.RawInflate.LengthExtraTable[f]&&(i+=this.readBits(Zlib.RawInflate.LengthExtraTable[f]));f=this.readCodeByTable(c);g=Zlib.RawInflate.DistCodeTable[f];0<Zlib.RawInflate.DistExtraTable[f]&&
(g+=this.readBits(Zlib.RawInflate.DistExtraTable[f]));d+i>=e&&(b=this.expandBuffer(),e=b.length);for(;i--;)b[d]=b[d++-g]}for(;8<=this.bitsbuflen;)this.bitsbuflen-=8,this.ip--;this.op=d};
Zlib.RawInflate.prototype.expandBuffer=function(){var a=new (USE_TYPEDARRAY?Uint8Array:Array)(this.op-Zlib.RawInflate.MaxBackwardLength),c=this.op-Zlib.RawInflate.MaxBackwardLength,b,d,e=this.output;if(USE_TYPEDARRAY)a.set(e.subarray(Zlib.RawInflate.MaxBackwardLength,a.length));else{b=0;for(d=a.length;b<d;++b)a[b]=e[b+Zlib.RawInflate.MaxBackwardLength]}this.blocks.push(a);this.totalpos+=a.length;if(USE_TYPEDARRAY)e.set(e.subarray(c,c+Zlib.RawInflate.MaxBackwardLength));else for(b=0;b<Zlib.RawInflate.MaxBackwardLength;++b)e[b]=
e[c+b];this.op=Zlib.RawInflate.MaxBackwardLength;return e};Zlib.RawInflate.prototype.expandBufferDynamic=function(a){var c=this.input.length/this.ip+1|0,b=this.input,d=this.output;a&&("number"===typeof a.fixRatio&&(c=a.fixRatio),"number"===typeof a.addRatio&&(c+=a.addRatio));2>c?(a=(b.length-this.ip)/this.currentLitlenTable[2],a=258*(a/2)|0,a=a<d.length?d.length+a:d.length<<1):a=d.length*c;USE_TYPEDARRAY?(a=new Uint8Array(a),a.set(d)):a=d;return this.output=a};
Zlib.RawInflate.prototype.concatBuffer=function(){var a=0,c=this.output,b=this.blocks,d,e=new (USE_TYPEDARRAY?Uint8Array:Array)(this.totalpos+(this.op-Zlib.RawInflate.MaxBackwardLength)),f,g,i,h;if(0===b.length)return USE_TYPEDARRAY?this.output.subarray(Zlib.RawInflate.MaxBackwardLength,this.op):this.output.slice(Zlib.RawInflate.MaxBackwardLength,this.op);f=0;for(g=b.length;f<g;++f){d=b[f];i=0;for(h=d.length;i<h;++i)e[a++]=d[i]}f=Zlib.RawInflate.MaxBackwardLength;for(g=this.op;f<g;++f)e[a++]=c[f];
this.blocks=[];return this.buffer=e};Zlib.RawInflate.prototype.concatBufferDynamic=function(){var a,c=this.op;this.resize?USE_TYPEDARRAY?(a=new Uint8Array(c),a.set(this.output.subarray(0,c))):a=this.output.slice(0,c):a=USE_TYPEDARRAY?this.output.subarray(0,c):this.output.slice(0,c);return this.buffer=a};
function buildHuffmanTable(a){var c=a.length,b=0,d=Number.POSITIVE_INFINITY,e,f,g,i,h,j,l,k,m;for(k=0;k<c;++k)a[k]>b&&(b=a[k]),a[k]<d&&(d=a[k]);e=1<<b;f=new (USE_TYPEDARRAY?Uint32Array:Array)(e);g=1;i=0;for(h=2;g<=b;){for(k=0;k<c;++k)if(a[k]===g){j=0;l=i;for(m=0;m<g;++m)j=j<<1|l&1,l>>=1;for(m=j;m<e;m+=h)f[m]=g<<16|k;++i}++g;i<<=1;h<<=1}return[f,b,d]}Zlib.RawInflate.fromString=function(a){for(var c=new (USE_TYPEDARRAY?Uint8Array:Array)(a.length),b=0,d=a.length;b<d;++b)c[b]=a.charCodeAt(b);return c};
ZLIB_RAW_INFLATE_EXPORT&&(goog.exportSymbol("Zlib.RawInflate",Zlib.RawInflate),goog.exportSymbol("Zlib.RawInflate.prototype.inflate",Zlib.RawInflate.prototype.inflate));var ZLIB_GUNZIP_EXPORT=!1;Zlib.Gunzip=function(a){this.input=a;this.op=this.ip=0};Zlib.Gunzip.prototype.inflate=function(){for(var a=this.input.length;this.ip<a;)this.decodeMember();return this.output};
Zlib.Gunzip.prototype.decodeMember=function(){var a,c,b,d,e,f;b=this.input;d=this.ip;a=b[d++];c=b[d++];if(31!==a||139!==c)throw Error("invalid file signature:",a,c);a=b[d++];switch(a){case 8:break;default:throw Error("unknown compression method: "+a);}a=b[d++];c=b[d++]|b[d++]<<8|b[d++]<<16|b[d++]<<24;this.mtime=new Date(1E3*c);d++;d++;0<(a&Zlib.Gunzip.FlagsMask.FEXTRA)&&(c=b[d++]|b[d++]<<8,d=this.decodeSubField(d,c));if(0<(a&Zlib.Gunzip.FlagsMask.FNAME)){f=[];for(e=0;0<(c=b[d++]);)f[e++]=String.fromCharCode(c);
this.name=f.join("")}if(0<(a&Zlib.Gunzip.FlagsMask.FCOMMENT)){f=[];for(e=0;0<(c=b[d++]);)f[e++]=String.fromCharCode(c);this.comment=f.join("")}if(0<(a&Zlib.Gunzip.FlagsMask.FHCRC)&&(a=this.getCRC32_(b,0,d)&65535,a!==(b[d++]|b[d++]<<8)))throw Error("invalid header crc16");d=new Zlib.RawInflate(b,d);a=d.inflate();d=d.ip;if(USE_TYPEDARRAY)this.output=new Uint8Array(a.length),this.output.set(a,this.op),this.op+=a.length;else{this.output=Array(a.length);c=0;for(e=a.length;c<e;++c)this.output[this.op++]=
a[c]}a=b[d++]|b[d++]<<8|b[d++]<<16|b[d++]<<24;if(this.getCRC32_(this.output)!==a)throw Error("invalid CRC-32 checksum: "+(a>>>0).toString(16)+" / "+this.getCRC32_(this.output).toString(16)+" | "+b[d-5]+", "+b[d]);b=b[d++]|b[d++]<<8|b[d++]<<16|b[d++]<<24;if((this.output.length&4294967295)!==b)throw Error("invalid input size: "+(this.output.length&4294967295)+" / "+b);this.ip=d};Zlib.Gunzip.prototype.decodeSubField=function(a,c){return a+c};
Zlib.Gunzip.OperatingSystem={FAT:0,AMIGA:1,VMS:2,UNIX:3,VM_CMS:4,ATARI_TOS:5,HPFS:6,MACINTOSH:7,Z_SYSTEM:8,CP_M:9,TOPS_20:10,NTFS:11,QDOS:12,ACORN_RISCOS:13,UNKNOWN:255};Zlib.Gunzip.FlagsMask={FTEXT:1,FHCRC:2,FEXTRA:4,FNAME:8,FCOMMENT:16};
Zlib.Gunzip.Crc32Table_=function(a){return USE_TYPEDARRAY?new Uint32Array(a):a}([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,
901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,
4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,
81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,
3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,
2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]);Zlib.Gunzip.prototype.updateCRC32_=function(a,c,b,d){for(var e=0,b="number"===typeof b?b:0,d="number"===typeof d?d:a.length;b<d;b++)e=(c^a[b])&255,c=c>>>8^Zlib.Gunzip.Crc32Table_[e];return c};
Zlib.Gunzip.prototype.getCRC32_=function(a,c,b){return this.updateCRC32_(a,4294967295,c,b)^4294967295};ZLIB_GUNZIP_EXPORT&&(goog.exportSymbol("Zlib.Gunzip",Zlib.Gunzip),goog.exportSymbol("Zlib.Gunzip.prototype.inflate",Zlib.Gunzip.prototype.inflate));var ZLIB_INFLATE_EXPORT=!1;Zlib.Inflate=function(a,c,b){this.input=a;this.ip=0;this.verify=b;var b=a[this.ip++],d=a[this.ip++];switch(b&15){case Zlib.CompressionMethod.DEFLATE:this.method=Zlib.CompressionMethod.DEFLATE;break;default:throw Error("unsupported compression method");}if(0!==((b<<8)+d)%31)throw Error("invalid fcheck flag:"+((b<<8)+d)%31);if(d&32)throw Error("fdict flag is not supported");this.rawinflate=new Zlib.RawInflate(a,this.ip,c)};
Zlib.Inflate.prototype.inflate=function(){var a=this.input,c;c=this.rawinflate.inflate();if(this.verify&&(a=a[this.ip++]<<24|a[this.ip++]<<16|a[this.ip++]<<8|a[this.ip++],a!==Zlib.Adler32(c)))throw Error("invalid adler-32 checksum");return c};ZLIB_INFLATE_EXPORT&&(goog.exportSymbol("Zlib.Inflate",Zlib.Inflate),goog.exportSymbol("Zlib.Inflate.prototype.inflate",Zlib.Inflate.prototype.inflate));Zlib.Util={};Zlib.Util.convertNetworkByteOrder=function(a,c){var b=[],d;do d=a&255,b.push(d),a>>>=8;while(0<a);if("number"===typeof c)for(;b.length<c;)b.push(0);return b.reverse()};Zlib.Util.slice=function(a,c,b){var d,e=a.length;if(a instanceof Array)return a.slice(c,c+b);d=[];for(var f=0;f<b&&!(c+f>=e);f++)d.push(a[c+f]);return d};Zlib.Util.push=function(a,c){var b=0,d=c.length,e=c.length;if(a.push)for(;b<e;b++)a.push(c[b]);else for(;b<e;b++)a[d+b]=c[b];return a.length};
Zlib.Util.stringToByteArray=function(a){var a=a.split(""),c,b;c=0;for(b=a.length;c<b;c++)a[c]=(a[c].charCodeAt(0)&255)>>>0;return a};var ZLIB_RAWDEFLATE_EXPORT=!1;Zlib.RawDeflate=function(a){this.compressionType=Zlib.RawDeflate.CompressionType.DYNAMIC;this.lazy=0;this.freqsLitLen=[];this.freqsDist=[];if("object"===typeof a&&null!==a&&("number"===typeof a.lazy&&(this.lazy=a.lazy),"number"===typeof a.compressionType))this.compressionType=a.compressionType};Zlib.RawDeflate.CompressionType={NONE:0,FIXED:1,DYNAMIC:2,RESERVED:3};Zlib.RawDeflate.Lz77MinLength=3;Zlib.RawDeflate.Lz77MaxLength=258;Zlib.RawDeflate.WindowSize=32768;
Zlib.RawDeflate.MaxCodeLength=16;Zlib.RawDeflate.HUFMAX=286;Zlib.RawDeflate.FixedHuffmanTable=function(){var a=[],c;for(c=0;288>c;c++)switch(!0){case 143>=c:a.push([c-0+48,8]);break;case 255>=c:a.push([c-144+400,9]);break;case 279>=c:a.push([c-256+0,7]);break;case 287>=c:a.push([c-280+192,8]);break;default:throw"invalid literal: "+c;}return a}();
Zlib.RawDeflate.prototype.makeBlocks=function(a){var c=[],b,d,e;"string"===typeof a&&(a=Zlib.Util.stringToByteArray(a));switch(this.compressionType){case Zlib.RawDeflate.CompressionType.NONE:d=0;for(e=a.length;d<e;)b=(0,Zlib.Util.slice)(a,d,65535),d+=b.length,(0,Zlib.Util.push)(c,this.makeNocompressBlock(b,d===e));break;case Zlib.RawDeflate.CompressionType.FIXED:(0,Zlib.Util.push)(c,this.makeFixedHuffmanBlock(a,!0));break;case Zlib.RawDeflate.CompressionType.DYNAMIC:(0,Zlib.Util.push)(c,this.makeDynamicHuffmanBlock(a,
!0));break;default:throw"invalid compression type";}return c};Zlib.RawDeflate.prototype.compress=Zlib.RawDeflate.prototype.makeBlocks;Zlib.RawDeflate.prototype.makeNocompressBlock=function(a,c){var b=[],d,e;b.push((c?1:0)|Zlib.RawDeflate.CompressionType.NONE<<1);d=a.length;e=~d+65536&65535;b.push(d&255,d>>>8&255,e&255,e>>>8&255);(0,Zlib.Util.push)(b,a);return b};
Zlib.RawDeflate.prototype.makeFixedHuffmanBlock=function(a,c){var b=new Zlib.BitStream,d;d=Zlib.RawDeflate.CompressionType.FIXED;b.writeBits(c?1:0,1,!0);b.writeBits(d,2,!0);d=this.lz77(a);return d=this.fixedHuffman(d,b)};
Zlib.RawDeflate.prototype.makeDynamicHuffmanBlock=function(a,c){var b=new Zlib.BitStream,d,e,f,g,i=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],h,j,l,k,m,o,p=Array(19),n;d=Zlib.RawDeflate.CompressionType.DYNAMIC;b.writeBits(c?1:0,1,!0);b.writeBits(d,2,!0);d=this.lz77(a);h=this.getLengths_(this.freqsLitLen);j=this.getCodesFromLengths_(h);l=this.getLengths_(this.freqsDist);k=this.getCodesFromLengths_(l);for(e=286;257<e&&0===h[e-1];e--);for(f=30;1<f&&0===l[f-1];f--);m=this.getTreeSymbols_(e,h,f,
l);o=this.getLengths_(m.freqs,7);for(n=0;19>n;n++)p[n]=o[i[n]];for(g=19;4<g&&0===p[g-1];g--);i=this.getLengths_(m.freqs);o=this.getCodesFromLengths_(i);b.writeBits(e-257,5,!0);b.writeBits(f-1,5,!0);b.writeBits(g-4,4,!0);for(n=0;n<g;n++)b.writeBits(p[n],3,!0);n=0;for(p=m.codes.length;n<p;n++)if(e=m.codes[n],b.writeBits(o[e],i[e],!0),16<=e){n++;switch(e){case 16:e=2;break;case 17:e=3;break;case 18:e=7;break;default:throw"invalid code: "+e;}b.writeBits(m.codes[n],e,!0)}this.dynamicHuffman(d,[j,h],[k,
l],b);return b.finish()};Zlib.RawDeflate.prototype.dynamicHuffman=function(a,c,b,d){var e,f,g,i,h;d instanceof Zlib.BitStream||(d=new Zlib.BitStream);g=c[0];c=c[1];i=b[0];h=b[1];b=0;for(e=a.length;b<e;++b)if(f=a[b],d.writeBits(g[f],c[f],!0),256<f)d.writeBits(a[++b],a[++b],!0),f=a[++b],d.writeBits(i[f],h[f],!0),d.writeBits(a[++b],a[++b],!0);else if(256===f)break;return d};
Zlib.RawDeflate.prototype.fixedHuffman=function(a,c){var b,d,e;c instanceof Zlib.BitStream||(c=new Zlib.BitStream);b=0;for(d=a.length;b<d;b++)if(e=a[b],Zlib.BitStream.prototype.writeBits.apply(c,Zlib.RawDeflate.FixedHuffmanTable[e]),256<e)c.writeBits(a[++b],a[++b],!0),c.writeBits(a[++b],5),c.writeBits(a[++b],a[++b],!0);else if(256===e)break;return c.finish()};function Lz77Match(a,c){this.length=a;this.backwordDistance=c}
Lz77Match.LengthCodeTable=function(a){return USE_TYPEDARRAY?new Uint32Array(a):a}(function(){function a(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];
case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:throw"invalid length: "+
a;}}var c=[],b,d;for(b=3;258>=b;b++)d=a(b),c[b]=d[2]<<24|d[1]<<16|d[0];return c}());
Lz77Match.prototype.getDistanceCode_=function(a){switch(!0){case 1===a:a=[0,a-1,0];break;case 2===a:a=[1,a-2,0];break;case 3===a:a=[2,a-3,0];break;case 4===a:a=[3,a-4,0];break;case 6>=a:a=[4,a-5,1];break;case 8>=a:a=[5,a-7,1];break;case 12>=a:a=[6,a-9,2];break;case 16>=a:a=[7,a-13,2];break;case 24>=a:a=[8,a-17,3];break;case 32>=a:a=[9,a-25,3];break;case 48>=a:a=[10,a-33,4];break;case 64>=a:a=[11,a-49,4];break;case 96>=a:a=[12,a-65,5];break;case 128>=a:a=[13,a-97,5];break;case 192>=a:a=[14,a-129,6];
break;case 256>=a:a=[15,a-193,6];break;case 384>=a:a=[16,a-257,7];break;case 512>=a:a=[17,a-385,7];break;case 768>=a:a=[18,a-513,8];break;case 1024>=a:a=[19,a-769,8];break;case 1536>=a:a=[20,a-1025,9];break;case 2048>=a:a=[21,a-1537,9];break;case 3072>=a:a=[22,a-2049,10];break;case 4096>=a:a=[23,a-3073,10];break;case 6144>=a:a=[24,a-4097,11];break;case 8192>=a:a=[25,a-6145,11];break;case 12288>=a:a=[26,a-8193,12];break;case 16384>=a:a=[27,a-12289,12];break;case 24576>=a:a=[28,a-16385,13];break;case 32768>=
a:a=[29,a-24577,13];break;default:throw"invalid distance";}return a};Lz77Match.prototype.toLz77Array=function(){var a=this.backwordDistance,c=[],b=0,d;d=Lz77Match.LengthCodeTable[this.length];c[b++]=d&65535;c[b++]=d>>16&255;c[b++]=d>>24;d=this.getDistanceCode_(a);c[b++]=d[0];c[b++]=d[1];c[b++]=d[2];return c};
Zlib.RawDeflate.prototype.lz77=function(a){function c(a,b){var c=a.toLz77Array(),d,e;d=0;for(e=c.length;d<e;++d)l[k++]=c[d];o[c[0]]++;p[c[3]]++;m=a.length+b-1;j=null}var b,d,e,f,g,i={},h=Zlib.RawDeflate.WindowSize,j,l=USE_TYPEDARRAY?new Uint16Array(2*a.length):[],k=0,m=0,o=new (USE_TYPEDARRAY?Uint32Array:Array)(286),p=new (USE_TYPEDARRAY?Uint32Array:Array)(30),n=this.lazy;if(!USE_TYPEDARRAY){for(e=0;285>=e;)o[e++]=0;for(e=0;29>=e;)p[e++]=0}o[256]=1;b=0;for(d=a.length;b<d;++b){e=g=0;for(f=Zlib.RawDeflate.Lz77MinLength;e<
f&&b+e!==d;++e)g=g<<8|a[b+e];void 0===i[g]&&(i[g]=[]);e=i[g];if(!(0<m--)){for(;0<e.length&&b-e[0]>h;)e.shift();if(b+Zlib.RawDeflate.Lz77MinLength>=d){j&&c(j,-1);e=0;for(f=d-b;e<f;++e)g=a[b+e],l[k++]=g,++o[g];break}0<e.length?(f=this.searchLongestMatch_(a,b,e),j?j.length<f.length?(g=a[b-1],l[k++]=g,++o[g],c(f,0)):c(j,-1):f.length<n?j=f:c(f,0)):j?c(j,-1):(g=a[b],l[k++]=g,++o[g])}e.push(b)}l[k++]=256;o[256]++;this.freqsLitLen=o;this.freqsDist=p;return USE_TYPEDARRAY?l.subarray(0,k):l};
Zlib.RawDeflate.prototype.searchLongestMatch_=function(a,c,b){var d,e,f=0,g,i,h,j=a.length;i=0;h=b.length;a:for(;i<h;i++){d=b[h-i-1];g=Zlib.RawDeflate.Lz77MinLength;if(f>Zlib.RawDeflate.Lz77MinLength){for(g=f;g>Zlib.RawDeflate.Lz77MinLength;g--)if(a[d+g-1]!==a[c+g-1])continue a;g=f}for(;g<Zlib.RawDeflate.Lz77MaxLength&&c+g<j&&a[d+g]===a[c+g];)++g;g>f&&(e=d,f=g);if(g===Zlib.RawDeflate.Lz77MaxLength)break}return new Lz77Match(f,c-e)};
Zlib.RawDeflate.prototype.getTreeSymbols_=function(a,c,b,d){var e=new (USE_TYPEDARRAY?Uint32Array:Array)(a+b),f,g,i=new (USE_TYPEDARRAY?Uint32Array:Array)(316),h=new (USE_TYPEDARRAY?Uint8Array:Array)(19);for(f=g=0;f<a;f++)e[g++]=c[f];for(f=0;f<b;f++)e[g++]=d[f];if(!USE_TYPEDARRAY){f=0;for(c=h.length;f<c;++f)h[f]=0}f=b=0;for(c=e.length;f<c;f+=g){for(g=1;f+g<c&&e[f+g]===e[f];++g);a=g;if(0===e[f])if(3>a)for(;0<a--;)i[b++]=0,h[0]++;else for(;0<a;)d=138>a?a:138,d>a-3&&d<a&&(d=a-3),10>=d?(i[b++]=17,i[b++]=
d-3,h[17]++):(i[b++]=18,i[b++]=d-11,h[18]++),a-=d;else if(i[b++]=e[f],h[e[f]]++,a--,3>a)for(;0<a--;)i[b++]=e[f],h[e[f]]++;else for(;0<a;)d=6>a?a:6,d>a-3&&d<a&&(d=a-3),i[b++]=16,i[b++]=d-3,h[16]++,a-=d}return{codes:USE_TYPEDARRAY?i.subarray(0,b):i.slice(0,b),freqs:h}};
Zlib.RawDeflate.prototype.getLengths_=function(a,c){var b=a.length,d,e=2*Zlib.RawDeflate.HUFMAX-1,f=new Zlib.Heap(2*Zlib.RawDeflate.HUFMAX),g=new (USE_TYPEDARRAY?Uint32Array:Array)(e),i=new (USE_TYPEDARRAY?Uint32Array:Array)(e),h,j;d=[];j=Infinity;for(h=0;h<b;h++)0===a[h]?d.push(h):j>a[h]&&(j=a[h]);for(h=0;2>b-d.length;h++)a[d.shift()]=1;if(0<(c|0)){if(7!==c&&15!==c)throw"invalid limit number";h=15===c?2584:55;d=b-d.length;d=h-d;j=(0-j*h+d-1)/d|0;for(h=0;h<b;h++)0!==a[h]&&(a[h]+=j)}if(!USE_TYPEDARRAY)for(h=
0;h<e;h++)g[h]=0,i[h]=0;for(h=0;h<b;h++)0<a[h]&&f.push(h,a[h]);for(h=Zlib.RawDeflate.HUFMAX;2<f.length;h++)e=f.pop(),j=f.pop(),g[e.index]=g[j.index]=h,f.push(h,e.value+j.value);for(;0<=h;h--)0<g[h]&&(i[h]=1+i[g[h]]);return USE_TYPEDARRAY?i.subarray(0,b):i.slice(0,b)};
Zlib.RawDeflate.prototype.getCodesFromLengths_=function(a){var c=new (USE_TYPEDARRAY?Uint16Array:Array)(a.length),b=[],d=[],e=0,f,g,i;f=0;for(g=a.length;f<g;f++)b[a[f]]=(b[a[f]]|0)+1;f=1;for(g=Zlib.RawDeflate.MaxCodeLength;f<=g;f++){d[f]=e;e+=b[f]|0;if(e>1<<f)throw"overcommitted";e<<=1}if(e<(1<<Zlib.RawDeflate.MaxCodeLength|0))throw"undercommitted";f=0;for(g=a.length;f<g;f++){e=d[a[f]];d[a[f]]+=1;b=c[f]=0;for(i=a[f];b<i;b++)c[f]=c[f]<<1|e&1,e>>>=1}return c};
ZLIB_RAWDEFLATE_EXPORT&&(goog.exportSymbol("Zlib.RawDeflate",Zlib.RawDeflate),goog.exportSymbol("Zlib.RawDeflate.CompressionType",Zlib.RawDeflate.CompressionType),goog.exportSymbol("Zlib.RawDeflate.CompressionType.NONE",Zlib.RawDeflate.CompressionType.NONE),goog.exportSymbol("Zlib.RawDeflate.CompressionType.FIXED",Zlib.RawDeflate.CompressionType.FIXED),goog.exportSymbol("Zlib.RawDeflate.CompressionType.DYNAMIC",Zlib.RawDeflate.CompressionType.DYNAMIC));var ZLIB_DEFLATE_EXPORT=!1;Zlib.Deflate=function(a){this.buffer=[];this.compressionType=Zlib.RawDeflate.CompressionType.DYNAMIC;"object"===typeof a&&"number"===typeof a.compressionType&&(this.compressionType=a.compressionType);this.rawDeflate=new Zlib.RawDeflate(a)};Zlib.Deflate.compress=function(a,c){return(new Zlib.Deflate(c)).compress(a)};
Zlib.Deflate.prototype.compress=function(a){var c,b,d,e;b=Zlib.CompressionMethod.DEFLATE;switch(b){case Zlib.CompressionMethod.DEFLATE:c=Math.LOG2E*Math.log(Zlib.RawDeflate.WindowSize)-8;break;default:throw"invalid compression method";}c=c<<4|b;switch(b){case Zlib.CompressionMethod.DEFLATE:switch(this.compressionType){case Zlib.RawDeflate.CompressionType.NONE:b=0;break;case Zlib.RawDeflate.CompressionType.FIXED:b=1;break;case Zlib.RawDeflate.CompressionType.DYNAMIC:b=2;break;default:throw"unsupported compression type";
}break;default:throw"invalid compression method";}b=b<<6|0;b|=31-(256*c+b)%31;d=(0,Zlib.Util.convertNetworkByteOrder)(Zlib.Adler32(a),4);a=this.rawDeflate.compress(a);e=[];e.push(c,b);(0,Zlib.Util.push)(e,a);(0,Zlib.Util.push)(e,d);return e};ZLIB_DEFLATE_EXPORT&&(goog.exportSymbol("Zlib.Deflate",Zlib.Deflate),goog.exportSymbol("Zlib.Deflate.compress",Zlib.Deflate.compress));exports.deflate=deflate;exports.deflateSync=deflateSync;exports.inflate=inflate;exports.inflateSync=inflateSync;exports.gunzip=gunzip;exports.gunzipSync=gunzipSync;function deflate(a,c,b){process.nextTick(function(){var d,e;try{e=deflateSync(a,b)}catch(f){d=f}c(d,e)})}function deflateSync(a,c){var b=(new Zlib.Deflate).compress(a);c||(c={});return c.noBuffer?b:toBuffer(b)}function inflate(a,c,b){process.nextTick(function(){var d,e;try{e=inflateSync(a,b)}catch(f){d=f}c(d,e)})}
function inflateSync(a,c){var b;a.subarray=a.slice;b=(new Zlib.Inflate(a)).inflate();c||(c={});return c.noBuffer?b:toBuffer(b)}function gunzip(a,c,b){process.nextTick(function(){var d,e;try{e=gunzipSync(a,b)}catch(f){d=f}c(d,e)})}function gunzipSync(a,c){var b;a.subarray=a.slice;b=(new Zlib.Gunzip(a)).inflate();c||(c={});return c.noBuffer?b:toBuffer(b)}function toBuffer(a){var c=new Buffer(a.length),b,d;b=0;for(d=a.length;b<d;++b)c[b]=a[b];return c};Zlib.CompressionMethod={DEFLATE:8,RESERVED:15};}).call(this);