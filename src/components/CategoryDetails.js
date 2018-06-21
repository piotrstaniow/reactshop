import React from 'react';

class CategoryDetails extends React.Component {
    render() {
        const {category} = this.props;
        return (
            <div className="category-details">
                <h1>{category.id}</h1>
                <ul>
                    { category.productIds.map(id => <li key={id}>{id}</li>) }
                </ul>
            </div>
        );
    }
}

export default CategoryDetails;
