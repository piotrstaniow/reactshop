import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryGrid extends React.Component {
    render() {
        return (
            <div className="category-grid">
                {this.props.categories.map(category => <CategoryItem key={category} name={category} />)}
            </div>
        );
    }
}

export default CategoryGrid;
