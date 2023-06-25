export {};

declare global {
  type StoreType = '한식' | '중식' | '일식' | '양식' | '카페';
  type StoreStatus = '등록' | '오픈' | '휴무' | '해지' | '폐업';
  type MenuStatus = '등록' | '판매' | '점검' | '삭제';
}
