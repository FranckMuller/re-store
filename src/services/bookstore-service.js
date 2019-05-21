class BookstoreService {
  books = [
    {
      id: 1,
      title: '451° по Фаренгейту',
      author: 'Рэй Брэдбери',
      cover: 'https://r2.readrate.com/img/pictures/book/361/361142/361142/w91-890c58a6.jpg',
      price: 23
    },
    {
      id: 2,
      title: 'Шантарм',
      author: 'Грегори Дэвид Робертс',
      cover: 'https://r2.readrate.com/img/pictures/book/625/625201/6252010/w91-f062d9a6.jpg',
      price: 18
    },
    {
      id: 3,
      title: '1984',
      author: 'Джордж Оруэлл',
      cover: 'https://r2.readrate.com/img/pictures/book/414/414230/4142300/w91-11c299bd.jpg',
      price: 20
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.books);
        reject(new Error('Ooops... something went wrong'))
      }, 700)
    });
  };
};

export default BookstoreService;
