import React from "react";

interface QuestionProps {
  content: string,
  answers: string[],
}

const Question = ({ content, answers }: QuestionProps) => {
  return (
    <div>
      <p className="fw-bold h5">{content}</p>
      {answers.map((answer, i) => <p key={i}> - {answer}</p>)}
      <hr />
    </div>
  )
}

export default Question;
