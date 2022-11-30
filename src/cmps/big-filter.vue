<template>
    <section>
      <button class="big-filter-btn grid column" v-bind:class="{isActive:isWhereSearch}">
        <div>Where</div>
        <input type="text" placeholder="search destination">
      </button>|
      <button class="big-filter-btn grid column" v-bind:class="{isActive:isWhenSearch}"><div>Check in</div><div>Add dates</div></button>|
      <button class="big-filter-btn grid column"><div>Check out</div><div>Add dates</div></button>|
      <div class="big-filter-btn">
        <button class="who-filter-btn grid column" v-bind:class="{isActive:isWhoSearch}"><div>Who</div><div>Add guests</div></button>
        <button class="main-filter-search-btn"><div class="s1qcpybl dir dir-ltr" data-icon="true" data-testid="little-search-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></div></button>
      </div>
    </section>    
</template>

<script>
    export default {
        props: {
          isWhereSearch:Boolean,
          isWhenSearch:Boolean,
          isWhoSearch:Boolean,
            
        }
    }
</script>