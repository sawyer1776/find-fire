<template>
	<video muted loop playsinline autoplay preload="auto">
		<source
			srcset="
				/imgs/creative-920w.webm 920w,
				/imgs/creative-425w.webm 425w
			"
			src="/imgs/creative-920w.webm"
			type="video/webm"
		/>
		<source src="/imgs/creative-max.mp4" type="video/mp4" />

		<p>Your browser doesn't support HTML video.</p>
	</video>
	<!-- <video muted loop autoplay playsinline preload="auto">
		<source
			srcset="
				/imgs/videos/motivator-920w.webm 920w,
				/imgs/videos/motivator-425w.webm 425w
			"
			src="/imgs/videos/motivator-920w.webm"
			type="video/webm"
		/>
		<source
			src="/imgs/videos/motivator-1920.mp4"
			type="video/mp4"
		/>

		<p>Your browser doesn't support HTML video.</p>
	</video> -->
	<!-- <video muted loop autoplay preload="auto" playsinline>
		<source src="/imgs/motivator.webm" type="video/webm" />
	</video> -->
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
