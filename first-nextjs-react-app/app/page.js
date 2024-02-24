"use client"; // Client Component şeklinde bir hata alırsanız bu satırı ekleyin.
import { useState } from "react";

export default function Home() {
  // React'te standart Javascript ile oluşturduğumuz değişkenleri değeri takip edilmez.
  // Bu nedenle useState fonksiyonu ile değişkenlerin değerlerini takip edebiliriz.

  const [firstName, setFirstName] = useState("John");
  //let firstName = "John";
  // firstName = "Jane";      -->    setFirstName("Jane");

  const [inputValue, setInputValue] = useState("");

  const buttonClickHandler = () => {
    alert("Button clicked!");
    setFirstName("Jane"); // firstName = "Jane";
  };

  return (
    <>
      {
        // JSX gösterimlerinde HTML yapısını saran bir parent eleman olmak zorundadır.
        // Burada parent eleman olarak boş bir etiket (Fragment) kullanılmıştır. Tercihe göre
        // div, span, section... gibi etiketler de kullanılabilir.
      }

      <h1 className="text-3xl text-blue-500 bg-red-500 p-3">Hello World!</h1>

      {/*
      <span>1</span>
      <span>2</span>
      <span>3</span>
      */}

      <span>test</span>

      {
        // bu bir tekli yorum satırıdır.
      }

      <h2
        style={{
          //background-color: 'red'
          backgroundColor: "red",
          //font-size: 48px;
          fontSize: "48px",
        }}
      >
        Today is rainy.
      </h2>

      <span className="bg-gray-400 p-2">{firstName}</span>

      <button
        className="bg-indigo-400 px-4 py-2 m-10 rounded text-white"
        onClick={buttonClickHandler}
      >
        Change Value
      </button>

      <button
        className="bg-indigo-400 px-4 py-2 m-10 rounded text-white"
        onClick={() => {
          console.log("firstName değişkeninin değeri: ", firstName);
        }}
      >
        Display Value
      </button>

      <b>Girilen Değer: {inputValue}</b>
      <input
        type="text"
        className="border-2 border-gray-400 p-2"
        onChange={(event) => setInputValue(event.target.value)}
      />
    </>
  );
}
