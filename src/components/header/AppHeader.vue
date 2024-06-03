<script>
  export default {};
</script>

<template>
  <header>
    <h1>Rick and Morty App</h1>
  </header>
</template>

<style lang="scss" scoped>
  header {
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    h1 {
      line-height: 1em;
      color: white;
      font-weight: bold;
      font-size: 125px;
      text-shadow: 0px 0px 0 rgb(235, 235, 235), -1px -1px 0 rgb(225, 225, 225),
        -2px -2px 0 rgb(214, 214, 214), -3px -3px 0 rgb(204, 204, 204),
        -4px -4px 0 rgb(194, 194, 194), -5px -5px 0 rgb(184, 184, 184),
        -6px -6px 0 rgb(173, 173, 173), -7px -7px 0 rgb(163, 163, 163),
        -8px -8px 0 rgb(153, 153, 153), -9px -9px 0 rgb(143, 143, 143),
        -10px -10px 0 rgb(132, 132, 132), -11px -11px 0 rgb(122, 122, 122),
        -12px -12px 0 rgb(112, 112, 112), -13px -13px 0 rgb(102, 102, 102),
        -14px -14px 13px rgba(0, 0, 0, 0.25), -14px -14px 1px rgba(0, 0, 0, 0.5),
        0px 0px 13px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width: 440px) {
    header {
      h1 {
        font-size: 40px;
      }
    }
  }
</style>
