<template>
    <nav>
        <h3>Projects</h3>
        <div class="links">
                <nuxt-link v-for="project in projects" :to="project.path"
                    class="m-15 m-b0 button--green"
                >
                {{project.proj_name}}
                </nuxt-link>
          
        </div>
    </nav>
</template>

<script>
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
    computed: {
        projects() {
        return this.data
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

.links{
    display: flex;
    flex-direction: column;
}
</style>