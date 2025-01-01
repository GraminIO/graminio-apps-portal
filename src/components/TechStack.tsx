import { Image } from "./Image";
import { Gallery as data } from "../data/data.json";

export const TechStack = () => {
  return (
    <div id="portfolio" className="text-center py-6">
      <div className="container">
        <div className="section-title">
          <h6 className="text-primary text-uppercase mb-2">Tech Stack</h6>
          <h1 className="display-6 mb-4">Our Perfect Tech Stack</h1>
        </div>
        <div className="gallery-grid">
          {data.length > 0
            ? data.map((d: any, i: any) => (
                <div key={`${d.title}-${i}`} className="gallery-item">
                  <Image
                    title={d.title}
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
