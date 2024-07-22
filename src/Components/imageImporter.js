export const importAllImages = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAllImages(
  require.context("../Components/images", false, /\.(png|jpe?g|svg)$/)
);

export default images;
