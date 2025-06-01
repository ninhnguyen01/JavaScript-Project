[ 
    {
        "id": 1,
        "title": "Take out the trash"
    }
]

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body', 
};

console.log(post);

const str = JSON.stringify(post);
console.log(str);

const obj = JSON.parse(str);
console.log(obj)