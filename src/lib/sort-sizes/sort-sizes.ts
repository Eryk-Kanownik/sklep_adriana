import tShirtPatter from "../patterns/t-shirt-pattern";
import pantsPattern from "../patterns/pants-pattern";

function sortSizes(category: string, arrayOfSizes: Array<object>) {
  switch (category) {
    case "pants": {
      let arr = arrayOfSizes.sort((a: any, b: any) => {
        const indexA = pantsPattern.indexOf(a.size);
        const indexB = pantsPattern.indexOf(b.size);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      });
      return arr;
    }
    case "t-shirt": {
      let arr = arrayOfSizes.sort((a: any, b: any) => {
        const indexA = tShirtPatter.indexOf(a.size);
        const indexB = tShirtPatter.indexOf(b.size);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      });
      return arr;
    }
    default: {
      break;
    }
  }
}
export default sortSizes;
