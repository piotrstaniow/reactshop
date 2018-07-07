import React from 'react';
import { Link } from "react-router-dom";

export const CategoryItem = ({id, name}) => (
    <div className="category-item">
        <Link to={`/category/${id}`}>
            {name}
        </Link>
    </div>
);

export default CategoryItem;
