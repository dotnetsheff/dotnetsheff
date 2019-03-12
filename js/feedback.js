;
(function () {

    'use strict';

    var dotnetsheff = {
        constants: {
            apiUri: "https://dotnetsheff-api.azurewebsites.net/api"
        },
        viewModels: {}
    };
    dotnetsheff.viewModels.FeedbackEventsViewModel = function () {
        var self = this;

        self.events = ko.observableArray();
        self.selectedTalk = ko.observable();
        self.id = self.selectedTalk.Title;
        
        var fetchFeedbackEvents = function(){
            $.getJSON(dotnetsheff.constants.apiUri + "/feedback/available-events", 
            function(data){
                self.events(data);
            });
        }; 

        (function(){
            fetchFeedbackEvents();
        })();
    };

    $(function () {
        if($('#feedback')[0]) {
            ko.applyBindings(new dotnetsheff.viewModels.FeedbackEventsViewModel(), $('#feedback')[0]);
        }
    });
}());