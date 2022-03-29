import { createStore } from "vuex";
import templates, { TemplatesProps } from "@/store/templates";
import user, { UserProps } from "@/store/user";

export interface GlobalDataProps {
  templates: TemplatesProps,
  user: UserProps
}

export default createStore({
  modules: {
    templates,
    user
  },
});
