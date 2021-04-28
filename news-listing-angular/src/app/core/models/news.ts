export class News{
    id: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: Date;
    author: string;
    source: {
        id: string,
        name: string
    }
}