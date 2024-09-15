import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LessonComponent = () => {
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await axios.get('/api/lessons');
      setLessons(response.data);
    };
    fetchLessons();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    if (quizIndex < lessons[currentLesson].quizzes.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      alert(`Quiz completed! Score: ${score + (isCorrect ? 1 : 0)} / ${lessons[currentLesson].quizzes.length}`);
      setQuizIndex(0);
      setCurrentLesson(currentLesson + 1);
    }
  };

  if (!lessons.length) return <div>Loading...</div>;

  return (
    <div>
      <h2>{lessons[currentLesson].title}</h2>
      <p>{lessons[currentLesson].content}</p>
      <h3>{lessons[currentLesson].quizzes[quizIndex].question}</h3>
      {lessons[currentLesson].quizzes[quizIndex].options.map((option, i) => (
        <button key={i} onClick={() => handleAnswer(option === lessons[currentLesson].quizzes[quizIndex].correctAnswer)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default LessonComponent;
