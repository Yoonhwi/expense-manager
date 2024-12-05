export type method = "post" | "get" | "put" | "delete";

export interface ToastType {
  id: number;
  message: string;
  method: method;
}
