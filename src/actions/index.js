// Action の Typo miss 時にエラーを発生させるために変数へ代入
// Action を reducer で使うときは文字列判定でいいけど編集に入れるとtype missに気づきやすいから

export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_ALL_EVENT = 'DELETE_ALL_EVENT'

