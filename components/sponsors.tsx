import { getCurrentSponsors } from '../lib/data';

export function Sponsors() {
  const sponsors = getCurrentSponsors();

  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section id="sponsors">
      <div className="container">
        <div className="row row-bottom-padded-md">
          <div className="col-md-6 col-md-offset-3 text-center">
            <h2 className="lead">Our Sponsors</h2>
            <p className="sub-lead">Our sponsors help keep DotNetSheff free, welcoming, and well supplied with pizza and drinks.</p>
          </div>
        </div>

        {chunk(sponsors, 3).map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((sponsor) => (
              <div className="col-md-4 col-sm-6 col-xxs-12" key={sponsor.name}>
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-item">
                  <img src={`/images/sponsors/${sponsor.image}`} alt={sponsor.name} className="img-responsive center-block" />
                  <div className="text">
                    <h2>{sponsor.name} - {sponsor.type}</h2>
                    <p>{sponsor.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function chunk<T>(items: T[], size: number) {
  const rows: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }
  return rows;
}
