<template>
<v-container class="mt-0 pt-0">
  <v-layout row class="neg_margin">
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }"  :to=previous><b>Previous</b></v-btn>
  <v-spacer></v-spacer>
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }" :to=next><b>Next</b></v-btn>
  </v-layout>
<v-card color="accent lighten-4" class="mt-0 pt-0 bordered">
    <v-card-title primary-title>
        <h3 class="myheader"><span class="devanagari">{{lesson.title_sans}}</span> <br>{{lesson.title_eng}}</h3>
        </v-card-title>
<v-layout row v-for="(sloka,i) in lesson.slokas" :key="i">
  <v-flex xs12 mb-3>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header" class="primary--text">Sloka {{i + 1}}</div>
          <v-card dark color="primary">
              <v-card-text v-html="sloka.sloka" ></v-card-text>
            </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header" class="secondary--text">Explanation of Sloka(s)</div>
          <v-card dark color="secondary">
              <v-card-text>
                <v-tabs centered hide-slider="true" color="secondary">
              <v-tab
                v-for="n in ['Sanskrit','English']"
                :key="n"
              >
                <v-btn color="secondary lighten-3">{{ n }}</v-btn>
              </v-tab>
              <v-tab-item v-for="lang in sloka.sloka_explanation" :key="lang">
                <p class="mt-3" v-html="lang"></p>
              </v-tab-item>
            </v-tabs>
              </v-card-text>
            </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout>
        <v-expansion-panel-content>
          <div slot="header" class="accent--text">Example(s)</div>
    <v-tabs
      fixed-tabs
      v-model="active"
      color="accent"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="n in sloka.examples.length"
        :key="n"
        ripple
      >
        Example {{ n }}

      </v-tab>
      <v-tab-item
        v-for="example in sloka.examples"
        :key="example"
      >
        <v-card flat color="warning">
          <v-card-title class="headline mb-0" v-html="example.text"></v-card-title>
          <v-card-text>
            <v-tabs centered hide-slider="true" color="warning">
              <v-tab
                v-for="n in ['Explanation in Sanskrit','Explanation in English']"
                :key="n"
              >
                <v-btn color="accent darken-5">{{ n }}</v-btn>
              </v-tab>
              <v-tab-item v-for="lang in example.explanation" :key="lang">
                <p v-html="lang"></p>
              </v-tab-item>
            </v-tabs>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-flex>
</v-layout>

      <div v-if="lesson.types" class="myheader3">
        <div class="text-xs-center mt-3">
        <v-btn @click="nexttab">next tab</v-btn>
    </div>
    <v-tabs
      v-model="active"
      color="accent"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="n in lesson.types"
        :key="n"
        ripple
        class="font-weight-bold"
      >
        {{ n }}

      </v-tab>
      <v-tab-item
        v-for="n in lesson.type"
        :key="n"
      >
        <v-card flat>
          <v-card-text class="devanagari" v-html="n.text_sans"></v-card-text>
          <v-img :src='n.ex' width="100%"></v-img>
        </v-card>
      </v-tab-item>
    </v-tabs>

  </div>
  </v-card>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      id: String(this.$route.params.id),
      lesson: '',
      index: '',
      prev_lesson: '',
      next_lesson: '',
      length: '',
      previous: '/',
      next: '/',
      items: ['sloka', 'explanation', 'example', 'explanation'],
      length1: 3,
      window: 0
    }
  },
  layout: 'lessons',
  mounted () {
    console.log(this.id)
    this.lesson = this.$store.state.lessons.find(less => String(less.id) === this.id)
  },
  created () {
    // console.log(this.$store.state.lessons.find(lesson => lesson.id === '4.1'))
    this.index = this.$store.state.lessons.findIndex(lesson => String(lesson.id) === this.id)
    this.prev_lesson = this.$store.state.lessons[this.index - 1]
    this.next_lesson = this.$store.state.lessons[this.index + 1]
    this.length = this.$store.state.lessons.length
    this.previous = this.index > 1 ? '/lessons/' + (this.prev_lesson.id) : '/lessons/1'
    this.next = this.index < this.length - 1 ? '/lessons/' + (this.next_lesson.id) : '/lessons/19'
    // console.log(this.index)
    // console.log(this.prev_lesson)
    // console.log(this.next_lesson.id)
    // console.log(this.$store.state.lessons)
    // console.log(this.$axios.$get('/lessons/' + this.$route.params.id))
  },
  methods: {
    nexttab () {
      const active = parseInt(this.active)
      this.active = (active < this.lesson.types - 1 ? active + 1 : 0)
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

 .neg_margin {
  margin-top: -10%;
}

table {
  border: 1px solid black;
}
</style>
