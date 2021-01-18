<template>
  <div id="app">
    <h1 :class="titleCondition">{{ title }}</h1>
    <Main ref="main" class="container" :dataSources="dataSources" :check="check"/>
  </div>
</template>

<script>

import Vue from 'vue'
import Main from "@/components/Main";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns"
import { DataManager,ODataV4Adaptor} from "@syncfusion/ej2-data"

Vue.use(DropDownListPlugin)

export default {
  name: 'App',
  data() {
    return {
      sources: [['mb', 'Материнские платы', 'http://localhost:3000/motherboards'], ['p', 'Процессоры', 'http://localhost:3000/processors'],
                ['c', 'Системы охлаждения', 'http://localhost:3000/coolers'], ['v', 'Видеокарты', 'http://localhost:3000/videocards'],
                ['mem', 'Оперативная память', 'http://localhost:3000/memory'], ['psu', 'Блоки питания', 'http://localhost:3000/psu'],
                ['hdd', 'Жесткие диски', 'http://localhost:3000/hdd'], ['od', 'Оптические приводы', 'http://localhost:3000/optical-drives']],
      dataSources: [],
      title: "Собери компухтер",
      titleCondition: "default"
    }
  },
  mounted() {
    this.sources.forEach((source) => {
      this.dataSources.push({
        id: source[0],
        name: source[1],
        data: new DataManager({
          url: source[2],
          adaptor: new ODataV4Adaptor,
          crossDomain: true
        })
      })
    })
  },
  methods: {
    check(selectedComps) {
      if (this.isFilled(selectedComps)) {
        if (selectedComps.mb.info[0] === selectedComps.p.info[1]) {
          this.title = "Успешно собранная комплектация"
          this.titleCondition = "success"
        } else {
          this.title = "Материнская плата не поддерживает данный процессор"
          this.titleCondition = "fail"
        }
      } else {
        this.title = "Собери компухтер"
        this.titleCondition = "default"
      }
    },
    isFilled(comps) {
      for (let prop of Object.values(comps)) {
        if (prop.id === null)
          return false
      }
      return true
    }
  },
  components: {
    Main,
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
}

h1 {
  margin-bottom: 50px;
}

.default {
  color: black;
}

.success {
  color: limegreen;
}

.fail {
  color: crimson;
}

.container {
  margin-left: auto;
  margin-right: auto;
}
</style>
