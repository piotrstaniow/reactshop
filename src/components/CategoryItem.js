import React from 'react';

class CategoryItem extends React.Component {
    render() {
        return (
            <div className="category-item">
                {this.props.name}
            </div>
        );
    }
}

export default CategoryItem;
