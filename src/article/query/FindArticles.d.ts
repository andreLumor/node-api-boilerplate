import { PaginatedQuery, PaginatedQueryResult, QueryHandler, QueryResult, SortedPaginatedQuery } from "@/_lib/CQRS";

type ArticleListItemDTO = Readonly<{
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  comments: ReadonlyArray<{
    id: string;
    body: string;
    createdAt: Date;
  }>;
}>;

type ArticleFilter = {
  title: string;
  publishedBetween: [Date, Date];
};

type FindArticles = QueryHandler<PaginatedQuery<ArticleFilter>, PaginatedQueryResult<ArticleListItemDTO[]>>;

export { FindArticles };
