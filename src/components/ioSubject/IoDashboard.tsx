import React, { useEffect, useMemo } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ioData from "../../data/io.json";
import Path from "./path/Path";
import Filter from "./filter/Filter";
import Question from "./question/Question";
import { useAppSelector } from "../../feature/hooks";

const IoDashboard = () => {
  const filterState = useAppSelector((state) => state.filter);

  const filteredQuestions = useMemo(() => {
    return ioData.questions.filter((question) => {
      const questionContent = question.content.toLowerCase();
      // const questionsAnswers = question.answers.map((answer) => answer.toLowerCase());

      const tagsCorrect = filterState.tags.length > 0 ? question.tags.some((tag) => filterState.tags.includes(tag)) : true;
      const searchTextInContent = questionContent.includes(filterState.searchText.toLowerCase());
      return searchTextInContent && tagsCorrect;
    });
  }, [filterState]);

  useEffect(() => {
    // console.log(filterState);
  }, [filterState]) ;

  return (
    <>
      <MDBContainer>
        <Path />
        <Filter />
        {
          filteredQuestions.map(({content, answers, imgs}, i) => <Question key={i} content={content} answers={answers} imgs={imgs} />)
        }
      </MDBContainer>
    </>
  );
};

export default IoDashboard;
