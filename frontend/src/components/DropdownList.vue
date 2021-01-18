<template>
  <div class='dropdownlist'>
    <ejs-dropdownlist :id='src.id' @change="$emit('getValue', $event, src.id)" :placeholder='src.name'
                      :showClearButton='true' :dataSource='src.data' :fields='fields'></ejs-dropdownlist>
  </div>
</template>

<script>
export default {
  name: "DropdownList",
  props: ['src', 'fields'],
}

</script>

<style scoped>
.dropdownlist {
  width: 400px;
  padding: 0 150px;
}
</style>
