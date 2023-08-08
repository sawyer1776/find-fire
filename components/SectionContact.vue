<template>
	<div id="contact"></div>
	<section>
		<div class="contact-container">
			<h1 class="heading">How Can We Help</h1>
			<picture>
				<source
					type="image/webp"
					srcset="
						/imgs/contact-img-550w.webp,
						/imgs/contact-img-362w.webp 362w
					"
				/>

				<img
					src="/imgs/contact-img-550w.jpg"
					alt="image of an office building"
				/>
			</picture>
			<button
				v-on:click="setEmailAddr"
				class="background-white wide"
			>
				Send Us A Message
			</button>
			<transition>
				<div>
					<h3 v-if="formSubmitted">
						Form Submitted! Thanks for reaching out, someone
						will be in touch shortly.
					</h3>
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						@submit.prevent="submitForm"
						v-if="showMessage"
					>
						<input
							type="hidden"
							name="form-name"
							value="contact"
						/>
						<h3>Email us at</h3>
						<h3>{{ emailAddr }}</h3>
						<h3>OR</h3>
						<p
							class="warning"
							v-if="nameIsValid === 'invalid'"
						>
							Please enter your name.
						</p>
						<input
							v-model.trim="name"
							class="input"
							:class="{
								invalid: nameIsValid === 'invalid',
							}"
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							maxlength="60"
							@blur="validateName"
						/>
						<p
							class="warning"
							v-if="emailIsValid === 'invalid'"
						>
							Please enter a valid email
						</p>
						<input
							v-model.trim="email"
							class="input"
							:class="{
								invalid: emailIsValid === 'invalid',
							}"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							maxlength="254"
							@blur="validateEmail"
							@input="checkToValidateEmail"
						/>
						<p
							class="warning"
							v-if="phoneIsValid === 'invalid'"
						>
							Please enter 10 digit phone number or include
							a country code if outside of the USA
						</p>
						<input
							@input="formatPhone"
							v-model.trim="phone"
							class="input"
							:class="{
								invalid: phoneIsValid === 'invalid',
							}"
							type="tel"
							name="phone"
							id="phone"
							placeholder="Phone"
							maxlength="14"
							@blur="validatePhone"
						/>
						<textarea
							v-model="message"
							class="input"
							name="message"
							id="message"
							placeholder="Message"
						/>
						<button
							type="submit"
							class="background-white narrow submit"
						>
							Submit
						</button>
					</form>
				</div>
			</transition>
			<button
				v-on:click="setPhone"
				class="background-yellow wide last-btn"
			>
				Give Us A Call
			</button>

			<transition>
				<div v-if="showPhone" class="phone-number">
					<Icon class="icon" name="mingcute:phone-fill" />
					{{ phoneNumber }}
				</div>
			</transition>
		</div>
	</section>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			emailAddr: '',
			phoneNumber: '',
			showMessage: false,
			formSubmitted: false,
			showPhone: false,
			name: '',
			email: '',
			phone: '',
			message: '',
			emailIsValid: 'pending',
			phoneIsValid: 'pending',
			nameIsValid: 'pending',
		};
	},
	methods: {
		encode(data) {
			console.log('Axios Data', data);
			return Object.keys(data)
				.map(
					(key) =>
						`${encodeURIComponent(
							key
						)}=${encodeURIComponent(data[key])}`
				)
				.join('&');
		},
		setEmailAddr() {
			this.emailAddr =
				'contact' + '@find' + 'firedigital.com';
			this.showMessage = !this.showMessage;
		},
		setPhone() {
			this.phoneNumber = '(123) ' + '456-' + '7890';
			this.showPhone = !this.showPhone;
		},
		submitForm() {
			if (
				this.nameIsValid === 'valid' &&
				this.emailIsValid === 'valid'
			) {
				const axiosConfig = {
					header: {
						'Content-Type':
							'application/x-www-form-urlencoded',
					},
				};
				axios.post(
					'/',
					this.encode({
						'form-name': 'contact',
						name: this.name,
						email: this.email,
						phone: this.phone,
						message: this.message,
					}),
					axiosConfig
				);

				this.formSubmitted = true;
				this.showMessage = false;

				console.log('Form submitted!');
				console.log(this.name);
				console.log(this.email);
				console.log(this.phone);
				console.log(this.message);

				this.name = '';
				this.email = '';
				this.phone = '';
				this.message = '';
				this.emailIsValid = 'pending';
				this.phoneIsValid = 'pending';
				this.nameIsValid = 'pending';
			} else return;
		},
		validateName() {
			console.log('Name Blur Event');
			if (this.name.length < 1) {
				this.nameIsValid = 'invalid';
			} else {
				this.nameIsValid = 'valid';
			}
		},
		validateEmail() {
			if (
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
					this.email
				)
			) {
				this.emailIsValid = 'valid';
			} else {
				this.emailIsValid = 'invalid';
			}
		},
		validatePhone() {
			if (this.phone.length < 14) {
				this.phoneIsValid = 'invalid';
			} else {
				this.phoneIsValid = 'valid';
			}
		},
		formatPhone() {
			if (this.phoneIsValid === 'invalid') {
				this.validatePhone();
			}
			const tempNumber = this.phone.replace(/[^\d]/g, '');
			if (tempNumber.length <= 3) {
				this.phone = tempNumber;
			}
			if (tempNumber.length > 3 && tempNumber.length < 7) {
				this.phone =
					'(' +
					tempNumber.slice(0, 3) +
					') ' +
					tempNumber.slice(3);
			}
			if (tempNumber.length >= 7) {
				this.phone =
					'(' +
					tempNumber.slice(0, 3) +
					') ' +
					tempNumber.slice(3, 6) +
					'-' +
					tempNumber.slice(6, 10);
			}
		},
		checkToValidateEmail() {
			if (this.emailIsValid === 'invalid') {
				this.validateEmail();
			}
		},
	},
};
</script>

<style scoped>
section {
	width: 100%;
	margin-bottom: 5rem;
	max-width: 75rem;
}
.contact-container {
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 3rem 1rem;
	background-color: var(--brand-orange);
	padding-bottom: 5rem;
	box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
}
h1 {
	color: var(--offwhite);
	text-shadow: 1px 1px 0 black;
}
h3 {
	color: var(--offwhite);
	font-size: 2.25rem;
	font-weight: 600;
	text-align: center;
	color: var(--dark-brown);
}

img {
	width: 100%;
	height: auto;
	margin-bottom: 1rem;
	border-radius: 9px;
	z-index: 2;
}
button {
	font-size: 2rem;
	z-index: 2;
}

form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	margin-bottom: 2rem;
	z-index: 1;
}
.input {
	width: 100%;
	padding: 1rem 2rem;
	font-size: 2rem;
	font-weight: 400;
	border-radius: 9px;
	border: 2px solid var(--grey);
}

.icon {
	width: 4rem;
	height: 4rem;
}

.submit {
	padding: 1rem 2rem;
}
#message {
	height: 15rem;
	text-align: left;
	font-family: inherit;
}
.last-btn {
	margin-bottom: -2rem;
	z-index: 1;
}

.phone-number {
	width: 90%;
	background-color: var(--offwhite);
	font-size: 2rem;
	font-weight: 800;
	color: var(--brand-brown);
	border: 2px solid var(--grey);
	padding: 2rem 1rem;
	border-radius: 9px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
}

.warning {
	font-size: 2rem;
	font-weight: 600;
}

.invalid {
	border: 5px solid red;
}

#contact {
	height: 8rem;
	margin-top: -8rem;
}

.v-enter-from {
	opacity: 0;
	transform: translateY(-25%);
	height: 0;
	overflow: hidden;
	z-index: -1;
}
.v-enter-active {
	transition: all 0.2s ease-out;
}
.v-enter-to {
	opacity: 1;
	transform: translateY(0);
}

@media (min-width: 550px) {
	section {
		max-width: 65rem;
	}

	.contact-container {
		border-radius: 9px;
		gap: 4rem;
		padding: 5rem;
		padding-bottom: 9rem;
		box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.25);
	}
	h1 {
		text-shadow: 2px 2px 0 black;
	}

	h3 {
		font-size: 3.5rem;
	}
	img {
		border-radius: 12px;
	}
	button {
		font-size: 3.5rem;
	}
	form {
		gap: 1.5rem;
	}
	.input {
		padding: 1rem 2rem;
		font-size: 4rem;
		border-radius: 9px;
	}
	#message {
		height: 20rem;
	}
	.icon {
		width: 5rem;
		height: 5rem;
	}
	.phone-number {
		font-size: 4rem;
		font-weight: 600;
		border-radius: 12px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		margin-top: -2rem;
	}
}
</style>
