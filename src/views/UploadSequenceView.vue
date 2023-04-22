<template>
    <FileInput :getFileData="getFileData"/>
    <SequenceDisplayNavigator :selectableItems="['DNA','mRNA','protein','codon','raw output']"/>
</template>

<script>
import FileInput from '../components/sections/FileInput.vue';
import SequenceDisplayNavigator from '../components/SequenceDisplayNavigator.vue';

export default{
    components:{
        FileInput,
        SequenceDisplayNavigator
    }, 
    methods:{
        getFileData(){

        }
    }
}
</script>