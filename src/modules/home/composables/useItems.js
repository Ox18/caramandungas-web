import { ref } from "vue";

import Api from "@/api/base";

export function useItems() {
  const items = ref([]);
  const loading = ref(false);

  const fetch = async () => {
    try {
      loading.value = true;
      const response = await Api.getItems();
      items.value = response.data;
    } catch (error) {
      console.error(error);
      items.value = [];
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    fetch,
    loading,
  };
}
