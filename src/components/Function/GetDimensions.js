import { useCallback, useRef } from "react";

//Take setHeight and setWidth variables and returns the height and width of the element
const GetDimensions = (props) => {
  const myRef = useRef();
  let setWidth,
    setHeight = null;

  if (props.setWidth !== null) {
    setWidth = props.setWidth;
  }
  if (props.setHeight !== null) {
    setHeight = props.setHeight;
  }

  const elementDimentions = useCallback(
    (node) => {
      if (node !== null) {
        if (setHeight !== null) {
          //   setHeight(node.getBoundingClientRect().height);
          const height = myRef.current.clientHeight;
        }
        if (setWidth !== null) {
          const width = myRef.current.clientWidth;
          console.log(width);
          setWidth(node.getBoundingClientRect().width);
        }
      }
    },
    [setHeight, setWidth]
  );
  return <div ref={elementDimentions}>{props.children}</div>;
};

export default GetDimensions;
