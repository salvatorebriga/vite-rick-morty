<script>
  export default {};
</script>

<template>
  <div>
    <input type="text" placeholder="Search character" />
    <select name="status" id="status">
      <option value="default">Select status</option>
    </select>
    <button class="search" value="Search">Search</button>
    <button class="reset" value="Reset">Reset</button>
  </div>
</template>

<style lang="scss" scoped>
  div {
    padding-top: 50px;
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;

    input,
    select,
    .search,
    .reset {
      padding: 10px;
      border-radius: 5px;
      border: none;
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }

    .search {
      background-color: rgb(253, 182, 120);
      &:hover {
        background-color: rgb(251, 151, 63);
      }
    }

    .reset {
      background-color: rgb(121, 130, 253);
      &:hover {
        background-color: rgb(95, 106, 252);
      }
    }
  }
</style>
