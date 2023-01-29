// export enum TAGS {
//   Case = "Case",
//   Design
// }

export interface IAnswer {
  content: string,
  img?: string,
}

export interface IQuestion {
  content: string,
  answers: IAnswer[],
  tags: string[],
}

export type IoData = {
  availableTags: string[],
  questions: IQuestion[],
}