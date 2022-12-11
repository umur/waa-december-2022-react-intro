const products = [
    {
        id: 1,
        name: 'Corolla',
        price: '25000',
        rating: 9.0,
        category: 'Car'
    },
    {
        id: 2,
        name: 'Nissan',
        price: '30000',
        rating: 9.0,
        category: 'Car'
    },
    {
        id: 3,
        name: 'Harley',
        price: '45000',
        rating: 9.0,
        category: 'Motorcycle'
    },
];

const categories = [
    {
        id: 1,
        name: 'Car'
    },
    {
        id: 2,
        name: 'Motorcycle'
    },
    {
        id: 3,
        name: 'Rocket'
    },
];

const users = [
    {
        id: 1,
        firstname: 'Jack',
        lastname: 'Ma'
    },
    {
        id: 2,
        firstname: 'Mick',
        lastname: 'Jagger'
    },
    {
        id: 3,
        firstname: 'Rajesh',
        lastname: 'Hamal'
    },
    {
        id: 4,
        firstname: 'Richard',
        lastname: 'Starkey'
    }
];

const getUserById = (id)=>{
    return users.filter(x=>x.id === id);
}

const data = {products, categories, users, getUserById};

module.exports = data;