export interface Menu{
  name:string
  route:string
  subMenu?:SubMenu[]
}
export interface SubMenu{
  name:string
  route:string
}
