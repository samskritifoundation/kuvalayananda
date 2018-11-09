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
        drawer: null,
        items: [
          {
            title: 'Introduction',
            sl_num: '1',
            group: false,
            to: '/lessons/1'
          },
          {
            title: '१. उपमालङ्कारः',
            sl_num: '2',
            group: false,
            to: '/lessons/2'
          },
          {
            title: '२ अनन्वयालङ्कारः',
            sl_num: '3',
            group: false,
            to: '/lessons/3'
          },
          {
            title: '३ उपमेयोपमालङ्कारः',
            sl_num: '4',
            group: false,
            to: '/lessons/4'
          },
          {
            title: '४ प्रतीपालङ्कारः',
            sl_num: '5',
            group: false,
            to: '/lessons/5'
          },
          {
            title: '५ रुपकालङ्कारः',
            sl_num: '6',
            group: false,
            to: '/lessons/6'
          },
          {
            title: '६ परिणामालङ्कारः',
            sl_num: '7',
            group: false,
            to: '/lessons/7'
          },
          {
            title: '७ उल्लेखालङ्कारः',
            sl_num: '8',
            group: false,
            to: '/lessons/8'
          },
          {
            title: '८-१० स्मृति-भ्रान्ति- संदेहालङ्काराः',
            sl_num: '9',
            group: false,
            to: '/lessons/9'
          },
          {
            title: '११ अपह्नुत्यलङ्कारः',
            sl_num: '10',
            group: false,
            to: '/lessons/10'
          },
          {
            title: '१२ उत्प्रेक्षालङ्कारः',
            sl_num: '11',
            group: false,
            to: '/lessons/11'
          },
          {
            title: '१३ अतिशयोक्त्यलङ्कारः',
            sl_num: '12',
            group: false,
            to: '/lessons/12'
          },
          {
            title: '१४ तुल्ययोगितालङ्कारः',
            sl_num: '13',
            group: false,
            to: '/lessons/13'
          },
          {
            title: '१५ दीपकालङ्कारः',
            sl_num: '14',
            group: false,
            to: '/lessons/14'
          },
          {
            title: '१६ आवृत्तिदीपकालङ्कारः',
            sl_num: '15',
            group: false,
            to: '/lessons/15'
          },
          {
            title: '१७ प्रतिवस्तुपमालङ्कारः',
            sl_num: '16',
            group: false,
            to: '/lessons/16'
          },
          {
            title: '१८ दृष्टान्तालङ्कारः',
            sl_num: '17',
            group: false,
            to: '/lessons/17'
          },
          {
            title: '१९ निदर्शनालङ्कारः',
            sl_num: '18',
            to: '/lessons/18'
          },
          {
            title: ' ',
            sl_num: '19',
            to: '/exercises'
          }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>