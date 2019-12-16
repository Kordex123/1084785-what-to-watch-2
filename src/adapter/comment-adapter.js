const commentAdapter = (comment) => {
  return {
    id: comment[`id`],
    rating: comment[`rating`],
    content: comment[`comment`],
    date: comment[`date`],
    user: {
      id: comment[`user`][`id`],
      name: comment[`user`][`name`],
    },
  };
};

export default commentAdapter;
