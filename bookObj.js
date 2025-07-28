const displayBookDetails = (bookObj)=>{
    const {name, description, author, publishDate} = bookObj;
    console.log(`
        name : ${name || 'Unknown'}
        description: ${description || 'No Description'}
        author: ${author || 'Unknown'}
        publishDate: ${publishDate || 'Unknown'}`);
}

const bookObj = {
    name: "This is a Book",
    description: "This book is about something",
    author: 'someone',
    publishDate: new Date().getFullYear()
}
const bookObj1 = {
    name: "This is not a Book",
    description: "This book is about You"
}

displayBookDetails(bookObj);
displayBookDetails(bookObj1);
