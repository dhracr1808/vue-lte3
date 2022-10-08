import { defineStore } from "pinia";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./../firebase";
import { router } from "./../router";

import { createUserWithEmailAndPassword as createUser } from "firebase/auth";
import { signInWithEmailAndPassword as loginUser } from "firebase/auth";

export const useUserStore = defineStore("userStore", {
  state: () => ({ isAuthenticated: null, loadingUser: false, popop: false }),

  actions: {
    async loginUser(email, password) {
      this.loadingUser = true;
      try {
        const { user } = await loginUser(auth, email, password);
        this.isAuthenticated = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (error) {
        this.error = "email or password is wrong";
        this.togglePopop();
      } finally {
        this.loadingUser = false;
      }
    },

    togglePopop() {
      this.popop = !this.popop;
    },
  },
});
