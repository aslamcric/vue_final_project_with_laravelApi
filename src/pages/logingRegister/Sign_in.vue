<template>
    <div class="main-wrapper">
        <div class="account-content">
            <div class="login-wrapper bg-img">
                <div class="login-content">
                    <form @submit.prevent="handleLogin">
                        <div class="login-userset">
                            <div class="login-logo logo-normal">
                                <img src="/assets/img/logo.png" alt="img" />
                            </div>
                            <a href="index.html" class="login-logo logo-white">
                                <img src="/assets/img/logo-white.png" alt="" />
                            </a>
                            <div class="login-userheading">
                                <h3>Sign In</h3>
                                <h4>Access the Dreamspos panel using your email and passcode.</h4>
                            </div>

                            <div class="form-login mb-3">
                                <label class="form-label">Email Address</label>
                                <div class="form-addons">
                                    <input v-model="loginObj.email" type="email" class="form-control" />
                                    <img src="/assets/img/mail.svg" alt="img" />
                                </div>
                            </div>

                            <div class="form-login mb-3">
                                <label class="form-label">Password</label>
                                <div class="pass-group">
                                    <input v-model="loginObj.password" type="password"
                                        class="pass-input form-control" />
                                    <span class="fas toggle-password fa-eye-slash"></span>
                                </div>
                            </div>

                            <div class="form-login authentication-check">
                                <div class="row">
                                    <div class="col-12 d-flex align-items-center justify-content-between">
                                        <div class="custom-control custom-checkbox">
                                            <label class="checkboxs ps-4 mb-0 pb-0 line-height-1">
                                                <input type="checkbox" class="form-control" />
                                                <span class="checkmarks"></span>Remember me
                                            </label>
                                        </div>
                                        <div class="text-end">
                                            <a class="forgot-link" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-login">
                                <button type="submit" class="btn btn-login">Sign In</button>
                            </div>

                            <!-- ✅ Login Error Message -->
                            <div class="form-login" v-if="errorMessage">
                                <div class="alert alert-danger">{{ errorMessage }}</div>
                            </div>

                            <div class="signinform">
                                <h4>
                                    New on our platform?
                                    <a href="register.html" class="hover-a"> Create an account</a>
                                </h4>
                            </div>

                            <div class="form-setlogin or-text">
                                <h4>OR</h4>
                            </div>

                            <div class="form-sociallink">
                                <ul class="d-flex">
                                    <li>
                                        <a href="javascript:void(0);" class="facebook-logo">
                                            <img src="/assets/img/facebook-logo.svg" alt="Facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <img src="/assets/img/google.png" alt="Google" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="apple-logo">
                                            <img src="/assets/img/apple-logo.svg" alt="Apple" />
                                        </a>
                                    </li>
                                </ul>
                                <div class="my-4 d-flex justify-content-center align-items-center copyright-text">
                                    <p>Copyright &copy; 2023 DreamsPOS. All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/AuthStore'

const loginObj = reactive({
    email: '',
    password: ''
})

const errorMessage = ref('') // 👈 for login error message

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
    errorMessage.value = ''
    try {
        await auth.login(loginObj)
        router.push('/dashboard')
    } catch (error) {
        console.error('Login failed:', error)
        errorMessage.value = 'Invalid email or password'
    }
}
</script>

<style scoped>
.bg-img {
    background-image: url('/assets/img/login_aslam_done.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
}

/* Optional styling for the error alert */
.alert {
    padding: 12px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
}

.alert-danger {
    background-color: #f8d7da;
    color: #721c24;
}
</style>
