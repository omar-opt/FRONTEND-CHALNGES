"use client";
import React from "react";

import { useState } from "react";
const data: Record<string, string> = {
  "United States": "Washington, D.C.",
  Canada: "Ottawa",
  Mexico: "Mexico City",
  "United Kingdom": "London",
  France: "Paris",
  Germany: "Berlin",
  Italy: "Rome",
  Spain: "Madrid",
  Japan: "Tokyo",
  China: "Beijing",
  India: "New Delhi",
  Brazil: "Brasília",
  Argentina: "Buenos Aires",
  Australia: "Canberra",
};
export type Data = {
  country: string;
  capital: string;
};

function Page() {
  const [first, setFirst] = useState(false);
  const [valueChecked, setValueChecked] = useState("");
  const [controller, setController] = useState<boolean>();
  const countries = Object.keys(data);
  const capital = Object.values(data);

  const hundelClickCountry = (country: string) => {
    if (first) {
      if (valueChecked === data[country]) {
        setController(true);
        alert("correct");
        delete data[country];
        setController(false);
        setValueChecked("");
        setFirst(false);
      } else {
        setController(false);
        alert("incorrect");
        setController(false);
        setValueChecked("");
        setFirst(false);
      }
    } else {
      setFirst(true);
      setValueChecked(country);
    }
  };
  const hundelClickCapital = (capital: string) => {
    if (first) {
      if (data[valueChecked] === capital) {
        setController(true);
        alert("correct");
        delete data[valueChecked];
        setController(false);
        setValueChecked("");
        setFirst(false);
      } else {
        setController(false);
        alert("incorrect");
        setController(false);
        setValueChecked("");
        setFirst(false);
      }
    } else {
      setFirst(true);
      setValueChecked(capital);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col gap-4 p-4 bg-gray-200">
      <div className="flex flex-wrap w-full  gap-4">
        {countries.map((country, i) => {
          return (
            <button
              className={`p-8 rounded-md   text-black text-xl hover:cursor-pointer  bg-red-100 ${
                valueChecked === country ? "bg-green-500" : ""
              }`}
              key={i}
              onClick={() => hundelClickCountry(country)}
            >
              {country}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap  gap-4">
        {capital.map((capital, i) => {
          return (
            <button
              className="p-8 rounded-md bg-white text-black  text-xl hover:cursor-pointer "
              key={i}
              onClick={() => hundelClickCapital(capital)}
            >
              {capital}
            </button>
          );
        })}
      </div>
      <button
        className="bg-red-500 p-10"
        onClick={() => {
          console.log("dssdsdsd");
        }}
      >
        cliccccck
      </button>
    </div>
  );
}

export default Page;
