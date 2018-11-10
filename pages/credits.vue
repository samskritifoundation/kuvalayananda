<template>
  <v-layout column justify-center align-center class="papyrus">
    <v-flex md6>
      <div class="text-xs-center">
    <sflogo title="संस्कृति-प्रतिष्ठानम्" subtitle1="Samskriti Foundation" subtitle2="An organisation engaged in the preservation, revival and propagation of the Indian Knowledge Systems and Cultural and Scientific Heritage of India" />
    </div>
    <v-card color="transparent" flat>
      <v-card-text class="subheading font-weight-black text-xs-center">
      <h3>Credits</h3>
      <a href="https://sa.wikisource.org/wiki/%E0%A4%95%E0%A5%81%E0%A4%B5%E0%A4%B2%E0%A4%AF%E0%A4%BE%E0%A4%A8%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%83_%E0%A4%B8%E0%A5%8B%E0%A4%A6%E0%A4%BE%E0%A4%B9%E0%A4%B0%E0%A4%A3%E0%A4%AE%E0%A5%8D">Source for Sanskrit Text</a>
    </v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sflogo from '../components/SFLogo.vue'
export default {
  components: {
    sflogo
  }
}
</script>