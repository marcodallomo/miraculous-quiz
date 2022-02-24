import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/miraculous_ladybug.mp3";

import wrong from "../assets/mixkit-cartoon-voice-laugh-343.wav";
import correct from "../assets/mixkit-happy-crowd-cheer-975.wav";

const Trivia = ({ data, dataB, setStop, questionNumber, setQuestionNumber, topic }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    const list = topic !== "Math" ? dataB : data;

    setQuestion(list[questionNumber - 1]);
    console.log("try", topic, list);
  }, [data, dataB, topic, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
    delay(3000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
