type E = 'a' | 'b' | 'c' | 'a,b' | 'b,c' | 'a,c'

function v(p: R) {

}
// v('d')
v('a,c,b')

// https://github.com/type-challenges/type-challenges/issues/11027
type Combination<T extends string[], All = T[number], Item = All>
  = Item extends string
    ? Item | `${Item},${Combination<[], Exclude<All, Item>>}`
    : never
type R = Combination<['a', 'b', 'c']>

interface EnumModel {
  code: number;
  title: string;
}

type Q = ['a', 'b', 'c', 'd', 'e', 'f'][number]

const DD = {
  a: 'a1',
  b: 'b1',
  c: 'c1',
} as const

type G = typeof DD
type O<T> = {
  [P in keyof T as T[P] extends PropertyKey ? T[P] : never]: T[P]
}
type JJ = O<G>
type KK = keyof JJ
type A = keyof typeof DD
// type
// your answers

// type Split<S extends string, SEP extends string> = string extends S
//   ? string[]
//   : S extends `${infer A}${SEP}${infer B}`
//     ? [A, ...(B extends "" ? [] : Split<B, SEP>)]
//     : SEP extends ""
//       ? []
//       : [S]

type Split<S extends string, SEP extends string> = string extends S
  ? string
  : S extends `${infer A}${SEP}${infer B}`
    ? A | (B extends "" ? "" : Split<B, SEP>)
    : SEP extends ""
      ? ""
      : S

type C = Split<"a;b;c", ";">
type D = C extends A ? true : false


// https://github.com/type-challenges/type-challenges/issues/8995

type Subsequence<T extends any[], Prefix extends any[] = []> = 
  T extends [infer F, ...infer R]
    ? Subsequence<R, Prefix | [...Prefix, F]>
    : Prefix

// type Substring<T extends string[], Prefix extends string = T[number]> = 
//   T extends [] 
//     ? never
//     : T extends [infer F, ...infer R]
//       ? Substring<R, Prefix | `${Prefix},${F}`>
//       : Prefix

type W = Subsequence<['1', '2', '3']>



//https://github.com/type-challenges/type-challenges/issues/334
// type TupleToUnion<T extends string[]> = 
//   T extends [infer F, ...infer Last] 
//     ? Last extends string[] ? `${F},${TupleToUnion<Last>}` : F
//     : never


function getEnums(s: string): EnumModel[];
function getEnums(a: string[]): EnumModel[];
function getEnums(x: string | string[]): EnumModel[] {
  if (Array.isArray(x)) {
    return [{code: 2, title: 'world'}]
  }
  return [{code: 1, title: 'hello'}]
}


export {
  getEnums
}
