<template>
	<div class="main">
		<img :src="imgSrc" :alt="altText" />
		<div class="title">
			<div>
				<h1 class="section-title" :class="color">
					{{ title }}
				</h1>

				<h3>
					{{ subtitle }}
				</h3>
			</div>
			<NuxtLink to="#contact" class="button">
				<button class="wide">Contact</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'imgSrc',
		'altText',
		'subtitle',
		'title',
		'color',
	],
};
</script>

<style scoped>
.main {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	width: 100%;
}

.button {
	width: 100%;
	padding: 0 4rem;
	max-width: 60rem;
}

.title {
	width: 100%;
	background-color: var(--dark-brown);
	padding: 1.5rem;
}
h3 {
	color: var(--offwhite);
	font-size: 1.75rem;
	line-height: 1.2;
	font-weight: 600;
	font-family: 'Courier New', Courier, monospace;
}

.section-title {
	padding: 0;
	margin-bottom: 1rem;
}

img {
	margin-top: 1.5rem;
	width: 100vw;
}

@media (min-width: 550px) {
	.main {
		gap: 4rem;
		margin-bottom: 6rem;
	}
	h3 {
		font-size: 3rem;
	}
	.title {
		padding: 3rem;
	}
}

@media (min-width: 1090px) {
	img {
		width: 100%;
		border-radius: 9px;
	}
	.title {
		display: flex;
		gap: 4rem;
	}
	.button {
		width: 45%;
		margin: auto 0;
	}
}
</style>
