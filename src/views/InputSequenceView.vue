<template>
    <TextInput />
    <SequenceDisplayNavigator :selectableItems="['DNA', 'mRNA','protein','codon', 'RAW output']"/>
</template>

<script>
import TextInput from '../components/sections/TextInput.vue'
import SequenceDisplayNavigator from '../components/SequenceDisplayNavigator.vue'


export default {
    components: {
        TextInput,
        SequenceDisplayNavigator
    }
    /**
     * @todo: process the input data, pass it to DisplayNavigator
     */
}
</script>