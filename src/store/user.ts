import { Module } from "vuex";
import { GlobalDataProps } from './index'

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const user:Module<UserProps, GlobalDataProps> = {
  mutations: {
    login ( state ){
      state.isLogin = true;
      state.userName = '闫鸽';
    },
    logout ( state ){
      state.isLogin = false;
    }
  }
}

export default user
