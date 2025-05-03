import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Senior Pastor Jos",
      src: "/moment/img.jpg",
    },
    {
      title: "Rev Ojesuman Minisitering",
      src: "/moment/img1.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/card/lisca1.png",
    },
    {
      title: "Camping is for pros",
      src: "/card/children.png",
    },
    {
      title: "The road not taken",
      src: "/moment/img3.jpg",
    },
    {
      title: "Church Service",
      src: "/moment/img.jpg",
    },
    {
      title: "Church Members",
      src: "/card/members1.png",
    },
    {
      title: "Pastor David Malgwi",
      src: "/card/lisca21.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
