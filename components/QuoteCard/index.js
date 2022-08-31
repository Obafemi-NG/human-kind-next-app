import Image from "next/image";
import styles from "./QuoteCard.module.css";
import { useState, useCallback, useEffect } from "react";

import img_1 from "../../public/img_1.png";
import img_2 from "../../public/img_2.png";
import img_3 from "../../public/img_3.png";
import img_4 from "../../public/img_4.png";
import img_5 from "../../public/img_5.png";
import img_6 from "../../public/img_6.png";
import img_7 from "../../public/img_7.png";
import img_8 from "../../public/img_8.png";

const QuoteCard = () => {
  const [quote, setQuote] = useState({});
  const quotes = [
    {
      id: 1,
      quote: "It’s not how much we give, but how much love we put into giving.",
      imageUrl: img_1,
      name: "Mother Teresa",
    },
    {
      id: 2,
      quote:
        "The best way to find yourself is to lose yourself in the service of others.",
      imageUrl: img_2,
      name: "Mahatma Ghandi",
    },
    {
      id: 3,
      quote: "Charity Begins at home but should not end there.",
      imageUrl: img_3,
      name: "Thomas Fuller",
    },
    {
      id: 4,
      quote: "Alone we can do so little; together we can do so much.",
      imageUrl: img_4,
      name: "Helen Keller",
    },
    {
      id: 5,
      quote:
        "Do not sit and wait for a savior to come, be the savior for the people in despair.",
      imageUrl: img_5,
      name: "Abhijit Naskar",
    },
    {
      id: 6,
      quote:
        "Life’s most persistent and urgent question is, ‘What are you doing for others?’",
      imageUrl: img_6,
      name: "Martin Luther King ",
    },
    {
      id: 7,
      quote:
        "Don’t be content in your life just to do no wrong, be prepared every day to try and do some good.",
      imageUrl: img_7,
      name: "Nicholas Winton",
    },
    {
      id: 8,
      quote:
        "The destiny of world civilization depends upon providing a decent standard of living for all mankind.",
      imageUrl: img_8,
      name: "Norman Borlaug",
    },
  ];
  const shuffleQuotes = useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
    // console.log(quote.id);
  }, [quotes]);

  useEffect(() => {
    const intervalID = setInterval(shuffleQuotes, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, [shuffleQuotes]);
  return (
    <div className={styles["quote-card-container"]}>
      <div className={styles["quote_1"]}>
        <Image src="/quote_1.svg" alt="quote-1" width={40} height={40} />
      </div>
      <div className={styles["quote-content"]}> {quote.quote} </div>

      <div className={styles["quote_2"]}>
        <Image src="/quote_2.svg" alt="quote-2" width={40} height={40} />
      </div>
      <div className={styles["about-quote"]}>
        <Image src="/line.svg" alt="line_icon" width={30} height={30} />
        <div className={styles["author-image-container"]}>
          <Image
            src={quote.imageUrl}
            alt="author_image"
            width={48}
            height={48}
          />
        </div>
        <p className={styles["quote-author"]}> {quote.name} </p>
      </div>
    </div>
  );
};

export default QuoteCard;
