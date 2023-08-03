<template>
	<section>
		<picture>
			<source
				type="image/webp"
				sizes="(min-width: 1090px) 100vw, 50vw"
				srcset="
					../public/imgs/logo-virtical-750w.webp    750w,
					../public/imgs/logo-horizontal-1120w.webp
				"
			/>
			<img
				src="../public/imgs/logo-virtical-750w.webp"
				alt="logo of a man dancing in front of a fire"
			/>
		</picture>

		<div class="video">
			<h1>Motivator Video</h1>
		</div>
	</section>
</template>

<script>
// export default {
// 	data() {
// 		landscape: false;
// 	},
// 	beforeMount() {
// 		let width = window.innerWidth;
// 		let height = window.innerHeight;
// 		console.log(width, height);
// 		if (width >= height) {
// 			this.landscape = true;
// 		} else {
// 			this.landscape = false;
// 		}
// 	},
// };
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
	aspect-ratio: 9/16;
	max-width: 75rem;
	object-fit: contain;
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
		aspect-ratio: 16/9;
		margin-top: 8rem;
		width: 100%;
		height: auto;
		max-width: 112rem;
	}
	.video {
		width: 100%;
		height: 40vw;
	}
}
</style>
