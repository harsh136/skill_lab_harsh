import React from 'react'
import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList';
function App() {
  const [feedbacks, setFeedback] = useState([]);
  const handleFeedback = (feedback) => {
    setFeedback([...feedbacks, feedback]);
  }
  return (
    <>
      <FeedbackForm onAdd ={handleFeedback} />
      <FeedbackList feedbacks = {feedbacks} />
    </>
  )
}

export default App