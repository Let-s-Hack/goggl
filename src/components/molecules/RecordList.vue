<template>
  <div class="RecordList">
    RecordList
    <RecordListItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecordListItem from '~/atoms/RecordListItem.vue';

@Component({
  components: {
    RecordListItem,
  },
})
export default class RecordList extends Vue {
}
</script>
