<script lang="ts" setup>
import YouTube from 'vue3-youtube'

// QUOTES
const quotes = [
  ["tidak ada yang salah dan benar, tergantung sudut pandang", "mas mas pemodif mobil"],
  ["jika tidak tau apa - apa mending diam", "penggeber cbr"],
  ["jangan melihat dunia dengan hitam dan putih", "mas mas apartemen"],
  ["semua itu tergantung perspektif berapa persen", "bogor boy"],
  ["siap2 midnight programming.", "bapak penjoki I"],
  ["saya suka demokrasi, tapi kita vote dulu. tetap suara saya", "bapak pemanggil peserta zoom"],
  ["ga ganteng gpp, yang penting bisa ngoding", "supraboy"],
  ["gapapa wibu, minimal mandi", "leader of gdsc"],
  ["hidup harus ber komitmen", "mas mas sadboy batam"],
  ["yang terpenting itu membangun koneksi", "mas mas penjual parfum"],
  ["tidak berharap kebaikan orang meski kita sudah berbuat kebaikan", "mas mas ditinggal pabrik"],
  ["solusi untuk kelas penuh adalah, disama ratakan", "bapak leader of TI"],
  ["jika bekerja, jangan menggunakan mindset pegawai tapi mindset bos", "bos saham"],
  ["jangan kosongkan hatimu, karena mixue menempati ruko", "bos gotod"],
  ["ga menang ga tidur, 3 kali menang buka skin", "tia esport member"],
  ["tidak peduli nilai A, bertemu tunangan adalah keharusan", "tunangan ldr"],
  ["jika bisa ambil 2 banyak uang, kenapa tidak?", "bapak pembina msib"],
  ["kalau merasa ga semangat mungkin harus berkomitmen dulu", "penjaga lab jarkom"]
]
const randomQuotes = () => quotes.sort(() => Math.random() - 0.5)

// MUSIC
const ag2ytControl = function(ytframe?: HTMLIFrameElement, action?: string, arg=null){
  ytframe?.contentWindow?.postMessage('{"event":"command", "func":"'+action+'", "args":'+arg+'}', '*');
}
const ytframe = ref(null)
const showOnBoardingScreen = ref(true)
const ytstate = ref(false)
const tapOnBoardingScreen = () => {
  showOnBoardingScreen.value = false
  setTimeout(() => {
    (ytframe.value as any)?.playVideo()
    ytstate.value = true
  }, 1000)
}
</script>

<template>
  <div v-if="showOnBoardingScreen" class="w-full h-full bg-slate-900 fixed top-0 left-0 z-50 flex flex-col justify-center items-center font-mono" @click="tapOnBoardingScreen">
    <div class="text-4xl font-bold mb-4">HAPPY NEW YEAR 2023!!!</div>
    <div>click or tap anywhere to continue</div>
  </div>
  <div class="screen w-full min-h-screen flex flex-col overflow-hidden text-gray-100 font-sans">
    <Countdown class="rainbow-border fixed ml-4 mt-4 bg-slate-900/50 backdrop-filter backdrop-blur-xl px-4 py-2 font-mono text-lg font-bold" />
    <div class="absolute w-screen h-screen overflow-hidden">
      <div class="moon">
        <div class="orbit"></div>
      </div>
      <div v-for="i in 10" :key="Math.random()" class="firework" />
    </div>
    <div class="flex-1 relative flex justify-center items-center flex-col">
      <div class="mb-16 text-4xl text-center pt-10 px-20 font-black font-mono">
        BEST QUOTES OF TI 2022
      </div>
      <div class="flex flex-col space-y-8">
        <div v-for="i in 4" :key="Math.random()" class="running-flex flex space-x-8 px-10" :class="{ 'reverse': i % 2 === 0 }">
          <div v-for="item in randomQuotes()" :key="Math.random()" class="transition-all duration-300 px-8 py-6 w-80 flex flex-col rounded-xl shadow-xl backdrop-filter backdrop-blur-xl bg-slate-700/50 cursor-pointer transform hover:scale-110">
            <div class="flex-1 font-semibold mb-2">
              "{{ item[0] }}"
            </div>
            <div class="text-sm italic text-gray-400 font-mono">- {{ item[1] }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 z-30 w-full lg:w-96 h-24 flex space-x-4 md:mb-4 md:ml-4 bg-slate-700/80 backdrop-blur-3xl overflow-hidden md:rounded-lg">
      <div class="w-1/3 overflow-hidden relative flex justify-center items-center">
        <!-- <iframe id="ytframe" ref="ytframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/edid66UmfiQ?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode en</a></small></div><div><small><a href="https://skattefrittcasino.com/">skattefrittcasino.com</a></small></div></iframe> -->
        <YouTube width="146px " height="96px" ref="ytframe" src="https://www.youtube.com/embed/edid66UmfiQ?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" />
        <div class="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <div class="font-bold text-sm mb-1">女の子は強い／高嶺のなでしこ</div>
        <div class="text-xs -ml-2">【HoneyWorks】</div>
      </div>
    </div>
    <div class="tso-rainbow" />
  </div>
</template>

<style lang="scss">
.running-flex {
  animation-name: example;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &.reverse {
    animation-direction: reverse;
  }
}
@keyframes example {
  0% {
    transform: translateX(-28%);
  }
  100% {
    transform: translateX(28%);
  }
}

body {
  color: white;
  font-family: 'Poppins', sans-serif;

  background: linear-gradient(224deg, #081426, #163058);
  background-size: 400% 400%;

  -webkit-animation: BackgroundGradientAnim 10s ease infinite;
  -moz-animation: BackgroundGradientAnim 10s ease infinite;
  animation: BackgroundGradientAnim 10s ease infinite;
}

@-webkit-keyframes BackgroundGradientAnim {
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
}
@-moz-keyframes BackgroundGradientAnim {
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
}
@keyframes BackgroundGradientAnim {
  0%{background-position:90% 0%}
  50%{background-position:11% 100%}
  100%{background-position:90% 0%}
}
@keyframes tso-rainbow {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100vw 0;
  }
}
.tso-rainbow {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
}

.tso-rainbow:before {
  content: '';
  width: 100%;
  height: 2px;
  background: linear-gradient(to right,#ff0075 0,#00dcff 75%,#ff0075 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  animation-name: tso-rainbow;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 10s;
}
</style>
