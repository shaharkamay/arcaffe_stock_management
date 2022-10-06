import app from './app';
import mongoose from 'mongoose';
// import config from './config/config';

// const url = config.mongo.url;

// mongoose
//   .connect(url, config.mongo.options)
//   .then(() => {
//     console.log(`connected to MongoDB`);
//     app.listen(config.server.port, () =>
//       console.log(`app listening at http://localhost:${config.server.port}`)
//     );
//   })
//   .catch((error) => {
//     console.log("error connecting to MongoDB:", error.message);
//   });

app.listen(8081, () =>
  console.log(`app listening at http://localhost:${8081}`)
);
