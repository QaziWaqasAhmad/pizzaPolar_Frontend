import React from "react";

const OurLocations = () => {
  return (
    <>
      <div className="our-locations p-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="our-location-map ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43037329.26137382!2d-135.6879942970478!3d48.824065908239284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2s!4v1694965131987!5m2!1sen!2s"
                  width="500"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="our-location-content ">
                <h2>Our Locations</h2>
                <p className="pt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius modi hic repellat inventore corrupti quas blanditiis, ullam iure laboriosam veniam sit voluptas recusandae incidunt quod reprehenderit consequatur deleniti fuga rem tempora non veritatis! Consequatur amet sint inventore quisquam aut placeat at provident deleniti quidem, assumenda et exercitationem incidunt voluptate perspiciatis ullam repellendus saepe nisi rem autem corrupti repellat laboriosam consectetur! Eius, modi! Eveniet, voluptatibus a est magni aspernatur praesentium ratione molestiae esse sunt error neque, obcaecati enim, magnam expedita aliquam quidem alias corporis? Repellat id aspernatur corrupti magnam quidem rem officiis deleniti neque corporis, accusantium perferendis accusamus, provident delectus deserunt?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLocations;
