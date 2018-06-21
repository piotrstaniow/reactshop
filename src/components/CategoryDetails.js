import React from 'react';

class CategoryDetails extends React.Component {
    state = {
        loading: true,
        products: {},
    };

    componentDidMount() {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(({entities}) => this.setState({products: entities, loading: false}));
    }

    render() {
        const {category} = this.props;
        const {products, loading} = this.state;

        if (loading) {
            return <span>Loading...</span>;
        }

        return (
            <div className="category-details">
                <h1>{category.id}</h1>
                <ul>
                    {category.productIds.map(id => <li key={id}>{products[id].name}</li>)}
                </ul>
            </div>
        );
    }
}

export default CategoryDetails;
