export interface QueryResult {
  data: any;
  loading?: boolean;
  error?: Error | null;
  doFetch: (url: string, options?: any) => void;
}

export interface formData {
  username: string;
  password: string;
}
