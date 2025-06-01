const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Duck',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },

    {
        title: 'Steve Hobs',
        author: 'Walter Jackson',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },

    {
        title: 'Mockingjay',
        author: 'Susan Cullen',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

const {title: firstBook } = library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);