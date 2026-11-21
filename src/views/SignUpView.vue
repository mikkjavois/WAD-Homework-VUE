<template>
    <div class="signup-container">
        <form class="signup-form" @submit.prevent="handleSignup">
            <div class="form-row">
                <label for="email">Email</label>
                <input
                id="email"
                type="email"
                v-model="email"
                placeholder="Email"
                required
                />
            </div>

            <div class="form-row">
                <label for="password">Password</label>
                <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Password"
                required
                />
            </div>

            <div v-if="errors.length > 0" class="error-message" role="alert">
                <p>The password is not valid:</p>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>

            <button type="submit" class="signup-button">Signup</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUpView',
    data() {
        return {
            email: '',
            password: '',
            errors: []
        };
    },
    methods: {
        validatePassword() {
            const unmetRules = [];
            const pwd = this.password;

            if (pwd.length < 8 || pwd.length >= 15) {
                unmetRules.push('The password should be at least 8 characters and less than 15 characters');
            }

            if (!/[A-Z]/.test(pwd)) {
                unmetRules.push('The password should contain at least one uppercase letter');
            }

            if (!/[0-9]/.test(pwd)) {
                unmetRules.push('The password should contain at least one numeric value');
            }

            if ((pwd.match(/[a-z]/g) || []).length < 2) {
                unmetRules.push('The password should include at least two lowercase alphabet characters');
            }

            if (!/^[A-Z]/.test(pwd)) {
                unmetRules.push('The password should start with an uppercase alphabet');
            }
            
            if (!pwd.includes('_')) {
                unmetRules.push('The password should include the character "_"');
            }

            this.errors = unmetRules;
            return unmetRules.length === 0;
        },
        handleSignup() {
            if (this.validatePassword()) {
                // Password is valid (e.g., "Abc_1234")
                alert(`Account created for ${this.email}!`);
                this.email = '';
                this.password = '';
                this.$router.push('/');
            }
        }
    }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 1em;
}

.signup-form {
  background-color: #e4ebe5;
  border-radius: 15px;
  padding: 2em 2.5em;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
}

.form-row label {
  width: 90px;
  text-align: right;
  font-weight: bold;
  color: #2c3e50;
}

.form-row input {
  flex: 1;
  padding: 0.65em 1em;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  outline: none;
}

.form-row input:focus {
  box-shadow: 0 0 0 2px darkcyan;
}

.error-message {
  color: #b00020;
  font-style: italic;
  font-size: 0.9rem;
  text-align: left;
  margin: 0;
  line-height: 1.4;
}

.signup-button {
  align-self: center;
  background-color: #8ab6d6;
  color: #1d2d3a;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  padding: 0.6em 2em;
  cursor: pointer;
  margin-top: 0.5em;
  transition: background-color 0.2s ease;
}

.signup-button:hover {
  background-color: #72a5ca;
}
</style>