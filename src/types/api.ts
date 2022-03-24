export type MethodType = '밀링' | '선반';

export type MaterialType =
  | '알루미늄'
  | '탄소강'
  | '구리'
  | '합금강'
  | '강철'
  | '스테인리스강';

export type StatusType = '대기중' | '상담중';

export interface APIError {
  message: string;
}

export interface APIReturnType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: MethodType[];
  material: MaterialType[];
  status: StatusType;
}
