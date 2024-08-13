import { Menu } from "../interfaces/menu.interface";

export const info:Menu[]=[
  {name:'Inicio',route:'inicio' },
  {name:'Nosotros', route:'nosotros' },
  {name:'Servicios',route:'servicios' },
  {name: 'Productos',route:'productos',subMenu:[
    {name:'Venta de Tubería HDPE y accesorios',route:'productos/venta-fabricacion-de-fibra-vidrio'},
    {name:'Venta de Geomembrana y cordón de aporte para Geomembrana HDPE Nominal de 5mm',route:'productos/venta-hdpe-tee-yee'},
    {name:'Alquiler de Grupo Electrógeno',route:'productos/alquiler-grupo-electrogeno'},
    {name:'Alquiler de Cuña',route:'productos/alquiler-de-cuña'},
    {name:'Alquiler de Extrusora',route:'productos/alquiler-de-extrusoras'},
    {name:'Alquiler y venta de equipos para control de Calidad',route:'productos/alquiler-equipos-control-calidad'},
    {name:'Alquiler de Termofusora Hidráulica',route:'productos/alquiler-termofusora-hidráulica'},
    {name:'Alquiler de Termofusora Manual',route:'productos/alquiler-termofusora-manua'},
  ]
},
  {name: 'Proyectos',route:'proyectos',subMenu:[
    {name:'Sector Minero',route:'proyectos/sector-mineria'},
    {name:'Sector Construcción',route:'proyectos/sector-construccion'},
    {name:'Sector Hidrocarburos',route:'proyectos/sector-hidrocarburos'},
    {name:'Sector Agrícola',route:'proyectos/sector-agricultura'},
  ]
},
  {name: 'Clientes',route:'clientes'},
  {name: 'Trabaja con Nosotros',route:'trabaja-con-nosotros'}
]
