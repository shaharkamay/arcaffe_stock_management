import app from './app';
import mongoose from 'mongoose';
import config from './utils/config';

const url = config.mongo.url;

mongoose
  .connect(url, config.mongo.options)
  .then(() => {
    console.log(`connected to MongoDB`);
    app.listen(config.server.port, () =>
      console.log(`app listening at http://localhost:${config.server.port}`)
    );
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });
