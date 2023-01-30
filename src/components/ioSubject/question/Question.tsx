import React from "react";

interface QuestionProps {
  content: string;
  answers: string[];
  imgs?: string[];
}

const Question = ({ content, answers, imgs = [] }: QuestionProps) => {
  return (
    <div>
      <p className="fw-bold h5">{content}</p>
      {imgs.length > 0 &&
        imgs.map((img, i) => (
          <img key={i} className="img-fluid" src={img} alt="img" />
        ))}
        
      {answers.map((answer, i) => (
        <p key={i}> - {answer}</p>
      ))}
      <hr />
    </div>
  );
};

export default Question;
