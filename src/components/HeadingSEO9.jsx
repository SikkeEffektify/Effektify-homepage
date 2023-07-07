import React from "react";
import "./Heading.css";
import img from "../assets/how-google-search.webp";
import ContactForm from "./ContactForm";

export const HeadingSEO9 = ({
  mainTitle,
  listButton,
  city1,
  city1Link,
  city2,
  city2Link,
  city3,
  city3Link,
  city4,
  city4Link,
  city5,
  city5Link,
  city6,
  city6Link,
  city7,
  city7Link,
  city8,
  city8Link
}) => {
  return (
    <>
      <section class="py-20">
        <div
          id="accordion-flush"
          data-accordion="collapse "
          class="pb-5 text-center"
        >
          <h1 class="text-lg text-white pt-10 uppercase pb-5">{mainTitle}</h1>
          <h2 id="accordion-flush-heading-99" class="button-no-back ">
            <button
              type="button"
              class="button-no-back items-center justify-between w-full pt-5 font-medium text-center text-white"
              data-accordion-target="#accordion-flush-body-99"
              aria-expanded="false"
              aria-controls="accordion-flush-body-99"
            >
              <span class="uppercase">{listButton}</span>
              <i class="fa-solid fa-angles-down pr-2  text-rose-300 pl-5"></i>
            </button>
          </h2>
        </div>
        <div
          id="accordion-flush-body-99"
          class="hidden"
          aria-labelledby="accordion-flush-heading-99"
        >
          <div class="pb-5 border-b">
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city1Link}>{city1}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city2Link}>{city2}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city3Link}>{city3}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city4Link}>{city4}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city5Link}>{city5}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city6Link}>{city6}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city7Link}>{city7}</a>
            </p>
            <p class=" text-center pb-5 uppercase text-white">
              <a href={city8Link}>{city8}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
