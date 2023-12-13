import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});


test('must be added 3 items to cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 1000, 2012, 'USA', 'Avengers Assemble', 'adventure', '137 min'));
  expect(cart.items.length).toBe(3)
})

test('sum must be correct', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 1000, 2012, 'USA', 'Avengers Assemble', 'adventure', '137 min'));
  const sum = cart.getAmount()
  expect(sum).toBe(3900)
})

test('sum must be correct when we use a discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 1000, 2012, 'USA', 'Avengers Assemble', 'adventure', '137 min'));
  const sum = cart.getAmountDiscounted(10)
  expect(sum).toBe(3510)
})

test('object must be removed from the cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Avengers', 1000, 2012, 'USA', 'Avengers Assemble', 'adventure', '137 min'));
  cart.removeCart(1009)
  expect(cart.items.length).toBe(2)
})