<template>
	<section class="card">
		<h1 class="heading">Services We Offer</h1>
		<p>
			We are a full service creative & post-house for
			narrative, commercial, and digital content. We
			customize to fit your project needs and strive to
			deliver beyond expectations.
		</p>
		<div class="buttons">
			<button
				@click="scrollServices"
				class="wide background-white"
			>
				Learn More
			</button>

			<button @click="scrollContact" class="wide">
				Contact
			</button>
		</div>
	</section>
</template>
<script>
export default {
	methods: {
		scrollServices() {
			const services = document.getElementById('services');
			services.scrollIntoView({ behavior: 'smooth' });
		},

		scrollContact() {
			const contact = document.getElementById('contact');
			contact.scrollIntoView({ behavior: 'smooth' });
		},
	},
};
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	/* width: 100vw; */

	padding: 1.5rem;
	background-color: var(--brand-brown);
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	border-radius: 5px;
}
p {
	color: var(--offwhite);
	margin-bottom: 2rem;
}
.buttons {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 0 3.5rem;
	margin-bottom: 1rem;
}

.heading {
	margin-top: 1rem;
	color: var(--brand-yellow);
}

@media (min-width: 550px) {
	.buttons {
		max-width: 75rem;
		margin-bottom: 3rem;
		gap: 2.5rem;
	}
	.card {
		gap: 4rem;
		padding: 2rem 4rem;
		box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.25);
		border-radius: 12px;
		max-width: 75rem;
	}
}
</style>
