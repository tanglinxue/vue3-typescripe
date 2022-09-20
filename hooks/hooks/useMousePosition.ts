import { ref,onMounted,onBeforeUnmount} from 'vue';
export default function () {
  const x = ref(-1)
  const y = ref(-1)
  const clickHandler = (event: any) => {
    x.value = event.pageX;
    y.value = event.pageX;
  }
  onMounted(() => {
    window.addEventListener('click', clickHandler)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', clickHandler)
  })
  return {
    x,
    y
  }
}
