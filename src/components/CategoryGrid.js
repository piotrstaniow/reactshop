import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryGrid extends React.Component {
    render() {
        const {categories} = this.props;
        return (
            <div className="category-grid">
                {
                    Object.values(categories.entities).map(
                        category => <CategoryItem
                            key={category.id}
                            id={category.id}
                            name={category.name}/>
                    )
                }
            </div>
        );
    }
}

export default CategoryGrid;
