module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/form',
        permanent: true,
      },
    ];
  },
};
