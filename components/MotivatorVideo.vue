<template>
	<video muted loop autoPlay playsInline preload="auto">
		<source
			src="/imgs/videos/motivator-1250w.webm"
			type="video/webm"
		/>
		<source
			src="/imgs/videos/motivator-1250w.mp4"
			type="video/mp4"
		/>

		<p>Your browser doesn't support HTML video.</p>
	</video>
</template>

<style scoped>
video {
	width: 100%;
}
@media (min-width: 1090px) {
	video {
		width: calc(100% + 3rem);
	}
}
</style>
