import Navbar from "../components/Navbar";
import React from "react";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <main id="body" className="font-sans p-2 m-2">
        <div>
          {/* <h2 className="uppercase mb-6 mt-3 text-[var(--primary)] font-bold lg:text-4xl lg:text-center lg:mt-[50px]">
            welcome to psc webpage
          </h2> */}
          <div className="lg:flex lg:gap-5 lg:justify-center lg:px-10 mt-5 mb-5">
            <div className="mb-5 lg:w-[300px]">
              <h4 className="text-center mb-1 text-[1.5rem] font-[300]">
                About Us
              </h4>
              <p className="text-sm leading-relaxed text-left">
                &emsp;Welcome to our transportation business, where we
                specialize in the seamless movement of containers between yards
                and factories. Established in 2012, we have built a reputation
                for reliability and efficiency in our industry.
              </p>
            </div>
            <div className="mb-5 lg:w-[300px]">
              <h4 className="text-center mb-1 text-[1.5rem] font-[300]">
                Our Mission
              </h4>
              <p className="text-sm leading-relaxed text-left">
                &emsp;Our mission: exceptional transportation services, meeting
                unique client needs with safety, sustainability, and innovation.
                Every shipment a commitment to on-time delivery in perfect
                condition.
              </p>
            </div>
            <div className="mb-5 lg:w-[300px]">
              <h4 className="text-center mb-1 text-[1.5rem] font-[300]">
                Our Core Values
              </h4>
              <p className="text-sm leading-relaxed text-left">
                &emsp;Our values of dependability, teamwork, and continuous
                improvement are at the heart of everything we do. We are proud
                to be a trusted partner to businesses across the region, and we
                look forward to serving you soon.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center gap-2 mb-5 lg:mb-10">
            <div className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] overflow-hidden flex items-center">
              <img
                src="/images/yard_middle.jpg"
                alt="yard front psc transport"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] overflow-hidden flex items-center ">
              <img
                src="/images/yard_side_dark.jpg"
                alt="yard front psc transport"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] overflow-hidden flex items-center ">
              <img
                src="/images/yard_side_light.jpg"
                alt="yard front psc transport"
                className="object-cover object-center h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col text-left mb-3 lg:w-[80%] lg:mx-auto">
            <div className="flex items-center justify-evenly mb-5">
              <ul className="list-disc pl-5 text-md mb-5 lg:mb-7 lg:w-[40%]">
                <h3 className="text-4xl font-extrabold mb-5 text-[var(--primary)]">
                  Our Service
                </h3>
                <li className="mb-3">
                  Yard-to-Factory Transport: We will pick up your containers at
                  the yard and deliver them directly to your factory, ensuring
                  that your goods arrive on time and in perfect condition.
                </li>
                <li>
                  Factory-to-Yard Transport: We will pick up containers from
                  your factory and transport them safely to the yard, ready for
                  your next shipment.
                </li>
              </ul>
              <div className="w-0 h-0 lg:w-[40%] lg:h-[200px] overflow-hidden">
                <img
                  src="/images/yard_container_full.jpg"
                  alt="container"
                  className="object-cover object-center h-full w-full"
                />
              </div>
            </div>
            <div>
              <div className="lg:flex items-center justify-evenly lg:mb-5">
                <div className="w-full h-[200px] lg:w-[40%] lg:h-[200px] overflow-hidden mb-5 lg:mb-0">
                  <img
                    src="/images/cargo_ship.jpg"
                    alt="cargo ship container transports"
                    className="object-cover object-left h-full w-full"
                  />
                </div>
                <div className="lg:w-[50%]">
                  <p className="text-md leading-relaxed">
                    Each of our services is backed by our commitment to safety,
                    sustainability, and innovation, and we use the latest
                    technology to ensure the smooth and efficient delivery of
                    your goods. Whether you need a one-off shipment or a regular
                    service, we have the expertise and resources to meet your
                    needs.
                  </p>
                </div>
              </div>
              <div className="lg:w-[90%] lg:mx-auto">
                <p className="text-md leading-relaxed">
                  &emsp;Our transportation business operates a fleet of
                  top-of-the-line vehicles designed to provide the utmost in
                  safety and efficiency. Our vehicles are equipped with the
                  latest technology and undergo regular maintenance to ensure
                  they are always ready to provide reliable and seamless
                  transport.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left lg:w-[80%] lg:mx-auto">
            <div className="lg:flex lg:justify-evenly items-center mb-5">
              <div className="lg:w-[40%]">
                <ul className="list-disc pl-5 text-md mb-5">
                  <h3 className="text-4xl font-extrabold mb-5 text-[var(--primary)]">
                    Our vehicles
                  </h3>
                  <li>
                    2 Axles, 10-Wheel Vehicles: Our 2-axle, 10-wheel vehicles
                    have a capacity to accommodate 20DC, 40DC, and 40HC
                    containers and are equipped with air conditioning and GPS
                    tracking for added comfort and safety.
                  </li>
                </ul>
                <p className="text-md leading-relaxed mb-5">
                  We are proud to offer a fleet of vehicles that are safe,
                  reliable, and well-maintained, ensuring that your goods are
                  transported with the utmost care and precision.
                </p>
              </div>
              <div className="w-full h-[200px] lg:w-[40%] lg:h-[200px] overflow-hidden mb-5 lg:mb-0">
                <img
                  src="/images/yard_back.jpg"
                  alt="trailer container yard"
                  className="object-cover object-left h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[var(--secondary)] text-white py-6 font-sans">
        <div className="container mx-auto px-5">
          <h2 className="uppercase font-bold mb-4">Contact Us</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <h5 className="mb-3 font-bold">HEAD OFFICE</h5>
              <p className="mb-3">Tel. 084-356-5558/086-301-3989</p>
              <p className="mb-3">
                Email: knong39@yahoo.com, panyawadee1@yahoo.co.th
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; PSC Transportation. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
