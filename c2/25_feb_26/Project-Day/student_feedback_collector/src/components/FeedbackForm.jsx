import React from 'react'
import { useState } from 'react';
function FeedbackForm({onAdd}) {
    const [feedbacks, setFeedback] = useState("");
    const handleAdd = () => {
        if(feedbacks.trim() === "") return;
        onAdd(feedbacks);
        setFeedback("");
    }
  return (
    <div>
        <input type="text" value={feedbacks} onChange={(e) => setFeedback(e.target.value)} placeholder="Enter Feedback" />
        <button onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default FeedbackForm