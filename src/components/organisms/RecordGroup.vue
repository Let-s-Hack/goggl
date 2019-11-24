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
import Record from '@/components/atoms/Record.vue';
import RecordList from '@/components/molecules/RecordList.vue';
import RecordGroupHeader from '@/components/molecules/RecordGroupHeader.vue';

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
