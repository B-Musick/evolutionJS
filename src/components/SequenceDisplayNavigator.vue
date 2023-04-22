<template>
    <ButtonSelector :getSelectedButton="getSelectedButton" :selectables="selectableItems" />
    <OutputDisplay />
</template>

<script>
import OutputDisplay from './sections/OutputDisplay.vue'
import ButtonSelector from './sections/ButtonSelector.vue'

export default{
    props:{
        selectableItems: Array,
        dataToDisplay: ''
    },
    data(){
        return{
            currentButtonSelected: '',
            contentDisplayed: ''
        }
    },
    components:{
        OutputDisplay,
        ButtonSelector
    },
    methods:{
        getSelectedButton(buttonName){
            // Data passed child (ButtonSelector) to parent (this)
            this.currentButtonSelected = buttonName;
        },
    }
}
</script>