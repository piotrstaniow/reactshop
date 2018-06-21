import React from 'react';
import CategoryGrid from "./CategoryGrid";
import CategoryDetails from "./CategoryDetails";

class CategoryLayout extends React.Component {
    category = {
        "id": "agd",
        "productIds": ["item1000", "item1001", "item1002"]
    };

    render() {
        return (
            <React.Fragment>
                <CategoryGrid/>
                <CategoryDetails category={this.category}/>
            </React.Fragment>
        );
    }
}

export default CategoryLayout;
