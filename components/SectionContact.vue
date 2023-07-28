<template>
	<div id="contact"></div>
	<section>
		<div class="contact-container">
			<h1 class="heading">How Can We Help</h1>
			<img
				src="/imgs/contact-img.jpg"
				alt="image of an office building"
			/>
			<button
				v-on:click="setEmailAddr"
				class="background-white wide"
			>
				Send Us A Message
			</button>
			<transition>
				<form v-if="showMessage">
					<h3>Email us at</h3>
					<h3>{{ emailAddr }}</h3>
					<h3>OR</h3>

					<input
						class="input"
						type="text"
						name="name"
						id="name"
						placeholder="Name"
					/>
					<input
						class="input"
						type="email"
						name="email"
						id="email"
						placeholder="Email"
					/>
					<input
						class="input"
						type="tel"
						name="phone"
						id="phone"
						placeholder="Phone"
					/>
					<textarea
						class="input"
						name="message"
						id="message"
						placeholder="Message"
					/>
					<button class="background-white narrow submit">
						Submit
					</button>
				</form>
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
export default {
	data() {
		return {
			emailAddr: '',
			phoneNumber: '',
			showMessage: false,
			showPhone: false,
		};
	},
	methods: {
		setEmailAddr() {
			this.emailAddr =
				'contact' + '@find' + 'firedigital.com';
			this.showMessage = !this.showMessage;
		},
		setPhone() {
			this.phoneNumber = '(123) ' + '456-' + '7890';
			this.showPhone = !this.showPhone;
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
