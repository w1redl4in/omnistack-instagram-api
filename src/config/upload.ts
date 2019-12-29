import multer, { Options } from 'multer';
import path from 'path';
export = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
};
