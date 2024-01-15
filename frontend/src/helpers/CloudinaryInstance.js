import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dslne9y2j', // it is the Product environment Cloud Name into Settings/Account of cloudinary console when you are logged in
  },
});