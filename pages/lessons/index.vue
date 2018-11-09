<template>
  <v-container class="mt-0 pt-0">
  <v-card color="accent lighten-4" class="bordered papyrus mt-0 pt-0">
    <v-card-title primary-title>
      <h3 class="papyrus myheader">Learn Kuvalayananda</h3>
      </v-card-title>
  <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="item,i in alankaras" :key="i" xs4>
              <v-btn :to="item.to" large color="secondary" class="text-capitalize font-weight-bold" round>{{item.title}}</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
  </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'lessons',
  data () {
    return {
      alankaras: [
        {
          title: 'Introduction',
          sl_num: '1',
          to: '/lessons/1'
        },
        {
          title: '१. उपमालङ्कारः',
          sl_num: '2',
          to: '/lessons/2'
        },
        {
          title: '२ अनन्वयालङ्कारः',
          sl_num: '3',
          to: '/lessons/3'
        },
        {
          title: '३ उपमेयोपमालङ्कारः',
          sl_num: '4',
          to: '/lessons/4'
        },
        {
          title: '४ प्रतीपालङ्कारः',
          sl_num: '5',
          to: '/lessons/5'
        },
        {
          title: '५ रुपकालङ्कारः',
          sl_num: '6',
          to: '/lessons/6'
        },
        {
          title: '६ परिणामालङ्कारः',
          sl_num: '7',
          to: '/lessons/7'
        },
        {
          title: '७ उल्लेखालङ्कारः',
          sl_num: '8',
          to: '/lessons/8'
        },
        {
          title: '८-१० स्मृति-भ्रान्ति- संदेहालङ्काराः',
          sl_num: '9',
          to: '/lessons/9'
        },
        {
          title: '११ अपह्नुत्यलङ्कारः',
          sl_num: '10',
          to: '/lessons/10'
        },
        {
          title: '१२ उत्प्रेक्षालङ्कारः',
          sl_num: '11',
          to: '/lessons/11'
        },
        {
          title: '१३ अतिशयोक्त्यलङ्कारः',
          sl_num: '12',
          to: '/lessons/12'
        },
        {
          title: '१४ तुल्ययोगितालङ्कारः',
          sl_num: '13',
          to: '/lessons/13'
        },
        {
          title: '१५ दीपकालङ्कारः',
          sl_num: '14',
          to: '/lessons/14'
        },
        {
          title: '१६ आवृत्तिदीपकालङ्कारः',
          sl_num: '15',
          to: '/lessons/15'
        },
        {
          title: '१७ प्रतिवस्तुपमालङ्कारः',
          sl_num: '16',
          to: '/lessons/16'
        },
        {
          title: '१८ दृष्टान्तालङ्कारः',
          sl_num: '17',
          to: '/lessons/17'
        },
        {
          title: '१९ निदर्शनालङ्कारः',
          sl_num: '18',
          to: '/lessons/18'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bordered {
      border: 10px solid transparent;
-webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
    -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
    border-image: url('~/assets/img/border.png') 30 round;
    border-radius: 15px;
    margin:0;
    padding: 2%;
}
</style>
