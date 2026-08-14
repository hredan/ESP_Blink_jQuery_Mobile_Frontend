'use strict';

var UiFunc = {
    handleFlipLed : function(){
        var checked = $("#flipAlarm").prop("checked");
        var gpio = parseInt($("#ledGpio").val(), 10);
        if (isNaN(gpio)) {
            gpio = 2;
        }
        SleepUinoCom.setLed(checked, gpio);
    },
};