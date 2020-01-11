<template>
  <component :is="`icon-${name}`" />
</template>

<script lang="ts">
import {
  camelCase,
  forEach,
  upperFirst,
} from 'lodash';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

const files: any = require.context('~public/img/icons/');
const icons: { [key: string]: any } = {};

forEach(files.keys(), (path: string) => {
  const fileName = path.match(/\.\/(.*).svg/);
  if (fileName === null) return;
  const className = upperFirst(camelCase(fileName[1]));
  icons[`Icon${className}`] = files(path).default;
});

@Component({
  components: icons,
})
export default class SvgIcon extends Vue {
  @Prop() name!: string;
}
</script>
