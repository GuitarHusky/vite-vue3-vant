import { h, ref, reactive, computed } from 'vue';
const second = reactive({ title: 'The Other Function' });

function testAlert() {
    alert('test alert');
};
export default {
    second,
    testAlert
}