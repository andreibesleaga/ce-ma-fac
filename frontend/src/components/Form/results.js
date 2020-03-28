/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./Form.scss";
import {
  ListHeader,
} from "@code4ro/taskforce-fe-components";

function Results({ question, answers }) {

  const calculateResults = () => {
    const a = answers;
    // Sorry :(
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 0;
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 0;
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;

    if (a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 0;
    if (a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 0;
    if (a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;

    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 0;
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 1;
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;
    if (a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;

    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 0;
    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;
    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 0;

    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 1;
    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 1;
    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;
    if (a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;

    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 0;
    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;
    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 1;
    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;

    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 1;
    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 1;
    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;
    if (a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;

    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;
    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 0;
    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 0;

    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 1;
    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 1;
    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;
    if (!a[1] && a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;

    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 1;
    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 1;
    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 1;

    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 1;
    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 1;
    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;
    if (!a[1] && a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;

    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;
    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 0;
    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 0;

    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && a[16]) return 0;
    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && a[16]) return 0;
    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && a[15] && !a[16]) return 1;
    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (a[10] || a[11] || a[12] || a[13] || a[14]) && !a[15] && !a[16]) return 1;

    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 1;
    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;
    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 1;
    if (!a[1] && !a[3] && (a[4] || a[5] || a[6] || a[7] || a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;

    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && a[16]) return 1;
    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && a[15] && !a[16]) return 2;
    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && !a[16]) return 2;
    if (!a[1] && !a[3] && (!a[4] || !a[5] || !a[6] || !a[7] || !a[8]) && (!a[10] || !a[11] || !a[12] || !a[13] || !a[14]) && !a[15] && a[16]) return 1;

   return 3;
  };

  const showResults = () => {
    return question.options[calculateResults()].label;
  };

  // TODO: use a real component for this
  return (
    <div>
      <ListHeader title={question.questionText} />
      <div>
        <div
          className={'__list-item no-hover'}
        >
          <div className="__list-item__left-side" />
          <div className="__list-item__content">
            <p dangerouslySetInnerHTML={{ __html: showResults() }} />
          </div>
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  answers: PropTypes.object
};

export default Results;
