import { NewsArticle } from './news';

declare module "*.json" {
  const value: NewsArticle[];
  export default value;
}