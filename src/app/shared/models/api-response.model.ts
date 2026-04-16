export interface ApiResponse<T> {
  data: T;
  isSuccess: boolean;
  message: string;
  errors: string[] | string | null;
}

export type NotificationType = 'success' | 'error' | 'warn' | 'info';

export type ConfirmType = 'question' | 'success' | 'error' | 'info' | 'warning';

