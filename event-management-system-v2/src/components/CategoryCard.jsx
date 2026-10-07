function CategoryCard({ category, count, onView }) {
  return (
    <article className={`cat-card tone-${category.name.toLowerCase()}`}>
      <span className="cat-icon" aria-hidden="true">{category.icon}</span>
      <h3>{category.name}</h3>
      <p className="cat-tagline">{category.tagline}</p>
      <p className="cat-desc">{category.description}</p>
      <ul className="cat-tags">
        {category.examples.map((x) => <li key={x}>{x}</li>)}
      </ul>
      <button className="btn btn-outline" onClick={() => onView(category.name)}>
        View Events ({count})
      </button>
    </article>
  );
}

export default CategoryCard;
