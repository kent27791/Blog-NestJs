export interface Article {
  _id: string;
  title: string;
  description: string;
  content: string;
  author: {
    _id: string;
    userName: string;
  };
  thumbnail: string;
}
