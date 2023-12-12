import { ref, computed } from "vue";

const useDate = (initialDate) => {
  const date = ref(new Date(initialDate));

  const formattedDate = computed(() => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.value.toLocaleDateString(undefined, options);
  });

  const addDays = (days) => {
    date.value = new Date(date.value.setDate(date.value.getDate() + days));
  };

  const addMonths = (months) => {
    date.value = new Date(date.value.setMonth(date.value.getMonth() + months));
  };

  const addYears = (years) => {
    date.value = new Date(
      date.value.setFullYear(date.value.getFullYear() + years)
    );
  };

  return {
    date,
    formattedDate,
    addDays,
    addMonths,
    addYears,
  };
};

export default useDate;
