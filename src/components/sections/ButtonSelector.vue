<template>
    <ul class="selector-list">
        <button v-for="(type, index) in selectables" :key="index" @click="selectType(type)" :class="[{ 'selector-list-button-active': selectedType === type }, 'selector-list-button-inactive']">{{ type }}</button>
    </ul>
</template>

<script>
export default{
    props: {
        selectables: Array,
        getSelectedButton: Function

    },
    data() {
        return {
            selectedType: '',

            // Class binding values
            'selector-list-button-active': 'selector-list-button-active',
            'selector-list-button-inactive': 'selector-list-button-inactive'
        }
    },
    methods:{
        selectType(typeSelected){
            this.selectedType = typeSelected;
            this.getSelectedButton(this.selectedType)
        }
    }
}
</script>

<style lang="scss" scoped>
.selector-list{
    display: flex;
    margin-block: 0;
    padding-inline-start:0;

    &-button {
        // Basic button styling (without background, determined by activeness)
        border: 1px solid black;
        border-bottom: 0;
        font: inherit;
        padding: 5px 20px 0 20px;
    }

    &-button-active{
        @extend .selector-list-button;
        background-color: aliceblue !important;
    }

    &-button-inactive{
        @extend .selector-list-button;
        background-color: darkturquoise;
    }
}



</style>