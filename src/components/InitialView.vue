<template>
    <div class="loader-container" v-if="loading">
        <div class="loader">

        </div>
    </div>
    <div class="container">
        <div class="form-container">
            <div class="vortext-title">
                <transition name="form-fade" mode="out-in">
                    <div v-if="exsistUser">
                        <p >Welcome back to</p>
                        <h1>
                            Vortext
                        </h1>
                    </div>
                    <div v-else>
                        <p >Welcome to</p>
                        <h1>
                            Vortext
                        </h1>
                    </div>
                </transition>
            </div>
            <div class="vortext-form">
                <transition name="form-fade" mode="out-in">
                    <div v-if="exsistUser" key="login" class="login-form">
                        <form>
                            <input type="email" name="email" class="form-input" placeholder="email">
                            <input type="password" name="password" class="form-input" placeholder="password">
                            <input type="submit" class="form-input form-submit" value="Login">
                        </form>
                        <p class="form-changeto">
                            You do not have account?
                            <span @click="exsistUser = false">Register</span>
                        </p>
                    </div>

                    <div v-else key="signup" class="signup-form">
                        <form @submit.prevent="registerHandle">
                            <input type="text" name="text" class="form-input" placeholder="Name">
                            <input type="email" name="email" class="form-input" placeholder="email">
                            <input type="password" name="password" class="form-input" placeholder="password">
                            <input type="file" name="profilePhoto" class="form-input file-input" id="file">
                            <label for="file" class="label-for-file form-input">
                                <span>
                                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42ZM21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Z"/></svg>
                                </span>
                                <span style="margin-left: 15px;">
                                    Upload profile picture
                                </span>
                            </label>
                            <input type="submit" class="form-input form-submit" value="Sign Up">
                        </form>
                        <span v-if="registerError" style="margin-top: 10px; display: inline-block; color: red;">
                            {{ registerError }}
                        </span>
                        <p class="form-changeto">
                            Already have account?
                            <span @click="exsistUser = true">Login</span>
                        </p>
                    </div>
                </transition>
            </div>
        </div>
     </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/firebase';
import { doc, setDoc } from "firebase/firestore"; 

export default {
    name:"InitialView",
    data(){
        return {
            registerError: null,
            exsistUser: true,
            loading: false 
        }
    },
    methods:{
            async registerHandle(e) {
                this.loading = true;  // start loader
                this.registerError = null;

                const name = e.target[0].value;
                const email = e.target[1].value;
                const password = e.target[2].value;
                const photo = e.target[3].files[0];

                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;

                    let photoUrl = null;
                    if (photo) {
                        const formData = new FormData();
                        formData.append("file", photo);
                        formData.append("upload_preset", import.meta.env.VITE_UNSIGNED_PRESET);

                        const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                            method: "POST",
                            body: formData
                        });

                        const data = await res.json();
                        photoUrl = data.secure_url; 
                    }

                    await updateProfile(user, {
                        displayName: name,
                        photoURL: photoUrl
                    })

                   
                    await setDoc(doc(db, "users", user.uid), {
                        uid: user.uid,
                        name,
                        email,
                        photoUrl, // now will be either URL or null
                        lastSeen: null
                    });
                    await setDoc(doc(db, "userChats", user.uid), {});
                } 
                catch (error) {
                    this.registerError = error.message.slice(9, );
                }finally {
                    this.loading = false; // stop loader
                }
        }

    }
}

</script>

<style>

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    padding: 0px 20px;
} 

.vortext-title{
    text-align: center;
}

.vortext-title p{
    font-size: 23px;
}

.vortext-title h1{
    font-size: 70px;
    color: var(--primary);
}

.form-container{
    width: 500px;
    max-width: 500px;

}

.form-input{
    display: block;
    width: 100%;
    margin-top: 20px;
    height: 60px;
    padding-left: 20px;
    border-radius: 10px;
    border: 1px solid #dfe1e5;
    font-size: 20px;
    transition: border 0.3s ease;
}

.form-input:focus{
    border: 1px solid var(--primary);
}

.form-submit{
    background-color: var(--primary);
    color: #fff;
}


.file-input{
    display: none;
}

.label-for-file{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.label-for-file svg{
    width: 30px;
}

.form-changeto{
    font-size: 20px;
}

.form-changeto span{
    color: var(--primary);
    cursor: pointer;
    padding: 10px 5px;
}

.signup-form p, .login-form p{
    text-align: center;
    margin-top: 20px
}

.form-fade-enter-active, .form-fade-leave-active {
  transition: all 0.3s ease;
}

.form-fade-enter-from, .form-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.form-fade-enter-to, .form-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}



</style>