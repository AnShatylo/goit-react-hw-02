export default function Feedback({ feedbackType, positiveFeedback }) {
  return (
    <ul>
      <li>Good: {feedbackType.good}</li>
      <li>Neutral: {feedbackType.neutral}</li>
      <li>Bad: {feedbackType.bad}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
