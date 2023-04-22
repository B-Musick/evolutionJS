<template>
    <div class="text-display-input">
        <textarea v-model="sequenceInput" placeholder="- Paste or type DNA sequence here. 
    - Resize text area by holding the diagonal lines at bottom right of this text area." rows="10" cols="50"></textarea>
    </div>
</template>

<script>

export default{
    data(){
        return{
            sequenceInput: ''
        }
    }
}
</script>

<style lang="scss" >
.text-display-input{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    min-width: 450px;
    width: 100%;
}
textarea{
    width: fit-content; 
    min-width: 450px;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
}
</style>