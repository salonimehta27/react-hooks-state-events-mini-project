import React from "react";

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {

  const categoryButton = categories.map((c) => {
    const className = c === selectedCategory ? "selected" : null;
    return (
      <button key={c}
        className={className}
        onClick={() => onSelectCategory(c)}>{c}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
