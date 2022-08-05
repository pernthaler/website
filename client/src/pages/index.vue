<template>
    <div id="container" class="h-full flex flex-col justify-center items-center gap-10 text-center">
        <Background/>
        <h1 class="text-3xl font-bold uppercase word-spacing-full sm:word-spacing-normal">Sebastian Pernthaler</h1>
        <h2 class="text-xl">Software-Developer</h2>
        <ul class="flex flex-col sm:flex-row gap-5">
            <li><Link text="Contact" icon="fa-solid fa-envelope" link="mailto:sebastian@pernthaler.me"/></li>
            <li><Link text="GitHub" icon="fa-brands fa-github" link="https://github.com/Pernthaler/Website"/></li>
            <li><Link text="Xing" icon="fa-brands fa-xing" link="https://www.xing.com/profile/Sebastian_Pernthaler"/></li>
            <li><Link text="LinkedIn" icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/pernthaler/"/></li>
        </ul>
    </div>
</template>

<style scoped lang="less">
@tailwind utilities;

@layer utilities {
  .word-spacing-normal {
    word-spacing: normal;
  }
  .word-spacing-full {
    word-spacing: 100vw;
  }
}

h1, h2 {
  text-shadow: 0 0 5px white;
}
</style>