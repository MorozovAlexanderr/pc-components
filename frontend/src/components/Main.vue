<template>
  <table>
    <tr class="row" v-for="src in dataSources">
      <td>
        <img v-if="selectedComps[src.id].image !== null" :src="selectedComps[src.id].image" alt="img">
        <div class="default_img" v-else></div>
      </td>
      <td>
        <DropdownList :src="src" :fields="fields" @getValue="getValue"/>
      </td>
      <td>
        <div class="item_info">
          {{ selectedComps[src.id].info[0] }}
        </div>
      </td>
    </tr>
  </table>
</template>

<script>

import DropdownList  from "@/components/DropdownList";

export default {
  name: "Rows",
  props: ['dataSources'],
  data() {
    return {
      selectedComps: {
        mb: {id: null, info: [], image: null}, p: {id: null, info: [], image: null},
        c: {id: null, info: [], image: null}, v: {id: [], info: [], image: null},
        mem: {id: null, info: [], image: null}, psu: {id: null, info: [], image: null},
        hdd: {id: null, info: [], image: null}, od: {id: null, info: [], image: null}
      },
      fields: { text: "title", value: "id"}
    }
  },
  methods: {
    getValue(e, itemId) {
      if (e.value === null) {
        this.selectedComps[itemId] = {
          id: null,
          info: [],
          image: null
        }
      } else {
        this.selectedComps[itemId] = {
          id: e.value,
          info: e.itemData.info,
          image: e.itemData.image
        }
      }
      this.$parent.check(this.selectedComps)
    },
  },
  components: {
    DropdownList
  }
}
</script>

<style scoped>
.row {
  height: 100px;
}

img {
  height: 70px;
  width: 70px;
  object-fit: contain;
}

.default_img {
  border: 1px solid #dbdbdb;
  height: 70px;
  width: 70px;
}

.item_info {
  width: 100px;
}
</style>
