// ARCHIVO GENERADO desde _planilla/Planilla_productos_DuqueOrate.xlsx — no editar a mano.
// Para cambiar productos, editá la planilla y pedile a Claude que regenere este archivo.
const PRODUCTS = [
  {
    "id": "DO-COM-001",
    "nombre": "Combo teclado + mouse inalámbrico Logitech",
    "detalle": "Teclado y mouse inalámbricos que funcionan con un solo receptor USB.",
    "fotos": [
      "img/productos/KIT_LOGITECH_1.webp",
      "img/productos/KIT_LOGITECH_2.webp"
    ],
    "precio": null,
    "destacado": true,
    "portada": true,
    "categorias": [
      "teclado",
      "mouse"
    ]
  },
  {
    "id": "DO-IMP-001",
    "nombre": "Impresora láser Brother HL-1200",
    "detalle": "Láser monocromática y compacta, con bajo costo por hoja. Para oficina y estudio.",
    "fotos": [
      "img/productos/IMPRESORA_BROTHER_HL1200_1.webp",
      "img/productos/IMPRESORA_BROTHER_HL1200_2.webp"
    ],
    "precio": null,
    "destacado": false,
    "portada": true,
    "categorias": [
      "impresoras"
    ]
  },
  {
    "id": "DO-MOU-001",
    "nombre": "Mouse inalámbrico Logitech M170",
    "detalle": "Inalámbrico y compacto, con receptor USB. Para el uso de todos los días.",
    "fotos": [
      "img/productos/LOGITECH_170_1.webp",
      "img/productos/LOGITECH_170_2.webp",
      "img/productos/LOGITECH_170_3.webp",
      "img/productos/LOGITECH_170_4.webp"
    ],
    "precio": null,
    "destacado": false,
    "portada": false,
    "categorias": [
      "mouse"
    ]
  },
  {
    "id": "DO-PEN-001",
    "nombre": "Pendrive Hiksemi 32 GB",
    "detalle": "Diseño giratorio con tapa metálica que protege el conector.",
    "fotos": [
      "img/productos/PENDRIVE_HIKSEMI_32GB_1.webp",
      "img/productos/PENDRIVE_HIKSEMI_32GB_2.webp"
    ],
    "precio": null,
    "destacado": false,
    "portada": false,
    "categorias": [
      "pendrive"
    ]
  }
];

const KITS = [
  {
    "id": "DO-KIT-001",
    "nombre": "Kit Oficina",
    "detalle": "Combo teclado y mouse inalámbrico Logitech + pendrive Hiksemi 32 GB.",
    "fotos": [],
    "precio": null,
    "destacado": true,
    "portada": true,
    "componentes": [
      {
        "id": "DO-COM-001",
        "cantidad": 1
      },
      {
        "id": "DO-PEN-001",
        "cantidad": 1
      }
    ]
  },
  {
    "id": "DO-KIT-002",
    "nombre": "Kit Estudiante",
    "detalle": "Mouse inalámbrico Logitech M170 + pendrive Hiksemi 32 GB.",
    "fotos": [],
    "precio": null,
    "destacado": false,
    "portada": false,
    "componentes": [
      {
        "id": "DO-MOU-001",
        "cantidad": 1
      },
      {
        "id": "DO-PEN-001",
        "cantidad": 1
      }
    ]
  }
];
