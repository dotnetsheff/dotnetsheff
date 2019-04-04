;
(function () {

    'use strict';

    var dotnetsheff = {
        constants: {
            apiUri: "https://dotnetsheff-api.azurewebsites.net/api"
        },
        viewModels: {}
    };

    dotnetsheff.viewModels.FeedbackTalkViewModel = function(talkId, title, speaker){
        this.talkId = talkId;
        this.title = title;
        this.speaker = speaker;
        this.rating = ko.observable();
        this.enjoyed= ko.observable();
        this.improvements= ko.observable();
    };

    dotnetsheff.viewModels.FeedbackEventViewModel = function(id, title, talks){
        this.id = ko.observable(id);
        this.title = ko.observable(title);
        this.talks = ko.observableArray(talks);
        this.Overall = ko.observable();
        this.Food = ko.observable();
        this.Drinks = ko.observable();
        this.Venue = ko.observable();
        this.enjoyed= ko.observable();
        this.improvements= ko.observable();
    }

    dotnetsheff.viewModels.FeedbackEventsViewModel = function () {
        var self = this;

        self.events = ko.observableArray();
        self.selectedEvent = ko.observable();

        var fetchFeedbackEvents = function(){
            $.getJSON(dotnetsheff.constants.apiUri + "/feedback/available-events", 
            function(data){
                var events = data.map(event => {
                    var talks = event.Talks.map((talk,index) => new dotnetsheff.viewModels.FeedbackTalkViewModel(`${event.Id}-${index}`, talk.Title, talk.Speaker));
                    return new dotnetsheff.viewModels.FeedbackEventViewModel(event.Id, event.Title, talks)
                });

                self.events(events);
            });
        };
        
        self.sendFeedback = function()
        {
             var request = {
                id: self.selectedEvent().id(),
                overall: self.selectedEvent().Overall(),
                food: self.selectedEvent().Food(),
                drinks: self.selectedEvent().Drinks(),
                venue: self.selectedEvent().Venue(),
                enjoyed: self.selectedEvent().enjoyed(),
                improvements: self.selectedEvent().improvements(),
                talks: self.selectedEvent().talks().map(talk => ({
                    id: talk.talkId,
                    title: talk.title,
                    speaker: talk.speaker, 
                    rating: talk.rating,
                    enjoyed:  talk.enjoyed,
                    improvements: talk.improvements
                }))
                };

            console.log(ko.toJSON(request));
            // $.post(dotnetsheff.constants.apiUri + "/feedback/")
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