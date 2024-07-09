//interfaz

export interface Repository<T> {
  findAll(): T[] | undefined  //devuelve (array de elementos)
  findOne(item: { id: string }): T | undefined //recibe un item de tipo id y devuelve un elemento
  add(item: T): T | undefined 
  update(item: T): T | undefined
  delete(item: { id: string }): T | undefined
}