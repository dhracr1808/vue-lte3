import { defineStore } from "pinia";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./../firebase";
import { router } from "./../router";

import { createUserWithEmailAndPassword as createUser } from "firebase/auth";
import { signInWithEmailAndPassword as loginUser } from "firebase/auth";

/*===================== Auth Google================================= */

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

/*===================== Auth Facebook================================= */

import { FacebookAuthProvider } from "firebase/auth";

export const useUserStore = defineStore("userStore", {
  state: () => ({ isAuthenticated: null, loadingUser: false, popop: false }),

  actions: {
    async registerUser(email, password) {
      this.loadingUser = true;

      try {
        const { user } = await createUser(auth, email, password);
        this.isAuthenticated = { email: user.email, uid: user.uid };
        router.push("/");
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loadingUser = false;
      }
    },
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
    async loginGoogle() {
      try {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        this.isAuthenticated = {
          email: user.email,
          img: user.photoURL,
          uid: user.uid,
        };
        console.log(user);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async loginFacebok() {
      try {
        const provider = new FacebookAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        this.isAuthenticated = {
          email: user.email,
          img: user.photoURL,
          uid: user.uid,
        };
        console.log(user);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async logoutUser() {
      try {
        await signOut(auth);
        this.isAuthenticated = null;
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    currentUser() {
      return new Promise((resolve, reject) => {
        const unsuscribe = onAuthStateChanged(
          auth,
          (user) => {
            if (user)
              this.isAuthenticated = {
                email: user.email,
                img: user.photoURL,
                uid: user.uid,
              };
            else {
              this.isAuthenticated = null;
            }
            resolve(user);
          },
          reject
        );
        unsuscribe();
      });
    },

    togglePopop() {
      this.popop = !this.popop;
    },
  },
});
