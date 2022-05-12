export class Outcome {
  constructor(public id: number, public description: string, public cdios: number[]) {
    this.id = id
    this.description = description
    this.cdios = cdios
  }

}
