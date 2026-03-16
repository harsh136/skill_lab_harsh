import React from "react";

function FeedbackList({ feedbacks }) {
  return (
    <div>
      <h3>Feedbacks</h3>
      {feedbacks.length === 0 ? (
        <p>No Feedbacks added yet.</p>
      ) : (
        <ul>
          {feedbacks.map((t, index) => (
            <li key={index}>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default FeedbackList;
