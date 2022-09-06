export default {
  data: () => ({
    contacts: [
      {
        id: 1,
        title: "Наш адрес",
        children: [
          { id: 1, title: "117628, г. Москва, ул. Старокачаловская, д.18, помещ. IIIБ, ком. 6" },
          { id: 2, title: "E-mail: info@qlc-it.ru" },
          { id: 3, title: "Тел: +7 (495) 711-05-15" },
        ]
      },
      {
        id: 2,
        title: "Время работы",
        children: [
          { id: 1, title: "пн-пт с 10-18 сб-вс" },
          { id: 2, title: "выходной" },
        ]
      },
      {
        id: 3,
        title: "ООО «КЬЮЭЛСИ»",
        children: [
          { id: 1, title: "ИНН 9706009467<br>КПП 772701001<br>ОГРН 1207700382878" },
        ]
      }
    ]
  })
}