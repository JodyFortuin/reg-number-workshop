const bookTemplateElem = document.querySelector(".bookTemplate");
// const message = document.querySelector(".message");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");

console.log(bookTemplateElem.innerHTML);

const booksTemplate = Handlebars.compile(bookTemplateElem.innerHTML);


message1.innerHTML =  booksTemplate({
   firstName: "Superman",
    bookCount: 33,
    dayCount: 300}

);