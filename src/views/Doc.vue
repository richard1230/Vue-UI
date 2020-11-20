<template>
  <div>
    <Topnav/>
    <div class="content">
     <aside>
       <h2>Components-List</h2>
       <ol>
         <li>
           <router-link to="/doc/switch">Switch Component</router-link>
         </li>
         <li>
           <router-link to="/doc/button">Button Component</router-link>
         </li>
         <li>
           <router-link to="/doc/Dialog">Dialog Component</router-link>
         </li>
         <li>
           <router-link to="/doc/tabs">Tabs Component</router-link>
         </li>
       </ol>
     </aside>
    </div>
  </div>
</template>
<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  export default {
    components:{Topnav}
  }

</script>