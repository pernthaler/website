<template>
  <div id="container">
    <Background/>
    <h1>Sebastian Pernthaler</h1>
    <h2>Software-Developer</h2>
    <ul>
      <li><a href="mailto:sebastian@pernthaler.me"><FontAwesomeIcon icon="fa-solid fa-envelope"/> Contact</a></li>
      <li><a target="_blank" ref="noopener noreferrer" href="https://github.com/Pernthaler/Website"><FontAwesomeIcon icon="fa-brands fa-github"/> Source Code</a></li>
      <li><a target="_blank" ref="noopener noreferrer" href="https://www.xing.com/profile/Sebastian_Pernthaler"><FontAwesomeIcon icon="fa-brands fa-xing"/> Xing</a></li>
      <li><a target="_blank" ref="noopener noreferrer" href="https://www.linkedin.com/in/pernthaler/"><FontAwesomeIcon icon="fa-brands fa-linkedin"/> LinkedIn</a></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
#container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  text-align: center;
}

h1, h2 {
  margin: 0;
  text-shadow: 0 0 5px white;
}
h1 {
  text-transform: uppercase;
}
h2 {
  font-weight: normal;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  list-style-type: none;
}

a {
  color: gray;
  outline: none;
  text-decoration: none;
  position: relative;

  &::before, &::after {
    background: gray;
    left: 0;
    top: 100%;
    width: 100%;
    height: 1px;
    position: absolute;
  }
  &::before {
    content: "";
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  &:hover::before, &:focus-visible:before {
    transform-origin: 0 50%;
    transform: scale3d(1, 1, 1);
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    word-spacing: 100vw;
  }
  ul {
    flex-direction: column;
  }
}
</style>