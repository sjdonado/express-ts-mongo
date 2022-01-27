export interface Record {
  _id: string;
  key: string;
  value: string;
  createdAt: string;
  counts: number[]
  totalCount?: number;
}
