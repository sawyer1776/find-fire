<template>
	<section>
		<picture>
			<source
				type="image/webp"
				sizes="(min-width: 1090px) 100vw, 50vw"
				srcset="
					../public/imgs/logo-virtical-750w.webp    750w,
					../public/imgs/logo-horizontal-1600w.webp
				"
			/>
			<img
				src="../public/imgs/logo-virtical-750w.png"
				alt="logo of a man dancing in front of a fire"
			/>
		</picture>
		<MotivatorVideo />
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0rem;
}
img {
	width: 100vw;
	aspect-ratio: 29/40;
	max-width: 75rem;
	object-fit: contain;
}

@media (min-width: 1090px) {
	section {
		width: 100%;
		gap: 20rem;
	}
	picture {
		padding: 5rem;
	}

	img {
		aspect-ratio: 21/5;
		margin-top: 8rem;
		width: 100%;

		height: auto;
		max-width: 112rem;
	}
}
</style>
