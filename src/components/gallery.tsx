import { Image } from "./image";

export const Gallery = (props: any) => {
  // Ensure only 28 items (7 columns x 4 rows) are displayed
  const itemsToDisplay = props.data ? props.data.slice(0, 28) : [];

  return (
    <div id="portfolio" className="text-center py-6">
      <div className="container">
        <div className="section-title">
          <h6 className="text-primary text-uppercase mb-2">Tech Stack</h6>
          <h1 className="display-6 mb-4">Our Perfect Tech Stack</h1>
        </div>
        <div className="gallery-grid">
          {itemsToDisplay.length > 0
            ? itemsToDisplay.map((d: any, i: any) => (
                <div key={`${d.title}-${i}`} className="gallery-item">
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
