import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={css.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
