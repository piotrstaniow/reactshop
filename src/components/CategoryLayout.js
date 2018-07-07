import React from 'react';
import CategoryGrid from "./CategoryGrid";

class CategoryLayout extends React.Component {
    categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    render() {
        return (
            <CategoryGrid categories={this.categories} />
        );
    }
}

export default CategoryLayout;
