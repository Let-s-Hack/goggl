<template>
  <div class="RecordGroup">
    RecordGroup
    <RecordGroupHeader />
    <Record />
    <RecordList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Record from '~/atoms/Record.vue';
import RecordList from '~/molecules/RecordList.vue';
import RecordGroupHeader from '~/molecules/RecordGroupHeader.vue';

@Component({
  components: {
    Record,
    RecordList,
    RecordGroupHeader,
  },
})
export default class RecordGroup extends Vue {
}
</script>
