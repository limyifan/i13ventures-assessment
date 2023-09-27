<script setup>
import Button from "~/components/widgets/Button.vue";

definePageMeta({
  layout: "gradient",
});

onMounted(() => {
// function([string1, string2],target id,[color1,color2])
  consoleText([' Hi! I\'m Bob, your personal assistant👋. \n' +
  '      I\'ll be guiding you through your onboarding process. \n' +
  '      Let\'s get started!'], 'text',['white']);

});
const interval1=ref(null)
const interval2=ref(null)

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  interval1.value= window.setInterval(function() {

    //if this is the first text to be displayed
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    }
    //when all texts are displayed, show the next button
    else if (letterCount === words[0].length + 1 && waiting === false) {
      document.getElementById("next-btn").style.opacity=1
    }
    //loop through the texts one by one
    else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 60)

  //blinking cursor animation
  interval2.value=window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

onUnmounted(()=> {
  clearInterval(interval1.value)
  clearInterval(interval2.value)
})
</script>

<template>
  <div
    class="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center sm:w-[70vw] lg:w-[48rem] gap-10"
  >
    <img alt="ai-icon" src="/img/plans/ai.png" class="w-24" />

<!--    container for displaying texts-->
    <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
    <!--    container for displaying texts-->

<!--    next button-->
    <NuxtLink to="/plans">
      <Button text="Next" id="next-btn" />
    </NuxtLink>
    <!--    next button-->

  </div>
</template>

<style lang="scss" scoped>
.hidden {
  opacity:0;
}
#next-btn{
  opacity: 0;
  transition: 1s all ease-out;
}
.console-container {
  font-family:"Rowdies";
  font-size:2.5rem;
  text-align:center;
  color:white;
}
.console-underscore {
  display:inline-block;
  position:relative;
  top:-0.14em;
  left:10px;
}
@include mq(ipad) {
  .console-container {
    font-size:1.5rem;
  }
}
</style>
