<!-- src/App.vue -->
<template>
  <div id="app">
    <p class="date">{{ formattedDate }}</p>
    <div class="btn-container">
      <button @click="addOneDay" class="btn mr-2">Add 1 Day</button>
      <button @click="addOneMonth" class="btn mr-2">Add 1 Month</button>
      <button @click="addOneYear" class="btn mr-2">Add 1 Year</button>
      <button @click="resetDate" class="btn">Reset</button>
    </div>
  </div>
</template>

<script>
import useDate from "@/useDate";

export default {
  name: "App",
  setup() {
    const { date, formattedDate, addDays, addMonths, addYears } = useDate(
      new Date()
    );

    const addOneDay = () => {
      addDays(1);
    };

    const addOneMonth = () => {
      addMonths(1);
    };

    const addOneYear = () => {
      addYears(1);
    };

    const resetDate = () => {
      date.value = new Date();
    };

    return {
      date,
      formattedDate,
      addOneDay,
      addOneMonth,
      addOneYear,
      resetDate,
    };
  },
};
</script>
