"use client";

export default function H1Component(props) {
  console.log(props);
  return <h1 className="bg-violet-200">{props.h1Text}</h1>;
}
