import React from 'react';
import ProductList from './product-list';

const ProductListStories = {
    title: "Example/ProductList",
    component: ProductList,
    argTypes : {
        label : {control : "text"},
        color : {control: "color"}
    }
}

export default ProductListStories;

const Template = (args) => <ProductList {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: "All Products",
    color: "blue"
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: "Mobile Phones",
    color: "red"
}

export const Example = Template.bind({})
Example.args ={
    label: "Product List Example",
    color: "green"
}