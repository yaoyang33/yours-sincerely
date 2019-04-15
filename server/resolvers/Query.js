const Moniker = require('moniker');
const { getUserId } = require('@server/services/authentication');

const usernameGenerator = Moniker.generator([
  Moniker.adjective,
  Moniker.adjective,
  Moniker.noun,
]);

const Query = {
  randomUsername: () => {
    return usernameGenerator.choose();
  },
  me: (parent, args, context) => {
    const userId = getUserId(context);
    return context.prisma.user({ id: userId });
  },
  feed: (parent, args, context) => {
    return context.prisma.posts({ where: { published: true } });
  },
  filterPosts: (parent, { searchString }, context) => {
    return context.prisma.posts({
      where: {
        content_contains: searchString,
      },
    });
  },
  post: (parent, { id }, context) => {
    return context.prisma.post({ id });
  },
};

module.exports = {
  Query,
};
