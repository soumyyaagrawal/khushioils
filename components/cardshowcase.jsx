"use client";

import CardShowcase from "cardshowcase-3qxj";

export default function ShowcaseWrapper() {
  return (
    <div className="w-full">
       <CardShowcase
      cards={[
        {
          number: "01",
          title: "Creative Design",
          description:
            "A brief description of this amazing project and what makes it special.",
          image: {
            src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg",
            alt: "Gradient 1 - Blue",
          },
          tag: "Design",
        },
        {
          number: "02",
          title: "Development",
          description:
            "Building innovative solutions with modern technologies and best practices.",
          image: {
            src: "https://framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg",
            alt: "Gradient 2 - Purple",
          },
          tag: "Development",
        },
        {
          number: "03",
          title: "Strategy",
          description:
            "Planning and executing comprehensive strategies for digital success.",
          image: {
            src: "https://framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg",
            alt: "Gradient 3 - Orange",
          },
          tag: "Strategy",
        },
      ]}
      progressColor="#FF0000"
      animationSpeed={5}
      loop={true}
      textColor="#000000"
      numberColor="#CCCCCC"
      tagColor="#000000"
      imageRadius={8}
      padding={40}
      contentImageGap={16}
    />
    </div>
  );
}
