import React from 'react';
import CategoryItem from "./CategoryItem";

class CategoryGrid extends React.Component {
    state = {
        categories: {
            ids: [],
            entities: {},
        },
    };

    componentDidMount() {
        fetch('http://localhost:3001/categories')
            .then(response => response.json())
            .then(json => this.setState({ categories: json }));
    }

    render() {
        return (
            <div className="category-grid">
                {this.state.categories.ids.map(category => <CategoryItem key={category} name={category} />)}
            </div>
        );
    }
}

export default CategoryGrid;
