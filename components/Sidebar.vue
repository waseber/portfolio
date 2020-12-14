<template>
    <nav>
        <h3>Projects</h3>
        <div class="links">
            <ul>
                <li v-for="project in projects"
                @click="closeMenu"
               >
                    <nuxt-link :to="project.path"
                      class="w-100 m-15 m-b0 button--green"          
                    >
                    {{project.proj_name}}
                    </nuxt-link>
                </li>
          </ul>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
const data = {
  "data": [
      {
        "proj_name": "GenealogyBank.com",
        "path": "/projects/genealogybank"
      },
      {
        "proj_name": "ObitsArchive.com",
        "path": "/projects/obitsarchive"
      },
      {
        "proj_name": "Publisher Archives",
        "path": "/projects/publisher-archives"
      },
      {
        "proj_name": "Nephrology-Hypertension of Naples",
        "path": "/projects/nhn"
      },
      {
        "proj_name": "Loutron",
        "path": "/projects/loutron"
      },
      {
        "proj_name": "My Soundtrack",
        "path": "/projects/mysoundtrack"
      },
      {
        "proj_name": "Reuters",
        "path": "/projects/reuters"
      },
      {
        "proj_name": "Band Site",
        "path": "/projects/band"
      }
    ]   
}
export default {
    data() {
        return {
        data: data.data
        }
    },
    fetch ({ store }) {
        store.commit('toggle')
    },
    computed: {
        ...mapState(['isIn']),  
        
        projects() {
            return this.data
        }
    },

    methods: {
        closeMenu: function() {
            this.$store.commit('toggle')
        }
    
    }
}
</script>

<style scoped>
nav{
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    height: calc(100vh - 100px);
    border-right: 1px solid #ddd;
}

ul{
    padding: 0;
    display: flex;
    flex-direction: column;
}

li{
    display: flex
}
</style>