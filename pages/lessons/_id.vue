<template>
<v-container xs12 class="mt-0 pt-0">
  <v-layout row class="neg_margin">
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }"  :to=previous><b>Previous</b></v-btn>
  <v-spacer></v-spacer>
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }" :to=next><b>Next</b></v-btn>
  </v-layout>
<v-card xs12 color="accent lighten-4" class="mt-0 pt-0 bordered">
    <v-card-title primary-title>
      <v-layout class="text-wrap text-xs-center" xs12 row>
        <v-flex>
        <h3 class="myheader"><span class="devanagari">{{lesson.title_sans}}</span> <br>{{lesson.title_eng}}</h3>
        </v-flex>
        </v-layout>
        </v-card-title>
<v-layout row v-for="(sloka,i) in lesson.slokas" :key="i">
  <v-flex xs12 mb-3>
      <v-expansion-panel popout focusable>
        <v-expansion-panel-content ripple="true" >
          <div slot="header" class="secondary--text subheading font-weight-bold" v-if="sloka">Sloka {{i + 1}}</div>
          <v-layout xs12 row>
        <v-flex>
          <v-card color="accent lighten-5" class="title text-xs-center">
              <v-card-text v-html="sloka.sloka" ></v-card-text>
            </v-card>
        </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout focusable>
        <v-expansion-panel-content>
          <div slot="header" class="secondary--text subheading font-weight-bold">Explanation of Sloka</div>
          <v-layout xs12 row>
        <v-flex>
          <v-card color="accent lighten-3">
              <v-card-text>
                <v-tabs centered hide-slider="true" color="accent lighten-3">
              <v-tab
                v-for="n in ['Sanskrit','English']"
                :key="n"
              >
                <v-btn color="accent darken-3">{{ n }}</v-btn>
              </v-tab>
              <v-tab-item v-for="lang in sloka.sloka_explanation" :key="lang">
                <p class="mt-3 subheading" v-html="lang"></p>
              </v-tab-item>
            </v-tabs>
              </v-card-text>
            </v-card>
        </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel popout focusable v-if="sloka.examples">
        <v-expansion-panel-content>
          <div slot="header" class="secondary--text subheading font-weight-bold">Example(s)</div>
        <v-layout xs12 row>
        <v-flex>  
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
        {{ n }}

      </v-tab>
      <v-tab-item
        v-for="example in sloka.examples"
        :key="example"
      >
        <v-card xs12 flat color="warning">
          <v-card-title class="title mb-0 text-xs-center" v-html="example.text"></v-card-title>
          <v-card-text>
            <v-layout xs12 row>
        <v-flex>
          <h3 class="text-xs-center">Explanation</h3>
            <v-tabs centered hide-slider="true" color="warning">
              <v-tab
                v-for="n in ['Sanskrit','English']"
                :key="n"
              >
                <v-btn color="accent darken-5">{{ n }}</v-btn>
              </v-tab>
              <v-tab-item v-for="lang in example.explanation" :key="lang">
                <p class="subheading" v-html="lang"></p>
              </v-tab-item>
            </v-tabs>
        </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
        </v-flex>
        </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-flex>
</v-layout>

      <div v-if="lesson.types" class="myheader3">
        <v-layout row>
  <v-flex xs12 mb-3>
        <div class="text-xs-center mt-3">
          <h3>Types: {{lesson.types}}</h3>
        <v-btn @click="nexttab">next type</v-btn>
    </div>
    <v-tabs
      v-model="active"
      color="accent"
      dark centered
      slider-color="yellow"
    >
      <v-tab
        v-for="m in lesson.types"
        :key="m"
        ripple
        class="font-weight-bold"
      >
        {{ m }}

      </v-tab>
      <v-tab-item
        v-for="(p,j) in lesson.type"
        :key="j"
      >
        <v-card flat>
          <v-card-text class="devanagari text-wrap">
            <h3>Type {{j+1}}</h3>
            <p v-if="p.sloka" v-html="p.sloka"></p>
            <p class="text-xs-center">
              Explanation:
              </p>
          <v-tabs centered hide-slider>
              <v-tab
                v-for="l in ['Sanskrit','English']"
                :key="l"
              >
                <v-btn color="accent darken-3">{{ l }}</v-btn>
              </v-tab>
              <v-tab-item v-for="lang in p.sloka_explanation" :key="lang">
                <v-layout row xs12>
                  <v-flex>
                <p class="mt-3" v-html="lang"></p>
                  </v-flex>
                </v-layout>
              </v-tab-item>
            </v-tabs>
            <p class="text-xs-center">
              Examples:
              </p>
              <div v-for="ex in p.examples" :key="ex">
                <div v-for="prop in ex" :key="prop">
                  <p v-html="prop"></p>
                </div>
              </div>
            </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
</v-flex>
</v-layout>
  </div>
  </v-card>
  <v-layout row >
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }"  :to=previous><b>Previous</b></v-btn>
  <v-spacer></v-spacer>
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }" :to=next><b>Next</b></v-btn>
  </v-layout>
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

.text-wrap {
  word-wrap: break-word;
}

</style>
