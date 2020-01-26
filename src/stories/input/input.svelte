<input type="{ inputType }" class="text-box" value="{text}" on:click={onClick}>

<style>
    .text-box {
      border: 1px solid #eee;
      border-radius: 3px;
      background-color: #FFFFFF;
      cursor: pointer;
      font-size: 15px;
      padding: 3px 10px;
      margin: 10px;
    }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  export let text = '';
  export let inputType = '';

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event)
  }
</script>
