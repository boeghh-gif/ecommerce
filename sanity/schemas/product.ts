export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Product Description',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string',
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Product Category',
            to: [{ type: 'category' }],
        }
    ]
}