import multer from 'multer';
import { v4 } from 'uuid';

const MIME_TYPE_MAP: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

const fileUpload = multer({
  limits: { fileSize: 50 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'uploads/images');
    },
    filename(req, file, callback) {
      console.log(file, 'file in fileupload');
      const ext: string = MIME_TYPE_MAP[file.mimetype];
      callback(null, v4() + '.' + ext);
    },
  }),
  fileFilter(req, file, callback) {
    const isValid: boolean = !!MIME_TYPE_MAP[file.mimetype];
    if (isValid) {
      callback(null, true);
    } else {
      callback(new Error('Invalid mime type!') as unknown as null, false);
    }
  },
});

export default fileUpload;
