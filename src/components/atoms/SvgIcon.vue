<template>
  <component :is="`icon-${name}`" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// TODO: SVGを一つずつimportしているので、一括でimportしたい。参考：https://github.com/nicooprat/icon.vue/blob/master/src/components/Icon.vue
import IconAdd from '~public/img/icons/add.svg';
import IconArrow from '~public/img/icons/arrow.svg';
import IconCalendar from '~public/img/icons/calendar.svg';
import IconCheckCircle from '~public/img/icons/check-circle.svg';
import IconClose from '~public/img/icons/close.svg';
import IconGraph from '~public/img/icons/graph.svg';
import IconSearch from '~public/img/icons/search.svg';
import IconSetting from '~public/img/icons/setting.svg';
import IconSpinner from '~public/img/icons/spinner.svg';
import IconTag from '~public/img/icons/tag.svg';
import IconTime from '~public/img/icons/time.svg';
import IconTimer from '~public/img/icons/timer.svg';
import IconTriangleGray from '~public/img/icons/triangle-gray.svg';
import IconTriangleWhite from '~public/img/icons/triangle-white.svg';

@Component({
  components: {
    IconAdd,
    IconArrow,
    IconCalendar,
    IconCheckCircle,
    IconClose,
    IconGraph,
    IconSearch,
    IconSetting,
    IconSpinner,
    IconTag,
    IconTime,
    IconTimer,
    IconTriangleGray,
    IconTriangleWhite,
  },
})
export default class SvgIcon extends Vue {
  @Prop() name!: String;
}
</script>
