import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryGrid extends React.Component {
    handleClick() {
        alert('Clicked me!');
    }

    render() {
        return (
            <div className="category-grid">
                {this.props.categories.ids.map(category =>
                    <CategoryItem
                        key={category}
                        name={category}
                        handleClick={this.handleClick}
                    />
                )}
            </div>
        );
    }
}

export default CategoryGrid;
