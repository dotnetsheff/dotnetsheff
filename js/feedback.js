;
(function () {

    'use strict';

    var dotnetsheff = {
        constants: {
            apiUri: "https://dotnetsheff-api.azurewebsites.net/api"
        },
        viewModels: {}
    };

    dotnetsheff.viewModels.FeedbackTalkViewModel = function(eventId, title, speaker){
        this.eventId = eventId;
        this.title = title;
        this.speaker = speaker;
        this.overallRating = ko.observable();
        this.enjoyAboutTalk = ko.observable();
        this.improvementsAboutTalk = ko.observable();
    };

    dotnetsheff.viewModels.FeedbackEventViewModel = function(){
        this.id = ko.observable();
        this.title = ko.observable();
        this.talks = ko.observableArray([]);
        this.overalRating = ko.observable();
        this.Overall = ko.observable();
        this.Food = ko.observable();
        this.Drinks = ko.observable();
        this.Venue = ko.observable();
        this.improvementsAboutEvent = ko.observable();
    }

    dotnetsheff.viewModels.FeedbackEventsViewModel = function () {
        var self = this;

        self.events = ko.observableArray();
        self.events.Talks = ko.observableArray();
        self.selectedEvent = ko.observable();
        self.enjoyAboutEvent = ko.observable();
        self.Overall = ko.observable();
        self.Food = ko.observable();
        self.Drinks = ko.observable();
        self.Venue = ko.observable();
        self.improvementsAboutEvent = ko.observable();
        self.enjoyAboutTalk = ko.observable();
        self.improvementsAboutTalk = ko.observable();

        var fetchFeedbackEvents = function(){
            $.getJSON(dotnetsheff.constants.apiUri + "/feedback/available-events", 
            function(data){
                self.events(data);
            });
        };
        
        self.sendFeedback = function(formElement)
        {
            var viewModel = {};
            viewModel.enjoyAboutEvent = self.enjoyAboutEvent();
            viewModel.Overall = self.Overall();
            viewModel.Food = self.Food();
            viewModel.Drinks = self.Drinks();
            viewModel.Venue = self.Venue();
            viewModel.improvementsAboutEvent = self.improvementsAboutEvent();
            viewModel.selectedEvent = self.selectedEvent();
            viewModel.enjoyAboutTalk = self.enjoyAboutTalk();
            viewModel.improvementsAboutTalk = self.improvementsAboutTalk();

            console.log(ko.toJSON(viewModel));
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