import H1Component from "./components/h1Component";
import SpanComponent from "./components/spanComponent";

export default function JsxSyntax() {
  return (
    <>
      <h2>JSX Syntax</h2>
      <SpanComponent spanText="Hello world!" />
      <H1Component h1Text="Lorem ipsum" anotherProp="test" />
    </>
  );
}
