;
(function () {

    'use strict';

    var events = [{
            "id": "254791420-meetup-id",
            "title": "Chocolatey readlly reaadfds lognf dsiti title bigger bigger fucking much bigger woop woop stars n shit?",
            "date": "2019-01-28",
            "talks": [{
                    "title": "Adding a layer of Chocolate(y)",
                    "speaker": "Gary Ewan Park"
                },
                {
                    "title": "HTTP API patterns",
                    "speaker": "Toby Henderson"
                }
            ]
        },
        {
            "id": "254791420-meetup-id",
            "title": "Chocolatey",
            "date": "2018-11-06",
            "talks": [{
                    "title": "Log Analytics",
                    "speaker": "Steve Spencer"
                },
                {
                    "title": "Azure Machine Learning for Developers",
                    "speaker": "Steve Spencer"
                }
            ]
        },
        {
            "id": "254791420-meetup-id",
            "title": "Lightning Talks!",
            "date": "2018-07-03",
            "talks": [{
                    "title": "Hastlayer Talk",
                    "speaker": "Zoltán Lehóczky"
                },
                {
                    "title": "Dapper",
                    "speaker": "Michael Steele"
                },
                {
                    "title": "Captains Log",
                    "speaker": "Andrew Gunn"
                },
                {
                    "title": "Error Monitoring with Raygun",
                    "speaker": "Kevin Smith"
                }
            ]
        }
    ];

    var dotnetsheff = {
        constants: {
            apiUri: "https://dotnetsheff.azureedge.net/api/"
        },
        viewModels: {}
    };
    dotnetsheff.viewModels.FeedbackEventsViewModel = function (events) {
        var self = this;

        self.events = ko.observableArray(events);
        self.selectedTalk = ko.observable();
        self.id = self.selectedTalk.title;
    };

    $(function () {
        if($('#feedback')[0]) {
            ko.applyBindings(new dotnetsheff.viewModels.FeedbackEventsViewModel(events), $('#feedback')[0]);
        }
    });
}());