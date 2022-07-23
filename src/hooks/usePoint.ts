import { reactive } from "vue";

export default function () {
  const point = reactive<{ x: number; y: number }>({ x: 0, y: 0 });
  return point;
}
