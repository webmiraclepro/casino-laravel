View("JackpotBoxes",{JACKPOT_BLINK_COMPLETE:"jackpotBlinkComplete"},function(){function d(a,b){var c=this._jackpotFieldsCanvas.getContext2D();c.fillText(this._jackpotFieldsParams[a].text,this._jackpotFieldsParams[a].x,14);this._jackpotFieldsParams[a].width=c.measureText(this._jackpotFieldsParams[a].text).width}function e(a){var b=this._jackpotFieldsCanvas.getContext2D(),c=this._jackpotFieldsParams[a].width;b.clearRect(this._jackpotFieldsParams[a].x-c/2,14,c,26)}function f(a){if(this._jackpotBlinking[a]){var b=
this._jackpotNames[a].visible();this._jackpotNames[a].visible(!b);b?e.call(this,a):d.call(this,a)}this._jackpotBlinkCurrentCount[a]++;if(this._jackpotBlinkCurrentCount[a]==this._jackpotBlinkTotalCount[a]&&1!=this._jackpotBlinkTotalCount[a]){this._jackpotBlinking[a]=!1;this._jackpotBlinkTotalCount[a]=1;this._jackpotBlinkCurrentCount[a]=0;clearInterval(this._jackpotBlinkTimers[a]);var c=this;this._jackpotBlinkTimers[a]=setInterval(function(){f.call(c,a)},1E4);this.dispatchEvent(new Event(JackpotBoxes.JACKPOT_BLINK_COMPLETE,
{index:a}))}else this._jackpotBlinkCurrentCount[a]==this._jackpotBlinkTotalCount[a]&&1==this._jackpotBlinkTotalCount[a]&&(this._jackpotNames[a].visible(!1),clearInterval(this._jackpotBlinkTimers[a]),this._jackpotBlinkTimers[a]=0)}return{init:function(a,b,c){this._config=c;this._jackpotFields;this._jackpotFieldsCanvas;this._jackpotFieldsParams=[{x:206,width:0,text:""},{x:417,width:0,text:""},{x:827,width:0,text:""},{x:1074,width:0,text:""}];this._jackpotNames;this._jackpotBlinkTimers;this._jackpotBlinkTotalCount;
this._jackpotBlinkCurrentCount;this._jackpotBlinking;this._jackpotTweens;this._jackpotTweensUpdateIntervals;this._jackpotValues;this._jackpotFinalValues;this._super("jackpotBoxes",a,b);void 0==this._config.numberOfCents&&(this._config.numberOfCents=2);this._jackpotValues={jackpot1:0,jackpot2:0,jackpot3:0,jackpot4:0};this._jackpotFinalValues=[];this._jackpotFields=[];this._jackpotNames=[];this._jackpotTweens=[];this._jackpotTweensUpdateIntervals=[];this._jackpotBlinkTimers=[0,0,0,0];this._jackpotBlinkTotalCount=
[0,0,0,0];this._jackpotBlinkCurrentCount=[0,0,0,0];this._jackpotBlinking=[!1,!1,!1,!1];a="";this._config.currency&&(a=this._config.currencyType.charAt(0)+"</br>"+this._config.currencyType.charAt(1)+"</br>"+this._config.currencyType.charAt(2));b=[{field:152,currency:269},{field:352,currency:489},{field:753,currency:910},{field:990,currency:1166}];for(c=0;4>c;c++)this._jackpotFields[c]=new TextView("textField jackpotField jackpot"+(c+1),"",b[c].field,13),this._jackpotNames[c]=new TextView("textField winnerName jackpot"+
(c+1),"",b[c].field,1),this._jackpotNames[c].visible(!1),this.addChildren(this._jackpotNames[c]),this.addChild(new TextView("jackpotCurrency jackpotCurrency"+(c+1),a,b[c].currency,7));this._jackpotFieldsCanvas=new CanvasView("",0,0);this._jackpotFieldsCanvas.setSize(1280,54);a=this._jackpotFieldsCanvas.getContext2D();a.font="26px arial";a.textAlign="center";a.textBaseline="top";a.fillStyle="white";this.addChild(this._jackpotFieldsCanvas)},denomination:function(a){if(void 0==a)return this._config.denomination;
this._config.denomination=a;for(a=0;4>a;a++)this.setJackpot(a,this._jackpotFinalValues[a])},setJackpot:function(a,b){this._jackpotTweens[a]&&(this._jackpotTweens[a].kill(),this._jackpotTweens[a]=null);var c;c=this._config.currency?Utils.formatNumber(b,100,!0,0==this._config.numberOfCents):Utils.formatNumber(b,this._config.denomination);this._jackpotFieldsParams[a].text=c;e.call(this,a);d.call(this,a);this._jackpotFinalValues[a]=b;0==a?this._jackpotValues.jackpot1=b:1==a?this._jackpotValues.jackpot2=
b:2==a?this._jackpotValues.jackpot3=b:3==a&&(this._jackpotValues.jackpot4=b)},animateJackpot:function(a,b,c){this._jackpotBlinking[b]||this.setJackpot(b,a)},completeJackpotAnimation:function(a){if(this._jackpotTweens[a]){this._jackpotTweens[a].kill();this._jackpotTweens[a]=null;var b=Utils.formatNumber(this._jackpotFinalValues[a],Math.pow(10,this._config.numberOfCents),!0);0==this._config.numberOfCents&&(b=b.split(".")[0]);this._jackpotFields[a].setText(b)}},setJackpotScreenName:function(a,b){this._jackpotBlinkTimers[a]&&
(clearInterval(this._jackpotBlinkTimers[a]),this._jackpotBlinkTimers[a]=0,this._jackpotNames[a].visible(!1),this._jackpotFields[a].visible(!0),this._jackpotBlinking[a]=!1);if(b&&""!=b){10<b.length&&(b=b.substr(0,10),b+="...");this._jackpotNames[a].setText(b);this._jackpotNames[a].visible(!0);this._jackpotBlinking[a]=!0;var c=this;this._jackpotBlinkTimers[a]=setInterval(function(){f.call(c,a)},500);this._jackpotBlinkTotalCount[a]=10;this._jackpotBlinkCurrentCount[a]=0}},stopJackpotBlink:function(a){this._jackpotBlinkTimers[a]&&
(clearInterval(this._jackpotBlinkTimers[a]),this._jackpotBlinkTimers[a]=0,this._jackpotNames[a].visible(!1),this._jackpotFields[a].visible(!0),this._jackpotBlinking[a]=!1)}}}());
