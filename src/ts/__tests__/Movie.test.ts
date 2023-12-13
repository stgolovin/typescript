import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const movie = new Movie(1009, 'Avengers', 1000, 2012, 'USA', 'Avengers Assemble', 'adventure', '137 min');
  expect(movie.country).toBe('USA');
});
