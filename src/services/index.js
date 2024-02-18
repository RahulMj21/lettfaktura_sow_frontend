import { api } from "../lib/api";

export const fetchAppConfig = async () => {
  try {
    const res = await api.get("/cms/config");
    const data = res.data;

    return data.data;
  } catch (error) {
    return null;
  }
};

export const fetchSidebarLinks = async () => {
  try {
    const res = await api.get("/cms/sidebar-links");
    const data = res.data;

    return data.data;
  } catch (error) {
    return null;
  }
};

export const fetchTerms = async () => {
  try {
    const res = await api.get("/cms/terms");
    const data = res.data;

    return data.data;
  } catch (error) {
    return null;
  }
};

export const fetchProducts = async () => {
  try {
    const res = await api.get("/product/all");
    const data = res.data;

    return data.data;
  } catch (error) {
    return null;
  }
};
