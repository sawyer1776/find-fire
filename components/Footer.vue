<template>
	<footer>
		<ul>
			<li><h2>Contact</h2></li>
			<li>
				<p>
					Give us a call
					<span
						:class="{
							clicked: showPhone === true,
						}"
						@click="setPhone"
					>
						{{
							showPhone ? phoneNumber : 'show phone number'
						}}
					</span>
				</p>
			</li>
			<li>
				<p>
					Email:
					<span
						:class="{
							clicked: showEmail === true,
						}"
						@click="setEmailAddr"
					>
						{{ showEmail ? emailAddr : 'show email' }}
					</span>
				</p>
			</li>
		</ul>
		<ul>
			<li><h2>Reel</h2></li>
			<li><a href="#">View reel</a></li>
		</ul>
		<ul>
			<li><h2>Services</h2></li>
			<li><NuxtLink to="/creative">Creative</NuxtLink></li>
			<li><NuxtLink to="/offline">Offline</NuxtLink></li>
			<li><NuxtLink to="/online">Online</NuxtLink></li>
		</ul>

		<p class="copyright">
			© 2023 Find Fire Productions LLC
		</p>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			showEmail: false,
			showPhone: false,
			emailAddr: '',
			phoneNumber: '',
		};
	},

	methods: {
		setEmailAddr() {
			this.emailAddr =
				'contact' + '@find' + 'firedigital.com';
			this.showEmail = true;
		},
		setPhone() {
			this.phoneNumber = '(303) ' + '717-' + '4703';
			this.showPhone = true;
		},
	},
};
</script>

<style scoped>
.clicked {
	cursor: default;
}

span {
	cursor: pointer;
	font-weight: 600;
}
footer {
	background-color: var(--brand-brown);
	width: 100%;
	color: var(--light-grey);
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 2rem 1rem;
}

h2 {
	font-size: 2.4rem;
	font-weight: 800;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
}
p {
	font-size: 2.4rem;
}
ul {
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	border-bottom: 2px solid var(--light-grey);
	padding-bottom: 1rem;
}

a {
	font-size: 2.4rem;
	color: var(--light-grey);
	font-weight: 300;
}
.copyright {
	margin: 2rem 0;
	font-size: 1.2rem;
	font-weight: 300;
}
@media (min-width: 550px) {
	footer {
		gap: 3rem;
		padding: 3rem 2rem;
	}

	h2 {
		font-size: 3.5rem;
	}
	p {
		font-size: 3rem;
	}
	ul {
		gap: 1.5rem;
		border-bottom: 4px solid var(--light-grey);
		padding-bottom: 2rem;
	}

	a {
		font-size: 3rem;
	}
	.copyright {
		font-size: 2rem;
	}
}

@media (min-width: 1090px) {
	footer {
		width: 75vw;
		max-width: 190rem;
		margin: 0 auto;
		padding: 3rem 0;
	}
}
</style>
