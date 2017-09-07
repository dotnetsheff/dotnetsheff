---
layout: page
title: FAQ
hero-title: Frequently Asked Questions
hero-description: Questions and answers regarding dotnetsheff
hero-image: questions.jpg
learn-more-text: See questions and answers
order: 1
---

<div id="faqs">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <ul class="faq-list">
                    {% for faq in site.data.faq %}
                    <li class="animate-box">
                        <h2>{{ faq.question | markdownify }}</h2>
                        <p>{{ faq.answer | markdownify }}</p>
                    </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    </div>
</div>


