import React from "react";
import "./Heading.css";

export const HeadingSEO2 = ({
  mainTitle1,
  mainDesc,
  buttonText,
  buttonLink,
  mainTitle2,
  mainDesc2,
  cardTitle,
  cardDesc,
}) => {
  return (
    <>
      <div class="pt-20 heading-container text-center text-black bg-white">
        <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
        <div dangerouslySetInnerHTML={{ __html: mainDesc }}></div>
      </div>

      <section class="bg-white text-center pt-20 pb-20">
        <a href={buttonLink} class="cards-video-button pt-3 pb-3 uppercase">
          {buttonText}
        </a>
      </section>

      <section class="bg-white heading-container">
        <h1 class="text-center pt-5 text-2xl pb-10 uppercase">{mainTitle2}</h1>
        <div dangerouslySetInnerHTML={{ __html: mainDesc2 }}></div>
      </section>

      <section class="bg-white">
        <div class="pt-5 cards-container p-6">
          <div class="max-w-sm p-6 pb-10  shadow headingSEO-card2 pt-10">
            <h1 class="text-center text-xl pt-5 pb-5 text-white">
              {cardTitle}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: cardDesc }}></div>
          </div>
        </div>
      </section>
    </>
  );
};
