<template>
  <DIV style="padding: 100px;">

    <div style="border: 1px solid #000; padding: 20px; margin-bottom: 40px;">
      <input type="text" placeholder="Поиск по парт номеру">
      или по категориям
      <select>
        <option value="dell">dell</option>
        <option value="hp">hp</option>
        <option value="huawei">huawei</option>
      </select>
      <select>
        <option value="операьтивная память">операьтивная память</option>
        <option value="жесткие диски<">жесткие диски</option>
      </select>
    </div>

    <ul>
      <li v-for="jso in json" :key="jso">
        {{ jso.name }}
        <ul style="padding-left: 40px; margin-bottom: 40px;">
          <li v-for="js in jso.cat" :key="js">
            {{ js.name }}
            <ul style="padding-left: 40px">
              <li v-for="j in js.ct" :key="j">
                {{ j.name }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </DIV>
</template>

<script>
export default {
  data: () => ({
    json: [
      {
        name: 'Серверное оборудование',
        cat: [
          {
            name: 'Жесткие Диски',
            ct: [
              { name: 'зщы 1' },
              { name: 'зщы 2' },
              { name: 'зщы 3' },
            ]
          },
          {
            name: 'Оперативная память',
            ct: [
              { name: 'зщы 1' },
              { name: 'зщы 2' },
              { name: 'зщы 3' },
            ]
          },
        ]
      },
      {
        name: 'Сетевое оборудование',
        cat: [
          {
            name: 'Контроллеры',
            ct: [
              { name: 'зщы 1' },
              { name: 'зщы 2' },
              { name: 'зщы 3' },
            ]
          },
          {
            name: 'Маршрутизаторы',
            ct: [
              { name: 'зщы 1' },
              { name: 'зщы 2' },
              { name: 'зщы 3' },
            ]
          }
        ]
      },
      {
        name: 'Источники бесперебойного питания',
        cat: [
          {
            name: 'samsung',
            ct: [
              { name: 'зщы 1' },
              { name: 'зщы 2' },
              { name: 'зщы 3' },
            ]
          },
          {
            name: 'dell',
            ct: [
              { name: 'зщы 1' },
              { name: 'зщы 2' },
              { name: 'зщы 3' },
            ]
          }
        ]
      }
    ]
  })
}
</script>

