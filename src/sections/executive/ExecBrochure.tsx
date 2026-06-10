export function ExecBrochure() {
  return (
    <section className="exec-brochure">
      <div className="exec-brochure-inner" data-reveal>
        <div className="exec-brochure-text">
          <h3>Programme Brochure</h3>
          <p>Full session breakdown, case studies, and programme details — available to download.</p>
        </div>
        <button className="exec-btn-dl" onClick={() => alert('Add your PDF path here')}>
          <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 4v-2h14v2H5z" /></svg>
          Download Brochure
        </button>
      </div>
    </section>
  )
}
