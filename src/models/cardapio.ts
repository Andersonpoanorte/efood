class MenuItemList {
  id: number
  image: string
  title: string
  describe: string

  constructor(id: number, image: string, title: string, describe: string) {
    this.describe = describe
    this.image = image
    this.title = title
    this.id = id
  }
}

export default MenuItemList
