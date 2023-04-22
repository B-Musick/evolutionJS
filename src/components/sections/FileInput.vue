<template>
    <div class="file-input-section">
        <div class="file-input-section-title">input file</div>
        <!-- Where file is selected, accepts only .fasta files -->
        <input id='fileItem' ref="doc" type="file" @change="handleFile()" accept=".fasta">
        <!-- <div v-for="genome in extractedGenomes">{{ genome.genomeString() }}</div> -->

        <!-- <div class="file-input-section-title">input sequence text</div> -->
    </div>
</template>

<script>
// import SequenceIO from '../../classes/SequenceIO';

export default{
    name: 'FileInput',
    props:{
        getFileData: Function
    },
    data(){
        return {
            // isMRNA: false,
            // isDNA: false,
            // extractedGenomes: null,
            file: null,
            content: null // Display total file content
        }
    },
    watch:{
        content(newData){
            let seqIO = new SequenceIO();
            let fileType = "fasta";

            this.extractedGenomes = seqIO.parse(newData,fileType);
        }
    },
    methods:{
        handleFile(e){
            this.file = this.$refs.doc.files[0];
            const reader = new FileReader();

            if (this.file.name.includes(".fasta")) {
                reader.onload = (res) => {
                    this.content = res.target.result;
                };
                reader.onerror = (err) => console.log(err);
                reader.readAsText(this.file);
            } else {
                this.content = "check the console for file output";
                reader.onload = (res) => {
                    console.log(res.target.result);
                };
                reader.onerror = (err) => console.log(err);
                reader.readAsText(this.file);
            }
        }
    }
}
</script>

<style scoped lang="scss">
    textarea{
        color: black;
    }
</style>