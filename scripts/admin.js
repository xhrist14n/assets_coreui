$('#ui-view').ajaxLoad();
$(document).ajaxComplete(function() {
    Pace.restart()
});