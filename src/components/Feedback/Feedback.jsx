import css from './Feedback.module.css';

export default function Feedback({ feedback, total, positive }) {
  return (
    <ul className={css.list}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
}
