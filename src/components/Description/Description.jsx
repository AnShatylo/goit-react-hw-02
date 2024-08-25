import css from './Description.module.css';

export default function Description() {
  return (
    <div className={css.mb20}>
      <h1 className={css.mb20}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
