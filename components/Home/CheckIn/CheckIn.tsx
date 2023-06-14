import React, { useState } from "react";
import styles from "./CheckIn.module.css";
import Button from "../../Common/Buttons/Button";
import Card from "./Card/Card";

const pages = [
  {
    id: 1,
    response1: {
      text: "I need to talk to somebody",
      location: 2,
    },
    response2: {
      text: "I’m overwhelmed and stressed",
      location: 3,
    },
    response3: {
      text: "I’m depressed and tired",
      location: 4,
    },
    response4: {
      text: "I’m anxious and scared",
      location: 5,
    },
    response5: {
      text: "I feel numb and lost ",
      location: 6,
    },
    response6: {
      text: "I want to feel more positive",
      location: 7,
    },
  },
  {
    id: 2,
    text4: "Was this helpful?",
    response1: {
      text: "Yes, this helped",
      location: 1,
    },
    response2: {
      text: "I could use some more help",
      location: 1,
    },
  },
  {
    id: 3,
    text4: "Was this helpful?",
    response1: {
      text: "Yes, this helped",
      location: 1,
    },
    response2: {
      text: "I could use some more help",
      location: 1,
    },
  },
  {
    id: 4,
    text4: "Was this helpful?",
    response1: {
      text: "Yes, this helped",
      location: 1,
    },
    response2: {
      text: "I could use some more help",
      location: 1,
    },
  },
  {
    id: 5,
    text4: "Was this helpful?",
    response1: {
      text: "Yes, this helped",
      location: 1,
    },
    response2: {
      text: "I could use some more help",
      location: 1,
    },
  },
  {
    id: 6,
    text4: "Was this helpful?",
    response1: {
      text: "Yes, this helped",
      location: 1,
    },
    response2: {
      text: "I could use some more help",
      location: 1,
    },
  },
  {
    id: 7,
    text4: "Was this helpful?",
    response1: {
      text: "Yes, this helped",
      location: 1,
    },
    response2: {
      text: "I could use some more help",
      location: 1,
    },
  },
];

const CheckIn = () => {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.checkIn}>
      <div className={styles.ui}>
        <h2>Mental Health Check-In</h2>
        <h4>Got time for a quick check up?</h4>
        {!started ? (
          <div
            onClick={() => {
              setStarted(true);
              setIndex(1);
            }}
          >
            <Button name="Get Started" location="#:)" />
          </div>
        ) : (
          <div
            onClick={() => {
              setIndex(0);
              setStarted(false);
            }}
          >
            <Button name="Goodbye :)" location="#:)" />
          </div>
        )}
      </div>
      <div className={styles.cards}>
        {!started && (
          <div
          className="pointer"
            onClick={() => {
              setIndex(1);
              setStarted(true)
            }}
          >
            <Card alert="Welcome, click here to begin!" />
          </div>
        )}
        {started && (
          <>
            {index === 1 && (
              <Card
                id={pages[0].id}
                response1={pages[0].response1}
                response2={pages[0].response2}
                response3={pages[0].response3}
                response4={pages[0].response4}
                response5={pages[0].response5}
                response6={pages[0].response6}
                index={index}
                setIndex={setIndex}
              />
            )}
            {index === 2 && (
              <Card
                id={pages[1].id}
                text4={pages[1].text4}
                response1={pages[1].response1}
                response2={pages[1].response2}
                index={index}
                setIndex={setIndex}
              />
            )}
            {index === 3 && (
              <Card
                id={pages[2].id}
                text4={pages[2].text4}
                response1={pages[2].response1}
                response2={pages[2].response2}
                index={index}
                setIndex={setIndex}
              />
            )}
            {index === 4 && (
              <Card
                id={pages[3].id}
                text4={pages[3].text4}
                response1={pages[3].response1}
                response2={pages[3].response2}
                index={index}
                setIndex={setIndex}
              />
            )}
            {index === 5 && (
              <Card
                id={pages[4].id}
                text4={pages[4].text4}
                response1={pages[4].response1}
                response2={pages[4].response2}
                index={index}
                setIndex={setIndex}
              />
            )}
            {index === 6 && (
              <Card
                id={pages[5].id}
                text4={pages[5].text4}
                response1={pages[5].response1}
                response2={pages[5].response2}
                index={index}
                setIndex={setIndex}
              />
            )}
            {index === 7 && (
              <Card
                id={pages[6].id}
                text4={pages[6].text4}
                response1={pages[6].response1}
                response2={pages[6].response2}
                index={index}
                setIndex={setIndex}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CheckIn;
