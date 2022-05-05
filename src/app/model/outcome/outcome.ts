export class Outcome {
    id:number;
    description:string;
    cdios:number[]

  constructor(id: number, description: string, cdios: number[]) {
    this.id = id
    this.description = description
    this.cdios = cdios
  }

}
