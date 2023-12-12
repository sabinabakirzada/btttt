import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        head="Blog post title"
        text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
        f-name="Kelly Rowan"
      />
      <Card
        head="Another blog post title"
        text="This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content."
        f-name="Josiah Barclay"
      />
      <Card
        head="The last blog post title is a little bit longer than the others"
        text="Some more quick example text to build on the card title and make up the bulk of the card's content."
        f-ame="Eveleyn Martelin"
      />
    </div>
  );
};

export default Cards;
