<script lang="ts" setup>
const showWindow = ref(false);
const toggleWindow = () => {
  showWindow.value = !showWindow.value;
};
</script>

<template>
  <div class="">
    <img
      v-if="!showWindow"
      alt="ai-icon"
      class="bottom-6 right-6 h-9 w-9 sm:fixed md:hidden"
      src="/img/plans/ai.png"
      @click="toggleWindow"
    />
    <!--  chat window-->
    <Transition name="fade-in">
    <div
      v-if="showWindow"
      class="fixed bottom-20 right-6 flex h-[50vh] w-[90vw] flex-col rounded-2xl bg-white"
    >
      <div
        class="relative flex h-14 items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-teal-500"
      >
        <p class="font-regular font-rowdies text-xl text-white">
          AI Bot Assistant
        </p>
        <img
          alt="close-icon"
          class="absolute right-3 top-1/2 w-6 translate-y-[-50%]"
          src="/img/plans/close.png"
          @click="toggleWindow"
        />
      </div>
      <div class="flex w-full grow items-start px-4 py-4">
        <div class="flex flex-row items-center gap-2">
          <img class="h-9" src="/img/plans/ai.png" />
          <div
            class="inline-flex rounded border border-gray-200 bg-white p-2 shadow"
          >
            <p class="font-saira text-base font-normal text-slate-600">
              How can i help you today?
            </p>
          </div>
        </div>
      </div>
      <div class="px-4 py-3">
        <div
          class="relative flex w-full items-center rounded-md bg-white px-4 py-1 shadow"
        >
          <input class="grow" placeholder="Write something here..." />
          <img alt="send-icon" class="w-6" src="/img/plans/send.png" />
        </div>
      </div>
    </div>
    </Transition>
    <!--  chat window-->
  </div>
</template>

<style lang="scss" scoped>
input:focus,
input:active,
textarea:focus,
textarea:active {
  outline: none;
}

.fade-in-enter-active {
  animation: fade-in 0.25s ease-in-out;
}
.fade-in-leave-active {
  animation: fade-in 0.25s reverse ease-in-out;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
