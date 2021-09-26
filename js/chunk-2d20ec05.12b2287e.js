(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ec05"],{b166:function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return r(1,arguments),t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function i(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){if(r(1,arguments),!a(t)&&"number"!==typeof t)return!1;var e=i(t);return!isNaN(Number(e))}n.d(e,"a",(function(){return qt}));var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},s=function(t,e,n){var r,a=u[t];return r="string"===typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},c=s;function d(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var h={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},l={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},m={date:d({formats:h,defaultWidth:"full"}),time:d({formats:l,defaultWidth:"full"}),dateTime:d({formats:f,defaultWidth:"full"})},g=m,w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},v=function(t,e,n,r){return w[t]},b=v;function y(t){return function(e,n){var r,a=n||{},i=a.context?String(a.context):"standalone";if("formatting"===i&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,u=a.width?String(a.width):o;r=t.formattingValues[u]||t.formattingValues[o]}else{var s=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[s]}var d=t.argumentCallback?t.argumentCallback(e):e;return r[d]}}var p={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},T={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},C={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},M={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},x={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},D={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},P=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},k={ordinalNumber:P,era:y({values:p,defaultWidth:"wide"}),quarter:y({values:T,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:y({values:C,defaultWidth:"wide"}),day:y({values:M,defaultWidth:"wide"}),dayPeriod:y({values:x,defaultWidth:"wide",formattingValues:D,defaultFormattingWidth:"wide"})},U=k;function S(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?Y(s,(function(t){return t.test(u)})):W(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(u.length);return{value:o,rest:d}}}function W(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Y(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function E(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var a=r[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var u=e.slice(a.length);return{value:o,rest:u}}}var O=/^(\d+)(th|st|nd|rd)?/i,N=/\d+/i,q={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},H={any:[/^b/i,/^(a|c)/i]},z={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},F={any:[/1/i,/2/i,/3/i,/4/i]},j={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},L={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},X={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Q={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},G={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},B={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},A={ordinalNumber:E({matchPattern:O,parsePattern:N,valueCallback:function(t){return parseInt(t,10)}}),era:S({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),quarter:S({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),day:S({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:G,defaultMatchWidth:"any",parsePatterns:B,defaultParseWidth:"any"})},R=A,J={code:"en-US",formatDistance:c,formatLong:g,formatRelative:b,localize:U,match:R,options:{weekStartsOn:0,firstWeekContainsDate:1}},_=J;function I(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function V(t,e){r(2,arguments);var n=i(t).getTime(),a=I(e);return new Date(n+a)}function K(t,e){r(2,arguments);var n=I(e);return V(t,-n)}function $(t,e){var n=t<0?"-":"",r=Math.abs(t).toString();while(r.length<e)r="0"+r;return n+r}var Z={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return $("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):$(n+1,2)},d:function(t,e){return $(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return $(t.getUTCHours()%12||12,e.length)},H:function(t,e){return $(t.getUTCHours(),e.length)},m:function(t,e){return $(t.getUTCMinutes(),e.length)},s:function(t,e){return $(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return $(a,e.length)}},tt=Z,et=864e5;function nt(t){r(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),o=n-a;return Math.floor(o/et)+1}function rt(t){r(1,arguments);var e=1,n=i(t),a=n.getUTCDay(),o=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function at(t){r(1,arguments);var e=i(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=rt(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=rt(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function it(t){r(1,arguments);var e=at(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=rt(n);return a}var ot=6048e5;function ut(t){r(1,arguments);var e=i(t),n=rt(e).getTime()-it(e).getTime();return Math.round(n/ot)+1}function st(t,e){r(1,arguments);var n=e||{},a=n.locale,o=a&&a.options&&a.options.weekStartsOn,u=null==o?0:I(o),s=null==n.weekStartsOn?u:I(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=i(t),d=c.getUTCDay(),h=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function ct(t,e){r(1,arguments);var n=i(t,e),a=n.getUTCFullYear(),o=e||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:I(s),d=null==o.firstWeekContainsDate?c:I(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(a+1,0,d),h.setUTCHours(0,0,0,0);var l=st(h,e),f=new Date(0);f.setUTCFullYear(a,0,d),f.setUTCHours(0,0,0,0);var m=st(f,e);return n.getTime()>=l.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function dt(t,e){r(1,arguments);var n=e||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:I(i),u=null==n.firstWeekContainsDate?o:I(n.firstWeekContainsDate),s=ct(t,e),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=st(c,e);return d}var ht=6048e5;function lt(t,e){r(1,arguments);var n=i(t),a=st(n,e).getTime()-dt(n,e).getTime();return Math.round(a/ht)+1}var ft={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return tt.y(t,e)},Y:function(t,e,n,r){var a=ct(t,r),i=a>0?a:1-a;if("YY"===e){var o=i%100;return $(o,2)}return"Yo"===e?n.ordinalNumber(i,{unit:"year"}):$(i,e.length)},R:function(t,e){var n=at(t);return $(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return $(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return $(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return $(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return tt.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return $(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=lt(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):$(a,e.length)},I:function(t,e,n){var r=ut(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):$(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):tt.d(t,e)},D:function(t,e,n){var r=nt(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):$(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return $(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return $(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return $(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours(),a=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?ft.noon:0===a?ft.midnight:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?ft.evening:a>=12?ft.afternoon:a>=4?ft.morning:ft.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return tt.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):tt.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):$(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):$(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):tt.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):tt.s(t,e)},S:function(t,e){return tt.S(t,e)},X:function(t,e,n,r){var a=r._originalDate||t,i=a.getTimezoneOffset();if(0===i)return"Z";switch(e){case"X":return wt(i);case"XXXX":case"XX":return vt(i);case"XXXXX":case"XXX":default:return vt(i,":")}},x:function(t,e,n,r){var a=r._originalDate||t,i=a.getTimezoneOffset();switch(e){case"x":return wt(i);case"xxxx":case"xx":return vt(i);case"xxxxx":case"xxx":default:return vt(i,":")}},O:function(t,e,n,r){var a=r._originalDate||t,i=a.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+gt(i,":");case"OOOO":default:return"GMT"+vt(i,":")}},z:function(t,e,n,r){var a=r._originalDate||t,i=a.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+gt(i,":");case"zzzz":default:return"GMT"+vt(i,":")}},t:function(t,e,n,r){var a=r._originalDate||t,i=Math.floor(a.getTime()/1e3);return $(i,e.length)},T:function(t,e,n,r){var a=r._originalDate||t,i=a.getTime();return $(i,e.length)}};function gt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+$(i,2)}function wt(t,e){if(t%60===0){var n=t>0?"-":"+";return n+$(Math.abs(t)/60,2)}return vt(t,e)}function vt(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t),i=$(Math.floor(a/60),2),o=$(a%60,2);return r+i+n+o}var bt=mt;function yt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function pt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function Tt(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return yt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",yt(a,e)).replace("{{time}}",pt(i,e))}var Ct={p:pt,P:Tt},Mt=Ct;function xt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Dt=["D","DD"],Pt=["YY","YYYY"];function kt(t){return-1!==Dt.indexOf(t)}function Ut(t){return-1!==Pt.indexOf(t)}function St(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Wt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Et=/^'([^]*?)'?$/,Ot=/''/g,Nt=/[a-zA-Z]/;function qt(t,e,n){r(2,arguments);var a=String(e),u=n||{},s=u.locale||_,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:I(c),h=null==u.firstWeekContainsDate?d:I(u.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=s.options&&s.options.weekStartsOn,f=null==l?0:I(l),m=null==u.weekStartsOn?f:I(u.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=i(t);if(!o(g))throw new RangeError("Invalid time value");var w=xt(g),v=K(g,w),b={firstWeekContainsDate:h,weekStartsOn:m,locale:s,_originalDate:g},y=a.match(Yt).map((function(t){var e=t[0];if("p"===e||"P"===e){var n=Mt[e];return n(t,s.formatLong,b)}return t})).join("").match(Wt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Ht(n);var a=bt[r];if(a)return!u.useAdditionalWeekYearTokens&&Ut(n)&&St(n,e,t),!u.useAdditionalDayOfYearTokens&&kt(n)&&St(n,e,t),a(v,n,s.localize,b);if(r.match(Nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return y}function Ht(t){return t.match(Et)[1].replace(Ot,"'")}}}]);