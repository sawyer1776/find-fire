<template>
	<section>
		<img
			v-if="landscape === false"
			src="../public/imgs/FindFire_Stacked_BrownBG_RGB.jpg"
			alt="Logo of a man with a spear silhouetted agains a fire"
		/>
		<img
			v-if="landscape === true"
			src="../public/imgs/logo-horizontal.jpg"
			alt="Logo of a man with a spear silhouetted agains a fire"
		/>
		<div class="video">
			<h1>Motivator Video</h1>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		landscape: false;
	},
	beforeMount() {
		let width = window.innerWidth;
		let height = window.innerHeight;
		console.log(width, height);
		if (width >= height) {
			this.landscape = true;
		} else {
			this.landscape = false;
		}
	},
};
</script>

<style scoped>
section {
	/* margin-top: rem; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0rem;
}
img {
	width: 100vw;
	max-width: 75rem;
}

.video {
	width: 100vw;
	height: 56.25vw;
	background-color: grey;
}

@media (min-width: 1090px) {
	section {
		width: 100%;
		padding: 5rem;
		gap: 20rem;
	}
	img {
		margin-top: 8rem;
		width: 100%;
		max-width: 95vw;
	}
	.video {
		width: 100%;
		height: 40vw;
	}
}

/* @media (min-width: 1300px) {
	img {
		max-width: 50rem;
		margin-top: -5rem;
	}
}
@media (min-width: 1550px) {
	img {
		max-width: 60rem;
		margin-top: -4rem;
	}
}

@media (min-width: 2200px) {
	img {
		max-width: 85rem;
		margin-top: -2rem;
	}
}*/
</style>
