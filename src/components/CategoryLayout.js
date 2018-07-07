import React from 'react';
import CategoryGrid from "./CategoryGrid";
import CategoryDetails from "./CategoryDetails";
import { Route } from "react-router-dom";

class CategoryLayout extends React.Component {
    state = {
        categories: {},
        loading: true,
    };

    componentDidMount() {
        fetch('http://localhost:3001/categories')
            .then(response => response.json())
            .then(json => this.setState({ categories: json, loading: false }));
    }

    render() {
        const { loading, categories } = this.state;
        if (loading) {
            return <span>Loading...</span>
        }
        return (
            <React.Fragment>
                <Route exact path="/" render={() => <CategoryGrid categories={categories}/>}/>
                <Route
                    path="/category/:id"
                    render={(props) => <CategoryDetails category={categories.entities[props.match.params.id]}/>}
                />
            </React.Fragment>
        );
    }
}

export default CategoryLayout;
