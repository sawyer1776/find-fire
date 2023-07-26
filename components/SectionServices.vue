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
			<NuxtLink to="#services">
				<button class="wide background-white">
					Learn More
				</button>
			</NuxtLink>
			<NuxtLink to="#contact">
				<button class="wide">Contact</button>
			</NuxtLink>
		</div>
	</section>
</template>
<style scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	/* width: 100vw; */

	padding: 1.5rem;
	background-color: var(--dark-brown);
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
</style>
