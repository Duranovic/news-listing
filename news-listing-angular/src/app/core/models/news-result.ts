import { News } from './news';

export interface NewsResult {
  status: string;
  totalResults: number;
  articles: News[];
}