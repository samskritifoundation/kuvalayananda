<template>
  <v-layout
    wrap
    style="height: 200px;"
  >

        <v-btn
          color="secondary"
          dark 
          round
          @click.stop="drawer = !drawer"
          class="ma-4 font-weight-bold text-capitalize"
        >
          All Lessons
        </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      class="primary"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile dark v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-icon>library_books</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Lessons</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-text-field
        v-model="searchlist"
        append-icon="search"
        label="Search"
        single-line
        class = "px-3"
      ></v-text-field>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

      <div v-for="item in items" :key="item.title" active-class="yellow--text">

        <v-list-group active-class="yellow--text" v-if="item.group" value="true">

          <v-list-tile active-class="yellow--text" dark slot="activator" router :to="item.to">
            <v-list-tile-action>{{ item.sl_num }}.</v-list-tile-action>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile>

          <div v-for="subitem in item.subitems" :key="subitem.title">

          <v-list-group active-class="yellow--text" v-if="subitem.subgroup" sub-group>

            <v-list-tile active-class="yellow--text" slot="activator" class="link" router :to="subitem.to">
              <v-list-tile-action>{{subitem.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{subitem.title}}</v-list-tile-title>
            </v-list-tile>

            <div v-for="div in subitem.divs" :key="div.title">

              <v-list-group active-class="yellow--text" v-if="div.types" sub-group>

                <v-list-tile active-class="yellow--text" slot="activator" class="link" router :to="div.to">
                  <v-list-tile-action>{{div.sl_num}}</v-list-tile-action>
                  <v-list-tile-title>{{div.title}}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile active-class="yellow--text" v-for="vritta in div.vrittas" :key="vritta.title" class="link" router :to="vritta.to">
              <v-list-tile-action>{{vritta.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{vritta.title}}</v-list-tile-title>
            </v-list-tile>

              </v-list-group>

            <v-list-tile active-class="yellow--text" v-else class="link" router :to="div.to">
              <v-list-tile-action>{{div.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{div.title}}</v-list-tile-title>
            </v-list-tile>

            </div>

          </v-list-group>

          <v-list-tile active-class="yellow--text" class="link" v-else router :to="subitem.to">
            <v-list-tile-action>{{subitem.sl_num}}</v-list-tile-action>
            <v-list-tile-title>{{subitem.title}}</v-list-tile-title>
          </v-list-tile>

          </div>

        </v-list-group>

        <v-list-tile active-class="yellow--text" class="link" v-else router :to="item.to">
           <v-list-tile-action>{{ item.sl_num }}. </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        </div>

         
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        searchlist: '',
        drawer: null,
        titles: this.$store.state.titles,
        mini: false,
        right: null
      }
    },
    computed: {
      items () {
        if (this.searchlist) {
          return this.titles.filter(item => {
            return item.title.includes(this.searchlist)
          })
        } else {
          return this.titles
        }
      }
    }
  }
</script>