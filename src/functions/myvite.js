import { h, ref, reactive, computed } from 'vue';
const readersNumber = ref(0)
const book = reactive({ title: 'This Is Vue 3 Guide' })
    // Please note that we need to explicitly expose ref value here
    // return () => h('div', [readersNumber.value, book.title])
const plusOne = computed(() => readersNumber.value)

function setBook() {
    book.title = `it is changed `
}

function setcount() {
    readersNumber.value++;
}
export default {
    readersNumber,
    book,
    setBook,
    setcount,
    plusOne
}