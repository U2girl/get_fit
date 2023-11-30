import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const HeroPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="px-10 space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-3">
          <img src={img1} alt="img1" className="heroImg" />
          <img src={img2} alt="img1" className="heroImg" />
          <img src={img3} alt="img1" className="heroImg" />
          <img src={img4} alt="img1" className="heroImg" />
          <img src={img5} alt="img1" className="heroImg" />
          <img src={img6} alt="img1" className="heroImg" />
        </div>
      </main>
    </React.Fragment>
  );
};

export default HeroPage;