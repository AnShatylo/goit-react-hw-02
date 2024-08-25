import css from './Options.module.css';

export default function Options({ onUpdate, totalFeedback, onReset}) {
  return (
    <div className={css.optionsContainer}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>

      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
