class BookstoreService {
  async getBooks () {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data.books.map(this.transformData);
  }

  transformData(item) {
    return {
      ...item,
      price: Number(item.price)
    }
  }
};

export default BookstoreService;
