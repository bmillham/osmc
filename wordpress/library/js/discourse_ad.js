!function(a,b,c){"use strict";var d,e=this,f="",g=0,h=0,i=0,j=".adunit",k={},l=!1,m="googleAdUnit",n=function(b,c,e){g=0,i=0,f=b,d=a(c),v(),o(e),a(function(){p(),q()})},o=function(d){if(k={setTargeting:{},setCategoryExclusion:"",setLocation:"",enableSingleRequest:!0,collapseEmptyDivs:"original",refreshExisting:!0,disablePublisherConsole:!1,disableInitialLoad:!1,noFetch:!1,namespace:c,sizeMapping:{}},"undefined"==typeof d.setUrlTargeting||d.setUrlTargeting){var e=r(d.url);a.extend(!0,k.setTargeting,{inURL:e.inURL,URLIs:e.URLIs,Query:e.Query,Domain:e.Domain})}a.extend(!0,k,d),k.googletag&&b.googletag.cmd.push(function(){a.extend(!0,b.googletag,k.googletag)})},p=function(){d.each(function(){var c=a(this);g++;var d=t(c),e=s(c,d),h=u(c);c.data("existingContent",c.html()),c.html("").addClass("display-none"),b.googletag.cmd.push(function(){var g,i=c.data(m);g=i?i:c.data("outofpage")?b.googletag.defineOutOfPageSlot("/"+f+"/"+d,e).addService(b.googletag.pubads()):c.data("companion")?b.googletag.defineSlot("/"+f+"/"+d,h,e).addService(b.googletag.companionAds()).addService(b.googletag.pubads()):b.googletag.defineSlot("/"+f+"/"+d,h,e).addService(b.googletag.pubads());var j=c.data("targeting");j&&a.each(j,function(a,b){g.setTargeting(a,b)});var l=c.data("exclusions");if(l){var n,o=l.split(",");a.each(o,function(b,c){n=a.trim(c),n.length>0&&g.setCategoryExclusion(n)})}var p=c.data("size-mapping");if(p&&k.sizeMapping[p]){var q=b.googletag.sizeMapping();a.each(k.sizeMapping[p],function(a,b){q.addSize(b.browser,b.ad_sizes)}),g.defineSizeMapping(q.build())}c.data(m,g),"function"==typeof k.beforeEachAdLoaded&&k.beforeEachAdLoaded.call(this,c)})}),b.googletag.cmd.push(function(){if(k.enableSingleRequest&&b.googletag.pubads().enableSingleRequest(),a.each(k.setTargeting,function(a,c){b.googletag.pubads().setTargeting(a,c)}),"object"==typeof k.setLocation&&("number"==typeof k.setLocation.latitude&&"number"==typeof k.setLocation.longitude&&"number"==typeof k.setLocation.precision?b.googletag.pubads().setLocation(k.setLocation.latitude,k.setLocation.longitude,k.setLocation.precision):"number"==typeof k.setLocation.latitude&&"number"==typeof k.setLocation.longitude&&b.googletag.pubads().setLocation(k.setLocation.latitude,k.setLocation.longitude)),k.setCategoryExclusion.length>0){var c,e=k.setCategoryExclusion.split(",");a.each(e,function(d,e){c=a.trim(e),c.length>0&&b.googletag.pubads().setCategoryExclusion(c)})}k.collapseEmptyDivs&&b.googletag.pubads().collapseEmptyDivs(),k.disablePublisherConsole&&b.googletag.pubads().disablePublisherConsole(),k.companionAds&&(b.googletag.companionAds().setRefreshUnfilledSlots(!0),k.disableInitialLoad||b.googletag.pubads().enableVideoAds()),k.disableInitialLoad&&b.googletag.pubads().disableInitialLoad(),k.noFetch&&b.googletag.pubads().noFetch(),b.googletag.pubads().addEventListener("slotRenderEnded",function(b){i++;var c=a("#"+b.slot.getSlotId().getDomId()),e=b.isEmpty?"none":"block",f=c.data("existingContent");"none"===e&&a.trim(f).length>0&&"original"===k.collapseEmptyDivs&&(c.show().html(f),e="block display-original"),c.removeClass("display-none").addClass("display-"+e),"function"==typeof k.afterEachAdLoaded&&k.afterEachAdLoaded.call(this,c,b),"function"==typeof k.afterAllAdsLoaded&&i===g&&k.afterAllAdsLoaded.call(this,d)}),b.googletag.enableServices()})},q=function(){d.each(function(){var c=a(this),d=c.data(m);b.googletag.cmd.push(k.refreshExisting&&d&&c.hasClass("display-block")?function(){b.googletag.pubads().refresh([d])}:function(){b.googletag.display(c.attr("id"))})})},r=function(a){var c=(a||b.location.toString()).match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/),d=c[4]||"",e=(c[5]||"").replace(/\/$/,""),f=c[7]||"",g=new RegExp("/([^/]*)","ig"),h=e.match(g),i=["/"],j="";if(h&&"/"!==e){var k="",l=h.length;if(l>0)for(var m=0;l>m;m++){k=h[m],i.push(k);for(var n=m+1;l>n;n++)k+=h[n],i.push(k);0===m&&(i.splice(-1,1),j=k)}i.push(j)}i=i.reverse();var o=f.replace(/\=/gi,":").split("&");return{Domain:d,inURL:i,URLIs:i[0],Query:o}},s=function(a,b){return h++,a.attr("id")||a.attr("id",b.replace(/[^A-z0-9]/g,"_")+"-auto-gen-id-"+h).attr("id")},t=function(a){var b=a.data("adunit")||k.namespace||a.attr("id")||"";return"function"==typeof k.alterAdUnitName&&(b=k.alterAdUnitName.call(this,b,a)),b},u=function(b){var c=[],d=b.data("dimensions");if(d){var e=d.split(",");a.each(e,function(a,b){var d=b.split("x");c.push([parseInt(d[0],10),parseInt(d[1],10)])})}else c.push([b.width(),b.height()]);return c},v=function(){if(l=l||a('script[src*="googletagservices.com/tag/js/gpt.js"]').length,!l){b.googletag=b.googletag||{},b.googletag.cmd=b.googletag.cmd||[];var c=document.createElement("script");c.async=!0,c.type="text/javascript",c.onerror=function(){w()};var d="https:"===document.location.protocol;c.src=(d?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(c,e),"none"===c.style.display&&w()}},w=function(){var c=b.googletag.cmd;setTimeout(function(){var d=function(a,c,d){return b.googletag.ads.push(d),b.googletag.ads[d]={renderEnded:function(){},addService:function(){return this}},b.googletag.ads[d]};b.googletag={cmd:{push:function(a){a.call(e)}},ads:[],pubads:function(){return this},noFetch:function(){return this},disableInitialLoad:function(){return this},disablePublisherConsole:function(){return this},enableSingleRequest:function(){return this},setTargeting:function(){return this},collapseEmptyDivs:function(){return this},enableServices:function(){return this},defineSlot:function(a,b,c){return d(a,b,c,!1)},defineOutOfPageSlot:function(a,b){return d(a,[],b,!0)},display:function(a){return b.googletag.ads[a].renderEnded.call(e),this}},a.each(c,function(a,c){b.googletag.cmd.push(c)})},50)};!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a)}(function(a){a.dfp=a.fn.dfp=function(a,b){b=b||{},a===c&&(a=f),"object"==typeof a&&(b=a,a=b.dfpID||f);var d=this;return"function"==typeof this&&(d=j),n(a,d,b),this}})}(window.jQuery||window.Zepto||window.tire,window);

var ad = true;

var bannertext = "OSMC's July update is here with Kodi 15, click here to learn more";
var bannerlink = "http://bit.ly/1IHiX1F";
var bannerimg = "https://osmc.tv/wp-content/themes/osmc/library/images/forum_banner_back.png";

Discourse.DiscoveryView = Ember.View.extend({
  _insertBanner: function() {
    if ( ad ) {
      this.$(".list-container").prepend("<div class='toplist_ad' data-adunit='discourse_toplist' data-size-mapping='toplist'></div>");

      this.$(".toplist_ad").dfp({
        dfpID:'302320750',
        sizeMapping: {
          'toplist': [
            {browser: [1100, 0], ad_sizes: [970, 90]},
            {browser: [810, 0], ad_sizes: [728, 90]},
            {browser: [530, 0], ad_sizes: [468, 60]},
            {browser: [0, 0], ad_sizes: [320, 50]}
          ]
        }
      });
      
    } else {
      
      this.$(".list-container").prepend("<a href='" + bannerlink + "'><div class='toplist_banner' style='color:#fafafa; padding:2.5em 1em; margin:0.2em 0;'><h2 style='color:white; font-size:130%; font-weight:300; text-align: center;'>" + bannertext + "</h2></div></a>");
      this.$(".toplist_banner").css({background : "url(" + bannerimg + ")"});
    }
    
  }.on('didInsertElement'),
  
  _insertDonateButton: function() {
    this.$(".list-controls .container").before('<a target="_blank" href="https://osmc.tv/contribute/donate/#donate"><button class="btn btn-default donate-button"><i class="fa fa-heart"></i>Donate</button></a>')
  }.on('didInsertElement')
});
