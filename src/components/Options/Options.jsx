import css from './Options.module.css';

export default function Options({
  options,
  onLeaveFeedback,
  onReset,
  totalFeedback,
}) {
  return (
    <div className={css.buttons}>
      {options.map((option) => (
        <button
          key={option}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={css.resetButton} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
