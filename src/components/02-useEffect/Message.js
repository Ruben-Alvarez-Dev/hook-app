import React, { useEffect } from "react";
export const Message = () => {
  const mouseMove = (e) => {
    const coors = { x: e.x, y: e.y };
    console.log(coors);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <h3>Hola!</h3>;
};
