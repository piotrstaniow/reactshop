import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryGrid extends React.Component {
    state = {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    };

    render() {
        return (
            <div className="category-grid">
                {this.state.categories.map(category => <CategoryItem key={category} name={category} />)}
            </div>
        );
    }
}

export default CategoryGrid;
