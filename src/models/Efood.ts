class Efood {
  title: string
  describe: string
  image: string
  tags: string[]
  score: number
  id: number

  constructor(
    title: string,
    describe: string,
    image: string,
    tags: string[],
    score: number,
    id: number
  ) {
    this.title = title
    this.describe = describe
    this.image = image
    this.tags = tags
    this.score = score
    this.id = id
  }
}

export default Efood
