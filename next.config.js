const config = {
  target: 'serverless'
};

const prodConfig = {
  ...config,
  env: {
    // vvv Update vvv
    // ex) https://nextjs-redux-ssr.{your-name}.now.sh/api
    API_ENDPOINT: 'https://nextjs-redux-ssr.bobmk2.now.sh/api'
    // ^^^^^^^^^^^^^^
  }
};

const devConfig = {
  ...config,
  env: {
    API_ENDPOINT: 'http://localhost:3000/api'
  }
};

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
