export default {
  data: () => ({
    catalog: [
      {
        id: 1,
        name: "Жесткий диск Q2R41A HP 2",
        filter: 'Сетевое оборудование',
        img: null,
        partNumber: 12345,
        characteristics: null
      },
      {
        id: 2,
        name: "Контроллер P9D94A HPE SN1100Q 16Gb 2p FC HBA",
        filter: 'Серверное оборудование',
        img: null,
        partNumber: 324324,
        characteristics: [
          { id: 1, key: 'Ssd', value: '250gb' },
          { id: 2, key: 'Тест 1', value: 'влыаоывдлао' },
        ]
      },
      {
        id: 3,
        name: "Жесткий диск IBM 2.4TB 12G SAS 10K 2.5, 01YM203",
        filter: 'Переферия',
        img: null,
        partNumber: 9873243948,
        characteristics: [
          { id: 1, key: 'Ssd', value: '250gb' },
          { id: 2, key: 'Тест 1', value: 'влыаоывдлао' },
          { id: 3, key: 'Тест 2', value: 'ыва' },
          { id: 4, key: 'Тест 3', value: 'ывавыавыава' },
        ]
      },
    ]
  })
}