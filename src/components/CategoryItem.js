import React from 'react';

export const CategoryItem = ({name, handleClick}) => (
    <div className="category-item" onClick={handleClick}>{name}</div>
);

export default CategoryItem;
