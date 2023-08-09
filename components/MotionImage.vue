<template>
	<video muted loop autoPlay playsInline preload="auto">
		<source
			src="/imgs/creative-motion.webm"
			type="video/webm"
		/>
		<!-- <source
			src="/imgs/videos/motivator-1920w.mp4"
			type="video/mp4"
		/> -->

		<p>Your browser doesn't support HTML video.</p>
	</video>
</template>

<style scoped>
video {
	border-radius: 9px;
	width: 100%;
	margin-top: -5rem;
	margin-bottom: 5rem;
}
@media (min-width: 550px) {
	video {
		border-radius: 12px;
	}
}

@media (min-width: 1090px) {
	video {
		max-width: calc(100% - 20rem);
		/* Matching 10rem padding section Description */
		margin-bottom: 3rem;
		margin-top: -3rem;
	}
}
</style>
