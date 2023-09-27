const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      description: 'Menambahkan buku baru',
      tags: ['api'],
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
      description: 'Mendapatkan semua buku',
      tags: ['api'],
    },
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
    options: {
      description: 'Mendapatkan buku berdasarkan ID',
      tags: ['api'],
    },
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
    options: {
      description: 'Mengedit buku berdasarkan ID',
      tags: ['api'],
    },
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
    options: {
      description: 'Menghapus buku berdasarkan ID',
      tags: ['api'],
    },
  },
];

module.exports = routes;
