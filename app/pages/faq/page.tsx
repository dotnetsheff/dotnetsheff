import { PageHero } from '../../../components/page-hero';
import { getFaqs } from '../../../lib/data';
import { renderInlineLinks } from '../../../lib/render-inline-links';

export const metadata = {
  title: 'FAQ',
  description: 'Questions and answers about DotNetSheff',
};

export default function FaqPage() {
  const faqs = getFaqs();

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Questions and answers about DotNetSheff"
        image="/images/questions.jpg"
        learnMoreText="See questions and answers"
        targetId="faqs"
      />
      <div id="faqs">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <ul className="faq-list">
                {faqs.map((faq) => (
                  <li key={faq.question}>
                    <h2>{faq.question}</h2>
                    <p>{renderInlineLinks(faq.answer)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
